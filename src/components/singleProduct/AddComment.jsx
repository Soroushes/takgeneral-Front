import {Grid, Typography, Box, Divider, TextField} from "@mui/material";
import Rating from '@mui/material/Rating';
import {Controller, useForm} from "react-hook-form";
import {userCommentInput} from "src/data/comment&question";
import Checkbox from '@mui/material/Checkbox';
import {useAxios} from "../../hooks/useAxios";
import {useRouter} from "next/navigation";
import LoadingButton from "@mui/lab/LoadingButton";
const AddComment = ({rate}) => {
    const {control, handleSubmit, reset} = useForm({
        defaultValues : {
            kefiyat_rate : rate.avg_keyfiyat_rate ?? 3 ,
            arzesh_rate : rate.avg_arzesh_rate ?? 3
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
        <Box sx={{mb : 4 , width:'100%' , px : 2}} component={'form'} onSubmit={handleSubmit(onFormSubmit)}>
            <Typography fontWeight={'bold'} sx={{mb: 4}}>نظر شما درباره این کالا</Typography>
            <Grid container justifyContent={'space-between'} rowGap={3}>
                <Grid item md={4} xs={12}>
                    <Box display={'flex'} flexDirection={'column'} gap={2}>
                        <Box display={'flex'} gap={5} justifyContent={'space-between'}>
                            <Typography variant="body2" color={'text.muted'}>کیفیت و کارایی</Typography>
                            <Controller
                                name="kefiyat_rate"
                                control={control}
                                defaultValue={0}
                                render={({field}) =>
                                    <Rating value={+field.value} onChange={field.onChange}/>
                                }
                            />
                        </Box>
                        <Divider/>
                        <Box display={'flex'} gap={5} justifyContent={'space-between'}>
                            <Typography variant="body2" color={'text.muted'}>ارزش خرید</Typography>
                            <Controller
                                name="arzesh_rate"
                                defaultValue={0}
                                control={control}
                                render={({field}) =>
                                    <Rating value={+field.value} onChange={field.onChange}/>
                                }
                            />
                        </Box>
                        <Divider/>
                    </Box>
                </Grid>
                <Grid item md={7} xs={12}>
                    {
                        userCommentInput.comment.map((comment) => {
                            return (
                                <Box key={comment.name} mb={2}>
                                    <Controller
                                        defaultValue={''}
                                        name={comment.name}
                                        control={control}
                                        rules={comment.rules}
                                        render={({field, fieldState}) =>
                                            <TextField
                                                error={!!fieldState.error}
                                                label={comment.label}
                                                value={field?.value}
                                                onChange={field?.onChange}
                                                helperText={fieldState.error?.message ?? ''}
                                                variant={'outlined'}
                                                fullWidth={true}
                                                {...comment.props}
                                            />
                                        }
                                    />
                                </Box>
                            )
                        })
                    }
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
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
                        <LoadingButton loading={loading} type={'submit'} variant="contained">ارسال نظر</LoadingButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default AddComment;