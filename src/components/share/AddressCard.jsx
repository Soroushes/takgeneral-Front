import {Box, Button, Radio, Typography} from "@mui/material";
import Edit from '../../assets/icons/share/edit-2.svg';
import Delete from '../../assets/icons/share/trash.svg';
import PN from "persian-number";
import AddAddressModalWrapper from "@/components/share/AddAddressModalWrapper";
import {useState} from "react";
import {useAxios} from "@/hooks/useAxios";

const AddressCard = ({address, selectable, getAddress}) => {
    const [openAddAddressModals, setOpenAddAddressModals] = useState(false);
    const {callApi} = useAxios();
    const DeleteAddress = () => {
        callApi({
            url: `delete-address/${+address.id}`,
            method: 'DELETE',
            token: true,
            successFunc: () => {
                getAddress();
            }
        })
    }
    return (
        <Box sx={{border: '1px solid #eee', borderRadius: 2, py: 2, boxShadow: 1, mb: 2}} width={'100%'}>
            <Box px={1} display={'flex'} pb={1} alignItems={'center'} justifyContent={'space-between'}>
                <Box display={'flex'} alignItems={'center'}>
                    {
                        selectable &&
                        <Radio value={+address.id} size={'small'} inputProps={{width: '38px', height: '38px', p: 0}}/>

                    }
                    <Typography px={selectable ? 0 : 2} variant={'body2'}>آدرس {address.title}</Typography>
                </Box>
                <Box pr={1} justifyContent={'space-between'} alignItems={'center'} display={{xs: 'flex', md: 'none'}}>
                    <Button onClick={() => {
                        setOpenAddAddressModals(true)
                    }} color={'btnGray'} sx={{borderRadius: '100%', minWidth: 'auto'}}>
                        <Edit/>
                    </Button>
                    <Button onClick={DeleteAddress} color={'error'} sx={{borderRadius: '100%', minWidth: 'auto'}}>
                        <Delete/>
                    </Button>
                </Box>
            </Box>
            <Typography px={3} variant={'body2'} pb={2}>{address.full_address}</Typography>
            <Box pb={1} display={'flex'} justifyContent={'space-between'}>
                <Box pl={3} width={{xs: '65%', md: '50%'}} justifyContent={'space-between'} alignItems={'center'}
                     display={'flex'}>
                    <Typography variant={'body2'}>واحد: {PN.convertEnToPe(address.vahed)}</Typography>
                    <Typography variant={'body2'}>پلاک: {PN.convertEnToPe(address.pelak)}</Typography>
                    <Typography variant={'body2'}>کد پستی: {PN.convertEnToPe(address.post_code)}</Typography>
                </Box>
                <Box pr={1} justifyContent={'space-between'} alignItems={'center'} display={{md: 'flex', xs: 'none'}}>
                    <Button onClick={() => {
                        setOpenAddAddressModals(true)
                    }} color={'btnGray'} sx={{borderRadius: '100%', minWidth: 'auto'}}>
                        <Edit/>
                    </Button>
                    <Button onClick={DeleteAddress} color={'error'} sx={{borderRadius: '100%', minWidth: 'auto'}}>
                        <Delete/>
                    </Button>
                </Box>
            </Box>
            <AddAddressModalWrapper address={address} getAddress={getAddress} open={openAddAddressModals}
                                    setOpen={setOpenAddAddressModals}/>
        </Box>
    )
}
export default AddressCard;