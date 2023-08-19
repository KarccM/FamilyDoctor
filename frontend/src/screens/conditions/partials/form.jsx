import React from "react"
import CustomInput from "../../../components/form/TextField";
import SubmitLayout from '../../../components/SubmitLayout';
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Slider, Stack } from "@mui/material";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { config } from '../config';
import * as Yup from "yup";
import { post } from "../../../api/axios";

export default function Form() {
  const { id } = useParams();
  const navigate = useNavigate()
  const schema = Yup.object().shape({
    name: Yup.string().required('field_is_required'),
    question: Yup.string().required('field_is_required'),
  });

  const { isLoading: fetchLoading, data: course } = useQuery({
    queryKey: `${config.queryClientKeys.signal}_${id}`,
    queryFn: () => client(`${config.url}/${id}`).then((data) => data.data),
    enabled: id !== undefined,
  });

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      question: '',
      values: [{
        answer: "",
        score: 0,
      }]
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'values',
    control
  })


  React.useEffect(() => {
    if (course && id !== undefined) {
      reset({
        ...course,
      });
    }
  }, [course]);

  const { mutate, isLoading } = useMutation(
    (data) => post('conditions', data),
    {
      onSuccess: () => {
        navigate('/conditions');
        reset();
      },
      onError: (error) => {

      },
    }
  );

  const onSubmitForm = ({ name, question, values, conditionType, conditionValuesType }) => {
    mutate({
      name,
      question,
      conditionType,
      conditionValuesType,
      values: conditionValuesType === '' ? values.map(value => ({ [label]: value.range })) : values.map(value => value.answer),
    })
  };

  if (fetchLoading) {
    return <>loading ...</>
  }

  return (
    <>
      <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmitForm)}>
        <Stack spacing={3}>
          <Grid container spacing={2} alignItems='end'>
            <Grid item xs={12}>
              <CustomInput label='اسم العرض' name={`name`} control={control} errors={errors} />
            </Grid>
            <Grid item xs={12}>
              <CustomInput label='السؤال' name={`question`} control={control} errors={errors} />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="conditionType">نوع الشرط</InputLabel>
                <Controller
                  render={({ field }) => (
                    <Select {...field}>
                      <MenuItem value="Symptom">Symptom</MenuItem>
                      <MenuItem value="MedicalCondition">Medical Condition</MenuItem>
                      <MenuItem value="PatientInfo">Patient Info</MenuItem>
                    </Select>
                  )}
                  name="conditionType"
                  control={control}
                />
              </FormControl>

            </Grid>
            <Grid item xs={12}>

              <FormControl fullWidth>
                <InputLabel id="conditionValuesType">نوع قيم الشرط</InputLabel>
                <Controller
                  render={({ field }) => (
                    <Select {...field}>
                      <MenuItem value="YesNoValues">Yes No Values</MenuItem>
                      <MenuItem value="NumericIntervalValues">Numeric Interval Values</MenuItem>
                      <MenuItem value="FixedSetValues">Fixed Set Values</MenuItem>
                    </Select>
                  )}
                  name="conditionValuesType"
                  control={control}
                />
              </FormControl>
            </Grid>
            {
              fields.map((field, index) =>
                <React.Fragment key={field.id}>
                  {watch('conditionValuesType') !== "NumericIntervalValues"
                    ? <Grid item xs={10}>
                      <CustomInput label='الاجابة' name={`values.${index}.answer`} control={control} errors={errors} />
                    </Grid>
                    :
                    <>
                      <Grid item xs={5}>
                        <CustomInput label='الصنف' name={`values.${index}.label`} control={control} errors={errors} />
                      </Grid>
                      <Grid item xs={5}>
                        <Controller
                          name={`values.${index}.range`}
                          control={control}
                          defaultValue={[0, 100]}
                          render={({ field }) => (
                            <Slider
                              {...field}
                              onChange={(_, value) => {
                                field.onChange(value);
                              }}
                              valueLabelDisplay="auto"
                              max={100}
                              step={1}
                            />
                          )}
                        />
                      </Grid>

                    </>

                  }
                  <Grid item xs={2}>
                    <Button fullWidth onClick={() => remove(index)}>حذف</Button>
                  </Grid>
                </React.Fragment>
              )
            }
            <Button variant="outlined" fullWidth sx={{ margin: 2 }}
              onClick={() => append({ answer: "", score: 0 })}>
              إضافة إجابة جديدة
            </Button>
          </Grid>
        </Stack>
        <SubmitLayout isLoading={isLoading} isDisabled={!isDirty} label={id !== undefined ? 'تعديل' : 'حفظ'} cancelAction={() => navigate(-1)} />
      </form >
    </>
  );
}
