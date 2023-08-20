import React from "react"
import CustomInput from "../../../components/form/TextField";
import SubmitLayout from '../../../components/SubmitLayout';
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Slider, Stack, Backdrop, CircularProgress, FormControl, InputLabel, Select, MenuItem, LinearProgress } from '@mui/material';
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { get, post } from "../../../api/axios";
import CustomTextarea from "../../../components/form/CustomTextarea";

export default function Form() {
  const { id } = useParams();
  const navigate = useNavigate()
  const schema = Yup.object().shape({
    name: Yup.string().required('field_is_required'),
    question: Yup.string().required('field_is_required'),
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
      }]
    },
  });

  const { data: conditions, isLoading: conditionLoading } = useQuery({
    queryKey: [`conditions`],
    queryFn: () => get(`conditions`).then((data) => data.data),
  });
  console.log('conditions :>> ', conditions);


  const { fields, append, remove } = useFieldArray({
    name: 'values',
    control
  })

  const { fields: conds, append: appendCond, remove: removeCond } = useFieldArray({
    name: 'conds',
    control
  })

  const { mutate, isLoading } = useMutation(
    (data) => post('conclusions', data),
    {
      onSuccess: () => {
        navigate('/conclusions');
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

  return (
    <>
      <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmitForm)}>
        <Stack spacing={3}>
          <Grid container spacing={2} alignItems='end'>
            <Grid item xs={6}>
              <CustomInput label='الاسم' name='name' control={control} errors={errors} />
            </Grid>
            <Grid item xs={6}>
              <CustomInput label='التخصص' name='specialist' control={control} errors={errors} />
            </Grid>
            <Grid item xs={12}>
              <CustomInput label='الاولوية' name='question' control={control} errors={errors} type="number" />
            </Grid>
            <Grid item xs={12}>
              <CustomInput label='إجرائيات' name='treatment' control={control} errors={errors} />
            </Grid>
            <Grid item xs={12}>
              <CustomTextarea label='الملاحظات' name='notes' control={control} errors={errors} />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="conclusionType">نوع الاستنتاج</InputLabel>
                <Controller
                  render={({ field }) => (
                    <Select {...field}>
                      <MenuItem value="Diagnosis">Diagnosis</MenuItem>
                      <MenuItem value="Disease">Disease</MenuItem>
                    </Select>
                  )}
                  name="conclusionType"
                  control={control}
                />
              </FormControl>
            </Grid>
            {
              conditionLoading ? <LinearProgress /> :
                fields.map((field, index) =>
                  <React.Fragment key={field.id}>
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

            {
              conds.map((field, index) =>
                <React.Fragment key={field.id}>
                  <Grid item xs={5}>
                    <CustomInput label='الصنف' name={`conds.${index}.label`} control={control} errors={errors} />
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
                  <Grid item xs={2}>
                    <Button fullWidth onClick={() => remove(index)}>حذف</Button>
                  </Grid>
                </React.Fragment>
              )
            }
            <Button variant="outlined" fullWidth sx={{ margin: 2 }}
              onClick={() => append({ answer: "", score: 0 })}>
              إضافة cond جديدة
            </Button>
          </Grid>
        </Stack>
        <SubmitLayout isLoading={isLoading} isDisabled={!isDirty} label={id !== undefined ? 'تعديل' : 'حفظ'} cancelAction={() => navigate(-1)} />
      </form >
    </>
  );
}
