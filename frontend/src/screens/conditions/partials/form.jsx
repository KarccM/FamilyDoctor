import React from "react"
import CustomInput from "../../../components/form/TextField";
import SubmitLayout from '../../../components/SubmitLayout';
import { successWithCustomMessage } from "../../../utils/notifications";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Slider, Stack } from "@mui/material";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { config } from '../config';
import * as Yup from "yup";

export default function Form() {
  const { id } = useParams();
  // const client = useClient('multipart/form-data');
  const queryClient = useQueryClient();

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

  const { mutate, isError, isLoading } = useMutation(
    (data) =>
      client(`${id ? `${config.url}/${id}` : `${config.url}`} `, {
        method: id ? 'PATCH' : 'POST',
        data,
      }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(config.queryClientKeys.list);
        navigate(`${route}`);
        reset();
        if (id) successWithCustomMessage("updated_success_msg");
        else successWithCustomMessage("added_success_msg");
      },
      onError: (error) => {
        setBackendErrors(Array.isArray(error.response.data.message) ? error.response.data.message : [error.response.data.message]);

      },
    }
  );

  const onSubmitForm = ({ name, question, values }) => {
    console.log('values :>> ', values);
    // mutate({
    //   name,
    //   question,
    //   values,
    // })
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
                <InputLabel id="conditionType">Condition Type</InputLabel>
                <Controller
                  render={({ field }) => (
                    <Select {...field}>
                      <MenuItem value="Symptom">Symptom</MenuItem>
                      <MenuItem value="MedicalCondition">MedicalCondition</MenuItem>
                      <MenuItem value="PatientInfo">PatientInfo</MenuItem>
                    </Select>
                  )}
                  name="conditionType"
                  control={control}
                />
              </FormControl>

            </Grid>
            <Grid item xs={12}>

              <FormControl fullWidth>
                <InputLabel id="conditionValuesType">Condition Values Type</InputLabel>
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

            <section>
              <label>MUI Slider</label>
              <Controller
                name="values_"
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
            </section>
            {
              fields.map((field, index) =>
                <React.Fragment key={field.id}>
                  <Grid item xs={10}>
                    <CustomInput label='الاجابة' name={`values.${index}.question`} control={control} errors={errors} />
                  </Grid>
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
