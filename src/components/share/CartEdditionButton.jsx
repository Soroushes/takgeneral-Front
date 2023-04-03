import { Typography } from "@mui/material";
import {Box} from "@mui/system";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCart } from "src/hooks/useCart";
import DeleteIcon from '@mui/icons-material/Delete';
const CartEdditionButton = ({ id})=>{
    const {setCart , countItem} = useCart(id);
    return(
        <Box sx={{backgroundColor:'white', display:'flex' , alignItems :'center' ,px:{lg : 1.5 , md :4}  , justifyContent:'space-between',height:'50px' , width :'60%'  , borderRadius:2}}>
            <Typography onClick={setCart.bind(this , true)} sx={{cursor:'pointer' , display:'flex' , alignItems:'center'}}><AddIcon color="primary"/></Typography>
            <Typography sx={{ display:'flex' , alignItems:'center'}}>{countItem}</Typography>
            <Typography onClick={setCart.bind(this , false )} sx={{cursor:'pointer', display:'flex' , alignItems:'center'}}>{countItem <= 1 ? <DeleteIcon color="secondary"/> : <RemoveIcon/>}</Typography>
        </Box>
    )

}
export default CartEdditionButton;