import {Typography, Grid, TextField, Button} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import {Box} from "@mui/system";
const SingleProductAddQuestion = () => {
    const {control} = useForm();
    return (
        <Grid container justifyContent={'space-between'} rowGap={2}>
            <Grid item md={4} xs={12}>
                <Typography fontWeight={'bold'} mb={2}>پرسش شما درباره این کالا</Typography>
                <Typography variant={'body2'} mb={1}>درباره این کالا سوالی دارید ؟</Typography>
                <Typography variant={'body2'} mb={1}>سوال خود را ثبت کنید</Typography>
            </Grid>
            <Grid item md={8} xs={12}>
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
                    <Button variant="contained" sx={{px: 4}} color="secondary">ارسال پرسش</Button>
                </Box>
            </Grid>
        </Grid>
    )
};
export default SingleProductAddQuestion;