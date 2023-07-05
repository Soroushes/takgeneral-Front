'use client'
import {Box} from "@mui/system";
import Image from "next/image";
import {Grid, Container, Pagination, MenuItem, TextField, Button, Typography, Divider} from "@mui/material";
import ProductPreviewCard from "../../components/share/ProductPreviewCard";
import CheckBoxFilter from "src/components/share/CheckBoxFilter";
import {usePathname, useRouter } from "next/navigation";
import MainModal from "../../components/share/MainModal";
import {useEffect, useRef, useState} from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {BASE_URL} from "../../data/urls";
import Banner from '../../assets/images/categoryBanner1.jpg'
import SectionSlider from "../../components/share/SectionSlider";
import pompSectionImage from '../../assets/images/pomp 1.png';
import 'swiper/swiper.css';
import theme from "../../assets/theme/theme";
import {useSelector} from "react-redux";
const sortValueItems =  [
    {
        name: "جدیدترین",
        value: "newest"
    },
    {
        name: "گران ترین",
        value: "-price"
    },
    {
        name: "ارزان ترین",
        value: "price"
    }
];
const testSections = [
    {image :pompSectionImage , name : 'pompe abe jeti'},
    {image :pompSectionImage , name : 'pompe abe mohiti'},
    {image :pompSectionImage , name : 'pompe abe do prvane'},
    {image :pompSectionImage , name : 'pompe abe boshghabi'},
    {image :pompSectionImage , name : 'pompe abe jeti'},
    {image :pompSectionImage , name : 'pompe abe jeti'},
]
const CategoryPage = ({product, brands, current_page, page_count}) => {
    const {push} = useRouter();
    const noQueryPath = usePathname() ;
    const [openFilterModal, setOpenFilterModal] = useState(false);
    const [openSortModal, setOpenSortModal] = useState(false);
    const [sortValue, setSortValue] = useState('newest');
    const productBoxRef = useRef(null);
    const {isMobile} = useSelector(state => state.deviceInfo)
    useEffect(() => {
        setSortValue('newest')
    }, [noQueryPath])
    const handlePaginationChange = (e, value) => {
        push({
                pathname: noQueryPath,
                query: {
                    page: value,
                }
            },
            undefined,
            {scroll: false}
        )
    }
    const handleSortOnchange = (value) => {
        setSortValue(value);
        push({
            pathname: noQueryPath,
            query: {
                ordering: value
            }
        }, undefined, {scroll: false})
    }

    return (
        <Box sx={{minHeight: "100vh", backgroundColor: "#fff"}}>
            {
                isMobile ?
                    <Box sx={{width: '100%', aspectRatio: '3/1', position: 'relative', p: 0}}>
                        <Image fill alt={''} src={Banner}/>
                    </Box>:
                    <Box sx={{
                        width: '100%',
                        aspectRatio: '4/1',
                        position: 'relative',
                        p: 0
                    }}>
                        <Image fill alt={''} src={Banner}/>
                    </Box>

            }
            <Container ref={productBoxRef} maxWidth={'lg'}>
                <SectionSlider innerImage={false} sections={testSections}/>
                <Grid container>
                    <Grid item xs={12} >
                        {
                            isMobile ?
                                <Box sx={{mb: 2, gap: 1}}>
                                    <Button size={'small'} onClick={() => setOpenFilterModal(true)} color={'btnGray'}
                                            variant={'contained'}>
                                        <FilterAltIcon/>
                                        فیلتر
                                    </Button>
                                    <Button size={'small'} onClick={() => setOpenSortModal(true)} color={'btnGray'}
                                            variant={'contained'}>
                                        {
                                            sortValueItems.find((item) => item.value === sortValue).name
                                        }
                                        <KeyboardArrowDownIcon/>
                                    </Button>
                                </Box>:
                                <Box display={'flex'}>
                                    <Box sx={{width:'30%'}}></Box>
                                    <Box sx={{mb: 2}}>
                                        <TextField
                                            sx={{width: "150px"}}
                                            size={'small'}
                                            select
                                            value={sortValue}
                                            label="براساس"
                                            onChange={(e) => handleSortOnchange(e.target.value)}
                                        >
                                            {
                                                sortValueItems.map((sortItem) => (
                                                    <MenuItem key={sortItem.value} variant={'subtitle1'}
                                                              value={sortItem.value}>{sortItem.name}</MenuItem>
                                                ))
                                            }
                                        </TextField>
                                    </Box>
                                </Box>
                        }
                    </Grid>
                    {
                        !isMobile &&
                        <Grid item md={3.5} sx={{pr: 2, display: {xs: 'none', md: "block"}}}>
                            <Box sx={{p: 2, borderRadius: 2 , backgroundColor:'#fff' , boxShadow: theme.shadows[1] , width:'100%'}}>
                                <CheckBoxFilter key={noQueryPath} subFilter={brands}/>
                            </Box>
                        </Grid>

                    }
                    <Grid item xs={12} md={8.5} >
                        <Grid container sx={{borderRadius: 2}}>
                            {
                                product.map((productItem) => (
                                    <Grid key={productItem.id} item sx={{ pb:1.6 , pl:.8 , pr:.8}} xs={6} sm={4} lg={3}>
                                        <ProductPreviewCard
                                            shadow={true}
                                            id={productItem.id}
                                            price={productItem.price} title={productItem.name}
                                            discountPercent={+productItem.discount}
                                            afterDiscountPrice={productItem.final_price}
                                            image={`${BASE_URL}media/Group_2073.png`}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                        <Box sx={{display: "flex", justifyContent: "end", mt: 4}}>
                            <Pagination shape={'rounded'} onChange={handlePaginationChange} page={current_page} count={page_count}
                                        color={'secondary'} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <MainModal setOpen={setOpenFilterModal} open={openFilterModal} title={'فیلتر'}>
                <Box sx={{px : 2}}>
                    <CheckBoxFilter key={noQueryPath} subFilter={brands}/>
                </Box>
            </MainModal>
            <MainModal setOpen={setOpenSortModal} open={openSortModal} title={'دسته بندی بر اساس'}>
                {
                    sortValueItems.map((sortItem) => (
                        <>
                            <Typography
                                onClick={() => {
                                    handleSortOnchange(sortItem.value);
                                    setOpenSortModal(false);
                                }}
                                sx={{py : 1.5 , px : 3}}
                                key={sortItem.value}
                                value={sortItem.value}
                                color={sortItem.value === sortValue ? 'primary' : "text"}
                            >
                                {sortItem.name}
                            </Typography>
                            <Divider />
                        </>
                    ))
                }
            </MainModal>
        </Box>
    )
}
export default CategoryPage;