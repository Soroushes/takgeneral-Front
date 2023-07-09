import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {useAxios} from "../../../hooks/useAxios";
import {useRouter} from "next/navigation";
import LoadingButton from "@mui/lab/LoadingButton";
import testImage from '../../../assets/images/product-image.png'
import Image from "next/image";
import Rating from "@mui/material/Rating";
import Message from '../../../assets/icons/message.svg';
import {useSelector} from "react-redux";

const AddCommentModal = ({rate , productId}) => {
    const {full_name} = useSelector(state=>state.userInfo)
    const {control, handleSubmit, reset} = useForm({
        defaultValues: {
            kefiyat_rate: rate.avg_keyfiyat_rate ?? 0,
        }
    });
    const {loading, callApi} = useAxios();
    const router = useRouter();
    console.log(router)
    const onFormSubmit = (data) => {
        console.log(data)
        callApi({
            method: 'post',
            url: 'create-comment',
            token: true,
            data: {
                ...data,
                product: productId ,
                arzesh_rate : data.kefiyat_rate,
                title:data.content ,
                user_alias_name : data.content

            },
            successFunc: () => {
                reset();
            }
        })
    }
    return (
        <Box sx={{width: '100%', p: 3}} component={'form'} onSubmit={handleSubmit(onFormSubmit)}>
            <Grid container justifyContent={'space-between'} rowGap={3}>
                <Grid item md={4} xs={12}>
                    <Box sx={{height: '100%'}} display={'flex'} alignItems={'center'} justifyContent={'space-between'}
                         flexDirection={'column'}>
                        <Typography variant={'h6'} fontWeight={'bold'} sx={{textAlign: 'center'}}>ست کنترل پنتاکس اصلی
                            هیدروماتیک
                            H2
                        </Typography>
                        <Box sx={{width: {md:'100%' , xs:'50%'}, textAlign: 'center'}}>
                            <Image height={250} width={250} style={{width: '100%', height: 'auto'}} src={testImage}
                                   alt={'test'}/>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={7} xs={12}>
                    <Box sx={{height: '100%'}} display={'flex'} flexDirection={'column'}
                         justifyContent={'space-between'}>
                        <Box sx={{mb:{xs:1 , md:0}}} display={'flex'} justifyContent={'space-between'}>
                            <Typography>امتیاز شما:</Typography>
                            <Controller
                                name="kefiyat_rate"
                                control={control}
                                defaultValue={0}
                                render={({field}) =>
                                    <Rating value={+field.value} onChange={field.onChange}/>
                                }
                            />
                        </Box>
                        <Box mb={2} display={'flex'} alignItems={'center'}>
                            <Controller
                                name={'suggest_me'}
                                control={control}
                                defaultValue={full_name}
                                rules={{
                                    required: "وارد کردن نام اجباری میباشد"
                                }}
                                render={({field, fieldState}) =>
                                    <TextField
                                        error={!!fieldState.error}
                                        value={field?.value}
                                        onChange={field?.onChange}
                                        helperText={fieldState.error?.message ?? ''}
                                        variant={'outlined'}
                                        fullWidth={true}
                                    />
                                }
                            />           </Box>
                        <Box mb={2}>
                            <Controller
                                name={'content'}
                                control={control}
                                rules={{
                                    required: "وارد کردن نظر اجباری میباشد"
                                }}
                                render={({field, fieldState}) =>
                                    <TextField
                                        error={!!fieldState.error}
                                        label={'دیدیگاه شما'}
                                        value={field?.value}
                                        onChange={field?.onChange}
                                        helperText={fieldState.error?.message ?? ''}
                                        variant={'outlined'}
                                        fullWidth={true}
                                        multiline={true}
                                        rows={3}
                                    />
                                }
                            />
                        </Box>
                        <Box gap={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                            <LoadingButton sx={{borderRadius: 2, width: '50%', height: 40}} loading={loading}
                                           type={'submit'} variant="contained"><Typography variant={'subtitle1'}
                                                                                           sx={{mr: 1}}
                                                                                           color={'#fff'}> ثبت دیدگاه
                                ها</Typography><Message/></LoadingButton>
                            <Button onClick={reset} sx={{borderRadius: 2, width: '50%', height: 40}} color={'gray'}
                                    variant={'outlined'}><Typography variant={'subtitle1'}>پاک کردن
                                همه</Typography></Button>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default AddCommentModal;