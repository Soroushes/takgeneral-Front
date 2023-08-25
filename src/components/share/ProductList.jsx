import {Grid, Pagination, PaginationItem , Box} from "@mui/material";
import ProductPreviewCard from "./ProductPreviewCard";
import {BASE_URL} from "@/data/urls";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useEffect, useState} from "react";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
const ProductList = ({product, count = 8, page = 1}) => {
    const [pageState, setPageState] = useState(page);
    const noQueryPath = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const {push} = useRouter();
    const handlePaginationChange = (e, value) => {
        params.set('page', value)
        push(noQueryPath + '?' + params)
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
                        <Grid key={Math.random() * 1000} item sx={{pb: 1.6, pl: .8, pr: .8}} xs={6} sm={4} lg={3}>
                            <ProductPreviewCard
                                shadow={2}
                                id={productItem.id}
                                price={productItem.min_price.price} title={productItem.name}
                                discountPercent={+productItem.min_price.discount}
                                afterDiscountPrice={productItem.min_price.final_price}
                                image={`${BASE_URL}media/Group_2073.png`}/>
                        </Grid>
                    ))
                }
            </Grid>
            <Box sx={{display: "flex", justifyContent: {md: 'end', xs: 'center'}, mt: 4}}>
                <Pagination sx={{direction: 'rtl'}} shape={'rounded'} onChange={handlePaginationChange} page={pageState}
                            count={count}
                            boundaryCount={0}
                            siblingCount={1}
                            color={'secondary'}
                            renderItem={(item) => {
                                return(
                                    (
                                        <PaginationItem
                                            slots={{ previous: ChevronRightRoundedIcon, next: ChevronLeftRoundedIcon }}
                                            {...item}
                                        />
                                    )
                                )
                            }}
                />
            </Box>
        </>
    )
}
export default ProductList;