import {Box, Button, TextField, Typography} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {useAxios} from "../../../hooks/useAxios";
import Message from "../../../assets/icons/message.svg";
import LoadingButton from "@mui/lab/LoadingButton";
import useAlert from "../../../hooks/useAlert";
import {useRouter} from "next/navigation";
import MainModal from "../../share/MainModal";
const AddAnswerModal = ({setOpen, open, productId}) => {
    const {control, handleSubmit, getValues, reset} = useForm();
    const {callApi, loading} = useAxios();
    const {errorAlert, successAlert} = useAlert();
    const router = useRouter();
    const onFormSubmit = async () => {
        callApi({
            url: 'question-reply', method: 'post', token: true, data: {
                question: productId, content: getValues('newAnswer')

            }, successFunc: () => {
                reset();
                setOpen(prev => !prev);
                successAlert('پاسخ شما با موفقیت ثبت شد');
                router.push(`/product/${productId}`);
            }, errFunc: () => {
                errorAlert('پاسخ شما ثبت نشد')
            }
        })
    };
    return (
        <MainModal open={open} setOpen={setOpen} title={'ثبت پاسخ'}>
            <Box sx={{p: 3}} component={'form'} onSubmit={handleSubmit(onFormSubmit)}>
                <Box display={'flex'} gap={1} mb={4}>
                    <Typography sx={{width: '16%'}} variant={'h5'}>در جواب</Typography>
                    <Typography variant={'h4'} fontWeight={'bold'} mb={2}>سلام برای ساختمان ۴طبقه که پمپ آب درزیرزمین باشد جوابگو هست یا خیر؟</Typography>
                </Box>
                <Controller
                    name="newAnswer"
                    defaultValue={''}
                    control={control}
                    rules={{required: 'متن پاسخ خود را وارد کنید'}}
                    render={({field, fieldState}) => <TextField
                        sx={{borderRadius: 2}}
                        label={'پاسخ شما'}
                        value={field.value}
                        size={'small'}
                        helperText={fieldState.error?.message ?? ''}
                        error={!!fieldState.error?.message}
                        onChange={field.onChange}
                        autoFocus
                        multiline={true}
                        fullWidth={true}
                        rows={5}
                    />}
                />
                <Box gap={2} sx={{mt: 4}} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                    <LoadingButton sx={{borderRadius: 2, width: '50%', height: 40}} loading={loading} type={'submit'}
                                   variant="contained"><Typography variant={'subtitle1'} sx={{mr: 1}}
                                                                   color={'#fff'}> ثبت پاسخ</Typography><Message/></LoadingButton>
                    <Button onClick={reset} sx={{borderRadius: 2, width: '50%', height: 40}} color={'gray'}
                            variant={'outlined'}><Typography variant={'subtitle1'}>پاک کردن
                        همه</Typography></Button>
                </Box>
            </Box>
        </MainModal>
    )
}
export default AddAnswerModal