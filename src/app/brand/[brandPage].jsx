'use client'
import {Box} from "@mui/system";
import {Button, Container, Divider, Grid, MenuItem, Pagination, TextField, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import MainModal from "../../components/share/MainModal";
import SortIcon from '../../assets/icons/share/sort.svg';
import ProductList from "../../components/share/ProductList";
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
    const [openSortModal, setOpenSortModal] = useState(false);
    useEffect(() => {
        setSortValue('newest')
    }, [noQueryPath]);
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
            <Container>
                <Grid sx={{px : 1.5}} container>
                    <Grid item xs={12} sx={{mt:4}}>
                        {
                            isMobile ?
                                <Box sx={{mb: 2 , px:1}}>
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
                        </Grid>

                    }
                    <ProductList product={product}/>
                </Grid>
            </Container>
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