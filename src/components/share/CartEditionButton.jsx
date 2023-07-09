import {Button, CircularProgress, Typography} from "@mui/material";
import {Box} from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LoadingButton from "@mui/lab/LoadingButton";
import {useCart} from "../../hooks/useCart";
import PN from "persian-number";
import ShoppingBagIcon from '../../assets/icons/bag-2.svg';

const CartEditionButton = ({id, boxSx}) => {
    const {setCart, countItem, loading} = useCart(id);
    return (
        countItem < 1 ?
            (
                <LoadingButton loading={loading} onClick={setCart.bind(this, true)} fullWidth sx={{
                    px:1,
                    height: 40,
                    borderRadius: 2,
                    display: "flex",
                    gap: 1,
                    justifyContent: 'center',
                    alignItems: "center"
                }} variant={'contained'}>
                    <Typography color={'white'} variant={'body2'}> افزودن به سبد خرید</Typography>
                    <ShoppingBagIcon/>
                </LoadingButton>
            ) :
            <Box sx={{width:'100%'}} display={'flex'} alignItems={'center'} gap={1} justifyContent={'space-between'}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    border :'1px solid #f4f4f4',
                    borderRadius: 4,
                    height: "50px",
                    width: '45%',
                    ...boxSx
                }}>
                    <Button sx={{"&:hover": {border :'1px solid '} , borderRight :'1px solid #f4f4f4',height: '100%' , minWidth:'30px' , borderRadius :'16px 0 0 16px'}} color={'success'} disabled={loading} onClick={setCart.bind(this, true)}>
                        <AddIcon fontSize={'small'}/>
                    </Button>
                    <Typography sx={{width:'55px' , textAlign:'center'}} variant="body1">
                        {loading ?
                            <CircularProgress size={'25px'} color={'primary'}/> : PN.convertEnToPe(countItem)}
                    </Typography>
                    <Button sx={{"&:hover": {border :'1px solid '}, borderLeft :'1px solid #f4f4f4' , height: '100%', minWidth:'30px' ,borderRadius :'0 16px 16px 0'}} color={'error'} disabled={loading}
                            onClick={setCart.bind(this, false)}>
                        <RemoveIcon fontSize={'small'}/>
                        {/*{*/}
                        {/*    countItem <= 1 ?*/}
                        {/*        <DeleteIcon fontSize={'small'}/> : <RemoveIcon fontSize={'small'}/>*/}
                        {/*}*/}
                    </Button>
                </Box>
                <Typography variant={'subtitle2'} sx={{width:'55%'}}>در سبد خرید شما قرار گرفت</Typography>
            </Box>
    )

}
export default CartEditionButton;