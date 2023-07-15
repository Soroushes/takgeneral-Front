import {Button, TextField, Typography} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {Box} from "@mui/system";
import {useAxios} from "src/hooks/useAxios";
import Message from "../../../assets/icons/message.svg";
import LoadingButton from "@mui/lab/LoadingButton";
import useAlert from "../../../hooks/useAlert";
import {useRouter} from "next/navigation";
import MainModal from "../../share/MainModal";

const AddQuestionModal = ({productId, setOpen, open , title , question}) => {
    const {control, getValues, handleSubmit, reset} = useForm();
    const {errorAlert, successAlert} = useAlert();
    const {callApi, loading} = useAxios();
    const router = useRouter();
    const submitForm = async () => {
        if(question){
            callApi({
                url: 'create-question',
                method: 'post',
                token: true,
                data: {
                    content: getValues('question'),
                    product: productId
                }, successFunc: () => {
                    reset();
                    setOpen((prev) => !prev);
                    successAlert('پرسش شما با موفقیت ثبت شد');
                    router.push(`/product/${productId}`)
                },
                errFunc: () => {
                    errorAlert('پرسش شما ثبت نشد')
                }
            })
        }else {
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
        }
    }
    return (
        <MainModal title={title} open={open} setOpen={setOpen}>
            <Box onSubmit={handleSubmit(submitForm)} component={'form'}
                 sx={{px: 5, pb: 2, mt: 5}}>
                <Box display={'flex'} sx={{mb: 3}} gap={.5}>
                    <Typography sx={{width: '16%'}} variant={'h5'}>{question ?'در مورد': 'در جواب'}</Typography>
                    <Typography variant={'h4'} fontWeight={'bold'} mb={2}>{question ? 'ست کنترل پنتاکس اصلی هیدروماتیک H2':'سلام برای ساختمان ۴طبقه که پمپ آب درزیرزمین باشد جوابگو هست یا خیر؟'}</Typography>
                </Box>
                <Controller
                    defaultValue={''}
                    control={control}
                    name={question ? 'question': 'newAnswer'}
                    rules={question ? {required: 'متن پرسش خود را وارد کنید'} : {required: 'متن پاسخ خود را وارد کنید'}}
                    render={({field, fieldState}) =>
                        <TextField
                            error={!!fieldState.error?.message}
                            value={field.value}
                            onChange={field.onChange}
                            helperText={fieldState.error?.message ?? ''}
                            label={question ?'پرسش شما': 'پاسخ شما'}
                            variant={'outlined'}
                            fullWidth={true}
                            rows={5}
                            multiline={true}
                        />
                    }
                />
                <Box gap={2} sx={{mt: 3, mb: 2}} display={'flex'} alignItems={'center'}
                     justifyContent={'space-between'}>
                    <LoadingButton sx={{borderRadius: 2, width: '50%', height: 40}} loading={loading} type={'submit'} variant="contained"><Typography variant={'body1'} sx={{mr: 1}} color={'#fff'}>{question ? ' ثبت پرسش ها' : ' ثبت پاسخ'}</Typography><Message/></LoadingButton>
                    <Button onClick={reset} sx={{borderRadius: 2, width: '50%', height: 40}} color={'gray'}
                            variant={'outlined'}><Typography variant={'body1'}>پاک کردن
                        همه</Typography></Button>
                </Box>
            </Box>
        </MainModal>
    )
};
export default AddQuestionModal;

