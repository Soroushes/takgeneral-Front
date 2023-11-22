import {Grid, Pagination, PaginationItem, Box} from "@mui/material";
import ProductPreviewCard from "./ProductPreviewCard";
import { useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';

const ProductList = ({product, count = 8, page = 1}) => {
    const [pageState, setPageState] = useState(page);
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const {push} = useRouter();
    const handlePaginationChange = (e, value) => {
        params.set('page', value)
        push( '?' + params)
        setPageState(value);
    }
    useEffect(() => {
        setPageState(page)
    }, [params])
    return (
        <>
            <Grid container sx={{borderRadius: 2}}>
                {
                    product?.map((productItem) => (
                        <Grid key={productItem.id} item sx={{pb: 1.6, pl: .8, pr: .8}} xs={6} sm={4} lg={3}>
                            <ProductPreviewCard
                                shadow={2}
                                id={productItem.id}
                                price={productItem.min_price?.price}
                                title={productItem.name}
                                discountPercent={+productItem.min_price?.discount}
                                afterDiscountPrice={productItem.min_price?.final_price}
                                image={productItem.main_image?.image}
                                alt={productItem.main_image?.alt_text}
                                url={productItem.url}
                            />
                        </Grid>
                    ))
                }
            </Grid>
            {
                count > 1 ?
                    <Box sx={{display: "flex", justifyContent: {md: 'end', xs: 'center'}, mt: 4}}>
                        <Pagination
                            sx={{direction: 'rtl'}} shape={'rounded'} onChange={handlePaginationChange} page={pageState}
                            count={count}
                            boundaryCount={0}
                            siblingCount={1}
                            color={'secondary'}
                            renderItem={(item) => {
                                return (
                                    (
                                        <PaginationItem
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