import {Box} from "@mui/system";
import {Divider, Stack, Typography} from "@mui/material";
import {Fragment} from "react";
import PN from "persian-number";
import CartEditionButton from "../share/CartEditionButton";
import {useProductDetailItems} from "../../hooks/useProductDetailItems";
import PriceDiscount from "../share/PriceDiscount";
const SingleProductSellCard = ({ available , freeSent , sevenDaysBack , price , discount , finalPrice , warranty , id})=>{
    const productDetailItems = useProductDetailItems({freeSent  , wareHouseExist : available , notFakeWarranty : true , sevenDaysBack , warranty}) ;
    return (
        <Box sx={{px : 3 , pb : 3 , backgroundColor : "#EDEFF3" , borderRadius : 2  , display:'flex' , flexDirection :'column'  ,gap:2}}>
            <Box>
            {
                productDetailItems.map((cardData )=>{
                   return(
                       cardData.show ?
                       <Fragment key={cardData.title}>
                           <Typography variant={'body2'} sx={{display : "flex" , alignItems : "center" , gap : 2 , py : 2}}>{cardData.icon} {cardData.title} </Typography>
                           <Divider />
                       </Fragment> : null
                   )
                })
            }
            </Box>
            <Box sx={{display : "flex" , justifyContent : "end" , gap :4 , alignItems:'center' , mt : 3 , px : 2}}>
                <Typography sx={{fontWeight : "bold"}} variant={'body1'}>قیمت کالا</Typography>
                 <PriceDiscount price={price} finalPrice={finalPrice} discount={discount} fontSize={'caption'} isDiscountNear={true}/>
            </Box>
            <Box sx={{display : 'flex' , flexDirection :'column' , alignItems :'end'  , width:'100%'}}>
                <CartEditionButton fromCart={false} id={id}/>
            </Box>
        </Box>
    )
}
export default SingleProductSellCard ;