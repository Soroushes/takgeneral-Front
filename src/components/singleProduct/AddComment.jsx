import {Box, Grid, TextField, Typography} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {useAxios} from "../../hooks/useAxios";
import {useRouter} from "next/navigation";
import LoadingButton from "@mui/lab/LoadingButton";
import testImage from '../../assets/images/product-image.png'
import Image from "next/image";
import Checkbox from "@mui/material/Checkbox";

const AddComment = ({rate}) => {
    const {control, handleSubmit, reset} = useForm({
        defaultValues: {
            kefiyat_rate: rate.avg_keyfiyat_rate ?? 3,
            arzesh_rate: rate.avg_arzesh_rate ?? 3
        }
    });
    const {loading, callApi} = useAxios();
    const router = useRouter();
    const onFormSubmit = (data) => {
        callApi({
            method: 'post',
            url: 'create-comment',
            token: true,
            data: {
                ...data,
                product: router.query.productId
            },
            successFunc: () => {
                reset();
            }
        })
    }
    return (
        <Box sx={{mb: 4, width: '100%', p: 2}} component={'form'} onSubmit={handleSubmit(onFormSubmit)}>
            <Grid container justifyContent={'space-between'} rowGap={3}>
                <Grid item md={4} xs={12}>
                    <Box sx={{height: '100%'}} display={'flex'} justifyContent={'space-between'}
                         flexDirection={'column'}>
                        <Typography variant={'subtitle1'} sx={{textAlign: 'center'}}>ست کنترل پنتاکس اصلی هیدروماتیک
                            H2</Typography>
                        <Box sx={{width: '100%', textAlign: 'center'}}>
                            <Image height={250} width={250} style={{width: '100%', height: 'auto'}} src={testImage}
                                   alt={'test'}/>
                        </Box>
                    </Box>

                </Grid>
                <Grid item md={7} xs={12}>
                    <Box display={'flex'} alignItems={'center'}>
                        <Controller
                            name="suggest_me"
                            control={control}
                            defaultValue={false}
                            render={({field}) =>
                                <Checkbox color="secondary" checked={field.value} onChange={field.onChange}/>
                            }
                        />
                        <Typography color={'text.muted'}>پیشنهاد میکنم</Typography>
                    </Box>
                    <Box mb={2}>
                        <Controller
                            defaultValue={''}
                            name={'comment'}
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
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                        <LoadingButton loading={loading} type={'submit'} variant="contained">ارسال نظر</LoadingButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default AddComment;