import {Typography, Grid, TextField, Button} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {Box} from "@mui/system";
import { useAxios } from "src/hooks/useAxios";
const AddQuestion = ({productId}) => {
    console.log(productId)
    const {control, getValues, handleSubmit , reset} = useForm();
    const {callApi , loading} =  useAxios();
    const submitForm = async ()=>{
        callApi({
            url:'create-question', 
            method:'post', 
            token:true, 
            data:{
                content : getValues('question'),
                product: productId
            },successFunc:(res)=>{
                reset();
                console.log(res)
            }
        })
        // try{
        //     const data = await axios({
        //         url:'https://takback.soroushes.tk/create-question/' , 
        //         method:'POST', 
        //         token:true ,
        //         data:{ 
        //             content : getValues('question') , 
        //             product: productId
        //         }
        //     })
        //     console.log(data)
        // }catch(err){
        //     console.log(err)
        // }
    }
    return (
        <Grid onSubmit={handleSubmit(submitForm)} component={'form'} container justifyContent={'space-between'} sx={{px:2 , mt:2 }} rowGap={2}>
            <Grid item md={4} xs={12}>
                <Typography fontWeight={'bold'} mb={2}>پرسش شما درباره این کالا</Typography>
                <Typography variant={'body2'} mb={1}>درباره این کالا سوالی دارید ؟</Typography>
                <Typography variant={'body2'} mb={1}>سوال خود را ثبت کنید</Typography>
            </Grid>
            <Grid item md={7} xs={12}>
                <Box>
                    <Controller
                        defaultValue={''}
                        control={control}
                        name={'question'}
                        rules={{required: 'متن سوال خود را وارد کنید'}}
                        render={({field, fieldState}) =>
                            <TextField
                                error={!!fieldState.error?.message}
                                value={field.value}
                                onChange={field.onChange}
                                helperText={fieldState.error?.message ?? ''}
                                label={'سوال خود را مطرح کنید'}
                                variant={'outlined'}
                                fullWidth={true}
                                rows={4}
                                multiline={true}
                            />
                        }
                    />
                </Box>
                <Box display={'flex'} sx={{mt: 3}}>
                    <Button type='submit' variant="contained" sx={{px: 4}} color="secondary">ارسال پرسش</Button>
                </Box>
            </Grid>
        </Grid>
    )
};
export default AddQuestion;

