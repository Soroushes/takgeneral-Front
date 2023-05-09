import PanelLayout from "../../components/layout/panelLayout";
import {Grid, TextField, Typography} from "@mui/material";
import {userInputData} from "../../data/profile/userInputData" ;
import {Controller, useForm} from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import {Box} from "@mui/system";
import {useEffect} from "react";
import {useAxios} from "../../hooks/useAxios";
import {useDispatch} from "react-redux";
import {SET_ALERT} from "../../redux/slices/snakeBarSlice";

const ProfilePage = () => {
    const {control, handleSubmit, getValues , setValue} = useForm();
    const {callApi : getInfo,loading: getLoading} = useAxios() ;
    const {callApi : putInfo,loading: putLoading} = useAxios() ;
    const dispatch = useDispatch() ;
    const submitForm = ()=>{
        const data = getValues() ;
        putInfo({
            url : "user-info" ,
            method : "PUT" ,
            token : true ,
            data ,
            successFunc : ()=>{
                dispatch(SET_ALERT({ title: "اطلاعات با موفقیت ثبت شد", show: true, severity: "success" }))
            },
            errFunc: (err) => {
                if (err.response.status === 400 && err.response.data) {
                    const national_code = !!err.response.data.national_code ;
                    const email = !!err.response.data.email ;
                    const title = national_code && email ? "کد ملی و ایمیل" : national_code ? 'کد ملی' : "ایمیل"
                    dispatch(SET_ALERT({ title: `حساب دیگری با این ${title} وجود دارد`, show: true, severity: "warning" }))
                }
            }
        })
    }
    const getUserInfo = ()=>{
        getInfo({
            url : "user-info" ,
            method : "GET" ,
            token : true ,
            successFunc : (res)=>{
                for (let key in res){
                    if(res[key]){
                        setValue(key , res[key]) ;
                    }
                }
            }
        })
    }
    useEffect(()=>{
        getUserInfo() ;
    },[])
    return (
        <PanelLayout>
            <Typography component={'h1'} variant={"h3"} sx={{mb: 4}}>مشخصات فردی</Typography>
            <Grid onSubmit={handleSubmit(submitForm)}  justifyContent={"space-between"} component={'form'} rowGap={5} container>
                {
                    userInputData.map((input ) => (
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
                        <LoadingButton loading={putLoading} type={'submit'} variant={'contained'} sx={{p : 1.5 , borderRadius : "8px"}} fullWidth >ثبت مشخصات</LoadingButton>
                    </Grid>
                </Box>
            </Grid>
        </PanelLayout>
    )
}
export default ProfilePage;