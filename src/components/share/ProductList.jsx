import {Grid, Pagination, PaginationItem, Box} from "@mui/material";
import ProductPreviewCard from "./ProductPreviewCard";
import {useParams, useSearchParams} from "next/navigation";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import Link from "next/link";

const ProductList = ({product, count = 8, page = 1 , concept = 'category'}) => {
    const searchParams = useSearchParams();
    const newURLSearchParams = new URLSearchParams(searchParams);
    const params = useParams();
    console.log(`/${concept}/${params[concept === 'category' ? concept : concept + 'Name']}`)
    const handlePaginationChange = (e, value) => {
        newURLSearchParams.set('page', value)
        return newURLSearchParams.toString();
    }
    return (
        <>
            <Grid container sx={{borderRadius: 2}}>
                {
                    product?.map((productItem , index) => (
                        <Grid key={productItem.id} item sx={{pb: 1.6, pl: .8, pr: .8}} xs={6} sm={4} lg={3}>
                            <ProductPreviewCard
                                id={productItem.id}
                                price={productItem.min_price?.price}
                                title={productItem.name}
                                discountPercent={+productItem.min_price?.discount}
                                afterDiscountPrice={productItem.min_price?.final_price}
                                image={productItem.main_image?.image}
                                alt={productItem.main_image?.alt_text}
                                url={productItem.url}
                                imagePriority={index < 4}
                            />
                        </Grid>
                    ))
                }
            </Grid>
            {
                count > 1 ?
                    <Box sx={{display: "flex", justifyContent: {md: 'end', xs: 'center'}, mt: 4}}>
                        <Pagination
                            sx={{direction: 'rtl'}} shape={'rounded'} page={page}
                            count={count}
                            boundaryCount={0}
                            siblingCount={1}
                            color={'secondary'}
                            renderItem={(item) => {
                                return (
                                    (
                                        <PaginationItem
                                            component={Link}
                                            href={`/${concept}/${params[concept === 'category' ? concept : concept + 'Name']}?${handlePaginationChange(this ,item.page)}`}
                                            slots={{previous: ChevronRightRoundedIcon, next: ChevronLeftRoundedIcon}}
                                            {...item}
                                        />
                                    )
                                )
                            }}
                        />
                    </Box>:null
            }
        </>
    )
}
export default ProductList;