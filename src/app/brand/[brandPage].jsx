'use client'
import {Box} from "@mui/system";
import {Button, Container, Divider, Grid, MenuItem, Pagination, TextField, Typography} from "@mui/material";
import brandImage from "../../assets/images/pentax (1).png";
import BrandSlider from "../../components/share/BrandSlider";
import FilterAltIcon from "../../assets/icons/share/setting-5.svg";
import CheckBoxFilter from "../../components/share/CheckBoxFilter";
import ProductPreviewCard from "../../components/share/ProductPreviewCard";
import {BASE_URL} from "../../data/urls";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import MainModal from "../../components/share/MainModal";
import SortIcon from '../../assets/icons/share/sort.svg';
const BrandPage = ()=>{
    const [sortValue, setSortValue] = useState('newest');
    const noQueryPath = usePathname() ;
    const {isMobile} = useSelector(state => state.deviceInfo);
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
    const product = [
        {
            brand: "پمپ گراندفوس Grundfos",
            discount :33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },{
            brand: "پمپ گراندفوس Grundfos",
            discount :33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount :33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount :33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount :33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount :33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount :33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount :33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount :33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount :33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount :33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount :33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount :33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount :33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount :33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount :33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },

    ]
    const brandSlider = [
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},
        {name :'pentax'  , image:brandImage},

    ];
    const brands =[
        {
            brand__id : 6 ,
            brand__name :'پمپ الکتروژن'
        },{
            brand__id : 6 ,
            brand__name :'پمپ الکتروژن'
        },
        {
            brand__id : 6 ,
            brand__name :'پمپ الکتروژن'
        },
        {
            brand__id : 6 ,
            brand__name :'پمپ الکتروژن'
        },
        {
            brand__id : 6 ,
            brand__name :'پمپ الکتروژن'
        },
        {
            brand__id : 6 ,
            brand__name :'پمپ الکتروژن'
        },
        {
            brand__id : 6 ,
            brand__name :'پمپ الکتروژن'
        },
        {
            brand__id : 6 ,
            brand__name :'پمپ الکتروژن'
        },
        {
            brand__id : 6 ,
            brand__name :'پمپ الکتروژن'
        },


    ]
    const [openFilterModal, setOpenFilterModal] = useState(false);
    const [openSortModal, setOpenSortModal] = useState(false);
    useEffect(() => {
        setSortValue('newest')
    }, [noQueryPath]);
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
    return(
        <Box sx={{minHeight: "100vh", backgroundColor: "#fff"}}>
            <Box sx={{backgroundColor : '#0269B2' , width:'100%' , height:'350px' , display:'flex' , alignItems:'center' , justifyContent:'center'}}><Typography variant={'h1'} fontWeight={'bold'} color={"white"}>برند پمپ الکتروژن</Typography></Box>
            <BrandSlider brands={brandSlider}/>
            <Container>
                <Grid sx={{px : 1.5}} container>
                    <Grid item xs={12} >
                        {
                            isMobile ?
                                <Box sx={{mb: 2 , px:1, gap: 1 , display:'flex' , justifyContent:'space-between'}}>
                                    <Button size={'small'} onClick={() => setOpenFilterModal(true)} color={'btnGray'}
                                            variant={'contained'}>
                                        <FilterAltIcon/>
                                        <Typography sx={{ml:1}}> فیلتر</Typography>
                                    </Button>
                                    <Button size={'small'} onClick={() => setOpenSortModal(true)} color={'btnGray'}
                                            variant={'contained'}>
                                        <SortIcon/>
                                        <Typography sx={{ml:1}}>
                                            {
                                                sortValueItems.find((item) => item.value === sortValue).name
                                            }
                                        </Typography>
                                    </Button>
                                </Box>:
                                <Grid container>
                                    <Grid md={3.5} ></Grid>
                                    <Grid md={8.5} sx={{mb: 2}}>
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
                                    </Grid>
                                </Grid>
                        }
                    </Grid>
                    {
                        !isMobile &&
                        <Grid item md={3.5} sx={{pr: 2, display: {xs: 'none', md: "block"}}}>
                            <Box sx={{p: 2, borderRadius: 2 , backgroundColor:'#fff' , boxShadow: 1 , width:'100%'}}>
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
                                            shadow={2}
                                            id={productItem.id}
                                            price={productItem.price} title={productItem.name}
                                            discountPercent={+productItem.discount}
                                            afterDiscountPrice={productItem.final_price}
                                            image={`${BASE_URL}media/Group_2073.png`}/>
                                    </Grid>
                                ))
                            }
                        </Grid>
                        <Box sx={{display: "flex", justifyContent: {md:'end' , xs:'center'}, mt: 4}}>
                            <Pagination shape={'rounded'} onChange={handlePaginationChange} page={1} count={8}
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
export default BrandPage;