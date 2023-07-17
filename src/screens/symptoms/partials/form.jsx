import React from "react"
import CustomInput from "../../../components/form/TextField";
import SubmitLayout from '../../../components/SubmitLayout';
import { successWithCustomMessage } from "../../../utils/notifications";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Grid, Stack } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
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
      answers: [{
        answer: "",
        score: 0,
      }]
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: 'answers',
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

  const onSubmitForm = ({ name, question, answers }) => {
    console.log('answers :>> ', answers);
    // mutate({
    //   name,
    //   question,
    //   answers,
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
            {
              fields.map((field, index) =>
                <React.Fragment key={field.id}>
                  <Grid item xs={5}>
                    <CustomInput label='الاجابة' name={`answers.${index}.question`} control={control} errors={errors} />
                  </Grid>
                  <Grid item xs={5}>
                    <CustomInput label='السكور' name={`answers.${index}.score`} control={control} errors={errors} type="number" />
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
