import {Button, TextField, Typography} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {Box} from "@mui/system";
import {useAxios} from "src/hooks/useAxios";
import Message from "../../../assets/icons/message.svg";
import LoadingButton from "@mui/lab/LoadingButton";
import useAlert from "../../../hooks/useAlert";

const AddQuestionModal = ({productId, setClose}) => {
    const {control, getValues, handleSubmit, reset} = useForm();
    const {errorAlert, successAlert} = useAlert();
    const {callApi, loading} = useAxios();
    const submitForm = async () => {
        callApi({
            url: 'create-question',
            method: 'post',
            token: true,
            data: {
                content: getValues('question'),
                product: productId
            }, successFunc: () => {
                reset();
                setClose((prev) => !prev);
                successAlert('پرسش شما با موفقیت ثبت شد');
            },
            errFunc: () => {
                errorAlert('پرسش شما ثبت نشد')
            }
        })
    }
    return (
        <Box onSubmit={handleSubmit(submitForm)} component={'form'}
             sx={{px: 5, pb: 2, mt: 5 }}>
            <Box display={'flex'} sx={{mb:3}} gap={1}>
                <Typography variant={'h5'}>در مورد</Typography>
                <Typography variant={'h4'} fontWeight={'bold'} mb={2}>ست کنترل پنتاکس اصلی هیدروماتیک H2</Typography>
            </Box>
            <Controller
                defaultValue={''}
                control={control}
                name={'question'}
                rules={{required: 'متن پرسش خود را وارد کنید'}}
                render={({field, fieldState}) =>
                    <TextField
                        error={!!fieldState.error?.message}
                        value={field.value}
                        onChange={field.onChange}
                        helperText={fieldState.error?.message ?? ''}
                        label={'پرسش شما'}
                        variant={'outlined'}
                        fullWidth={true}
                        rows={5}
                        multiline={true}
                    />
                }
            />
            <Box gap={2} sx={{mt: 4}} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                <LoadingButton sx={{borderRadius: 2, width: '50%', height: 40}} loading={loading} type={'submit'}
                               variant="contained"><Typography variant={'body1'} sx={{mr: 1}} color={'#fff'}> ثبت
                    پرسش
                    ها</Typography><Message/></LoadingButton>
                <Button onClick={reset} sx={{borderRadius: 2, width: '50%', height: 40}} color={'gray'}
                        variant={'outlined'}><Typography variant={'body1'}>پاک کردن
                    همه</Typography></Button>
            </Box>
        </Box>
    )
};
export default AddQuestionModal;

