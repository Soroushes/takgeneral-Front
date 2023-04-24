import {CircularProgress, Typography, Button} from "@mui/material";
import {Box} from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import BasketIcon from "../icons/basketIcon";
import LoadingButton from "@mui/lab/LoadingButton";
import {useCart} from "../../hooks/useCart";
import PN from "persian-number";

const CartEditionButton = ({id}) => {
    const {setCart, countItem, loading} = useCart(id);
    return (
        countItem < 1 ?
            (
                <LoadingButton loading={loading} onClick={setCart.bind(this, true)} fullWidth sx={{
                    p: 1.5,
                    height: '50px',
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
                justifyContent: 'space-between',
                borderRadius: 2,
                height: "50px",
                width: "170px",
            }}>
                <Button sx={{height : '100%'}} disabled={loading} onClick={setCart.bind(this, true)}>
                    <AddIcon/>
                </Button>
                <Typography variant="body1">
                    {loading ?
                    <CircularProgress color={'primary'}/> : PN.convertEnToPe(countItem)}</Typography>
                <Button sx={{height : '100%'}} color={countItem <= 1 ? 'secondary' : "primary"} disabled={loading} onClick={setCart.bind(this, false)}>
                    {
                        countItem <= 1 ?
                            <DeleteIcon/> : <RemoveIcon/>
                    }
                </Button>
            </Box>
    )

}
export default CartEditionButton;