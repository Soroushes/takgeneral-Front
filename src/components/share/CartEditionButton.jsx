import {CircularProgress, Typography} from "@mui/material";
import {Box} from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import BasketIcon from "../icons/basketIcon";
import LoadingButton from "@mui/lab/LoadingButton";
import {useCart} from "../../hooks/useCart";
import PN from "persian-number";

const CartEditionButton = ({id}) => {
    const {setCart , countItem , loading} = useCart(id);
    return (
        countItem < 1 ?
            (
                <LoadingButton loading={loading} onClick={setCart.bind(this, true)} fullWidth sx={{
                    p: 1.5,
                    height : '50px' ,
                    borderRadius: 3,
                    display: "flex",
                    gap: 1,
                    justifyContent: 'center',
                    alignItems: "center"
                }} variant={'contained'} color={'secondary'}>
                    <BasketIcon/>
                    افزودن به سبد خرید
                </LoadingButton>
            ) :
            <Box sx={{
                backgroundColor: '#f4f4f4',
                display: 'flex',
                alignItems: 'center',
                px : 1 ,
                justifyContent: 'space-between',
                height: '50px',
                width: '130px',
                borderRadius: 2
            }}>
                <Typography onClick={setCart.bind(this, true)} sx={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}>
                    <AddIcon color="primary"/>
                </Typography>
                <Typography variant="body1" sx={{display: 'flex', alignItems: 'center'}}>{loading ? <CircularProgress color={'primary'}/> :  PN.convertEnToPe(countItem)}</Typography>
                <Typography onClick={setCart.bind(this, false)} sx={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}>
                    {
                        countItem <= 1 ?
                        <DeleteIcon color="secondary"/> : <RemoveIcon color="primary"/>
                    }
                </Typography>
            </Box>
    )

}
export default CartEditionButton;