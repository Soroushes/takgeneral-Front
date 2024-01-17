import MainModal from "@/components/share/MainModal";
import {useAxios} from "@/hooks/useAxios";
import useAlert from "@/hooks/useAlert";
import {useRouter, useSearchParams} from "next/navigation";
import {useDispatch, useSelector} from "react-redux";
import {fetchInfo} from "@/redux/slices/userInfoSlice";
import {Box, TextField, Grid, Button} from "@mui/material";
import {userInputData} from "@/data/profile/userInputData";
import LoadingButton from "@mui/lab/LoadingButton";
import {Controller, useForm} from "react-hook-form";
import {useEffect} from "react";

const EditProfileModal = ({open , setOpen})=>{
    const {control, handleSubmit, getValues, setValue, reset} = useForm();
    const {callApi: putInfo, loading: putLoading} = useAxios();
    const {callApi: getInfo} = useAxios();
    const {profile_complete} = useSelector(state=>state.userInfo)
    const {warningAlert, successAlert} = useAlert();
    const {push} = useRouter();
    const searchParams = useSearchParams();
    const from = searchParams.get('from');
    const dispatch = useDispatch();
    const submitForm = () => {
        const data = getValues();
        putInfo({
            url: "user-info",
            method: "PUT",
            token: true,
            data,
            successFunc: () => {
                if(from) {
                    push('/' + from)
                }
                setOpen(false);
                successAlert("اطلاعات با موفقیت ثبت شد");
                dispatch(fetchInfo());

            },
            errFunc: (err) => {
                if (err?.response?.status === 400 && err?.response?.data) {
                    const national_code = !!err?.response?.data?.national_code;
                    const email = !!err?.response?.data?.email;
                    const title = national_code && email ? "کد ملی و ایمیل" : national_code ? 'کد ملی' : "ایمیل" ;
                    warningAlert(`حساب دیگری با این ${title} وجود دارد`)
                }
            }
        })
    }

    const cancel = ()=>{
        if(!profile_complete){
            push('/cart')
        }
        setOpen(false);
        reset();
    }
    const getUserInfo = () => {
        getInfo({
            url: "user-info",
            method: "GET",
            token: true,
            successFunc: (res) => {
                for (let key in res) {
                    if (res[key]) {
                        setValue(key, res[key]);
                    }
                }
            }
        })
    }
    useEffect(() => {
        getUserInfo();
    }, [])
    return(
        <MainModal desktopFullScreen title={'ویرایش مشخصات فردی'} setOpen={setOpen} open={open} onCloseFn={submitForm}>
             <Box p={2}>
                 <Grid onSubmit={handleSubmit(submitForm)} justifyContent={"space-between"} component={'form'} rowGap={3}
                      container>
                    {
                        userInputData.map((input) => (
                            <Grid key={input.name} xs={12} md={5.9} item>
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
                    <Grid container rowGap={1} justifyContent={'space-between'} sx={{width: "100%", mb: 2}}>
                        <Grid xs={12} md={5.9} item>
                            <LoadingButton size={'small'} loading={putLoading} type={'submit'} variant={'contained'}
                                           sx={{p: 1, borderRadius: "8px"}} fullWidth>ثبت مشخصات</LoadingButton>
                        </Grid>
                        <Grid xs={12} md={5.9} item>
                            <Button size={'small'} onClick={cancel} loading={putLoading} color={'gray'} variant={'outlined'}
                                           sx={{p: 1, borderRadius: "8px"}} fullWidth>لغو</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </MainModal>
    )
}
export default EditProfileModal;