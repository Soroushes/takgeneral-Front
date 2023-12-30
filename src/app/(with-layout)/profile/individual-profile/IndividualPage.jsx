'use client'
import {Box, Button, Grid, Typography} from "@mui/material";
import Edit from '../../../../assets/icons/profile/edit-2.svg';
import {useEffect, useState} from "react";
import {useAxios} from "@/hooks/useAxios";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import Link from "next/link";
import EditProfileModal from "@/components/profile/EditProfileModal";

const IndividualPage = ()=>{
    const {callApi: getInfo} = useAxios();
    const [editModalIsOpen , setEditModalIsOpen] = useState(false);
    const [profileInfo , setProfileInfo] = useState([]);
    const getUserInfo = () => {
         getInfo({
            url: "user-info",
            method: "GET",
            token: true,
            successFunc: (res) => {
                setProfileInfo(res)
            }
        })
    }
    useEffect(() => {
        getUserInfo();
    }, [])
    return(
        <Box sx={{backgroundColor:'#FAFAFA'}} display={'flex'} flexDirection={'column'} alignItems={'end'}>
            <Box width={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography fontWeight={'bold'}>مشخصات فردی</Typography>
                <Button  onClick={()=>{setEditModalIsOpen(true)}} sx={{px:1 , display:{md:'flex' , xs:'none'},borderRadius:2 }} variant={'outlined'}>
                    <Typography variant={'subtitle1'} sx={{mr:1}} color={'primary'}>ویرایش مشخصات</Typography>
                    <Edit/>
                </Button>
                <Box sx={{ display:{md:'none' , xs:'flex'}}}>
                    <Link scroll={false} href={'/profile'}>
                        <Button sx={{borderRadius: 1.5}}>برگشت<ChevronLeftRoundedIcon/></Button>
                    </Link>
                </Box>
            </Box>
            <Grid mt={3} container rowGap={3} sx={{border:'1px solid #eee' , borderRadius:2 , p:2}}>
                <Grid item md={6} xs={12}>
                    <Typography color={'text.muted'} variant={'subtitle1'}>نام و نام خانوادگی:</Typography>
                    <Typography mt={2} variant={'subtitle1'}>{profileInfo.first_name} {profileInfo.last_name}</Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Typography color={'text.muted'} variant={'subtitle1'}>ایمیل :</Typography>
                    <Typography mt={2} variant={'subtitle1'}>{profileInfo.email}</Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Typography color={'text.muted'} variant={'subtitle1'}>شماره تماس :</Typography>
                    <Typography mt={2} variant={'subtitle1'}>{profileInfo.phone_number}</Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Typography  color={'text.muted'} variant={'subtitle1'}>کد ملی :</Typography>
                    <Typography mt={2} variant={'subtitle1'}>{profileInfo.national_code}</Typography>
                </Grid>
            </Grid>
            <Button onClick={()=>{setEditModalIsOpen(true)}} sx={{px:1 , display:{md:'none' , xs:'flex'}, borderRadius:2 , mt:2}} variant={'outlined'}>
                <Typography sx={{mr:1}} variant={'subtitle1'} color={'primary'}>ویرایش مشخصات</Typography>
                <Edit/>
            </Button>
            <EditProfileModal open={editModalIsOpen} setOpen={setEditModalIsOpen}/>
        </Box>
    )
}
export default IndividualPage;