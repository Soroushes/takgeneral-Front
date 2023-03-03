import PanelLayout from "../../components/layout/panelLayout";
import {Grid, TextField, Typography} from "@mui/material";
import {userInputData} from "../../data/profile/userInputData" ;
import {Controller, useForm} from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import {Box} from "@mui/system";

const ProfilePage = () => {
    const {control, handleSubmit, getValues} = useForm();

    const submitForm = ()=>{
        console.log('salam')
    }
    return (
        <PanelLayout>
            <Typography component={'h1'} variant={"h6"} sx={{mb: 2}}>مشخصات فردی</Typography>
            <Grid onSubmit={handleSubmit(submitForm)}  justifyContent={"space-between"} component={'form'} rowGap={5} container>
                {
                    userInputData.map((input) => (
                        <Grid key={input.name} xs={12} md={5.7} item>
                            <Controller
                                defaultValue={''}
                                name={input.name}
                                control={control}
                                rules={input.rules}
                                render={({field, fieldState}) =>
                                    <TextField
                                        error={!!fieldState.error}
                                        helperText={fieldState.error?.message ?? ''}
                                        {...input.inputProps}
                                        value={field.value}
                                        onChange={field.onChange}
                                        variant={'outlined'} fullWidth={true}
                                    />
                                }
                            />

                        </Grid>
                    ))
                }
                <Box sx={{width : "100%" , mb : 2}}>
                    <Grid xs={12} md={5.7} item>
                        <LoadingButton type={'submit'} variant={'contained'} sx={{p : 1.5}} fullWidth >ثبت مشخصات</LoadingButton>
                    </Grid>
                </Box>
            </Grid>
        </PanelLayout>
    )
}
export default ProfilePage;