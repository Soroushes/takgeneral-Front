import {Stack, Typography} from "@mui/material";

const ProductPreviewCard = ({title , discountPercent , image , afterDiscountPrice , price})=>{
    return (
        <Stack sx={{backgroundColor : "white" , p : 4  , borderRadius : 4 , height : "400px"}}>
            <img src={image} alt={title}/>
            <Typography component={'h3'} variant={'h5'}>{title}</Typography>
            <Typography>{afterDiscountPrice}</Typography>
            <Typography>{price}</Typography>
        </Stack>
    )
}
export default ProductPreviewCard ;
