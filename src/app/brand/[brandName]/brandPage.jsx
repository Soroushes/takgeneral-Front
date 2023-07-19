'use client'
import {Box} from "@mui/system";
import {Button, Container, Divider, Grid, MenuItem, TextField, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import MainModal from "../../../components/share/MainModal";
import SortIcon from '../../../assets/icons/share/sort.svg';
import ProductList from "../../../components/share/ProductList";
import Image from "next/image";
import Banner from "../../../assets/images/categoryBanner1.jpg";
import {Controller, useForm} from "react-hook-form";
import {IOSSwitch} from '../../../assets/theme/theme'
const BrandPage = () => {
    const {control} = useForm()
    const [sortValue, setSortValue] = useState('newest');
    const noQueryPath = usePathname();
    const {isMobile} = useSelector(state => state.deviceInfo);
    const sortValueItems = [
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
            discount: 33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        }, {
            brand: "پمپ گراندفوس Grundfos",
            discount: 33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount: 33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount: 33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount: 33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount: 33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount: 33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount: 33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount: 33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount: 33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount: 33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount: 33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount: 33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount: 33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount: 33,
            final_price: 5995953,
            id: 1,
            main_image: null,
            name: "Pomp khanegi mohiti 1",
            price: 8949185,
        },
        {
            brand: "پمپ گراندفوس Grundfos",
            discount: 33,
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
    return (
        <Box sx={{minHeight: "100vh", backgroundColor: "#fff"}}>
            {
                isMobile ?
                    <Box sx={{width: '100%', aspectRatio: '1.5/1', position: 'relative', p: 0}}>
                        <Image fill alt={''} src={Banner}/>
                    </Box> :
                    <Box sx={{
                        width: '100%',
                        aspectRatio: '4.5/1',
                        position: 'relative',
                        p: 0
                    }}>
                        <Image fill alt={''} src={Banner}/>
                    </Box>

            }
            <Container>
                <Grid sx={{px: 1.5}} container>
                    <Grid item xs={12} sx={{mt: 4}}>
                        {
                            isMobile ?
                                <Box sx={{mb: 2, px: 1}}>
                                    <Button size={'small'} onClick={() => setOpenSortModal(true)} color={'btnGray'}
                                            variant={'contained'}>
                                        <SortIcon/>
                                        <Typography sx={{ml: 1}}>
                                            {
                                                sortValueItems.find((item) => item.value === sortValue).name
                                            }
                                        </Typography>
                                    </Button>
                                </Box> :
                                <Grid container>
                                    <Grid md={3.5} >
                                        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} sx={{mx:1 , px:2 , py:1.5 , borderRadius:2 , backgroundColor:'white' , boxShadow:1}}>
                                            <Typography variant={'subtitle1'}>فقط کالاهای موجود</Typography>
                                            <Controller
                                                name={'available-product'}
                                                control={control}
                                                render={({field}) => (
                                                <IOSSwitch color={'primary'} onChange={field.onChange} value={field.value}/>
                                            )}
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid md={8.5} sx={{height:'auto', px:1}}>
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
                        <Grid item md={3.5} sx={{pt:.5,mt:2, display: {xs: 'none', md: "block"}}}>
                            <Box sx={{backgroundColor:'white' , boxShadow:1,mx:1 , px:2 , py:1.5 , borderRadius:2 }}>
                                <Typography variant={'subtitle1'}>محدوده قیمت</Typography>
                            </Box>
                        </Grid>

                    }
                    <Grid item xs={12} md={8.5} sx={{mt:2}}>
                        <ProductList product={product}/>
                    </Grid>
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
                                sx={{py: 1.5, px: 3}}
                                key={sortItem.value}
                                value={sortItem.value}
                                color={sortItem.value === sortValue ? 'primary' : "text"}
                            >
                                {sortItem.name}
                            </Typography>
                            <Divider/>
                        </>
                    ))
                }
            </MainModal>
        </Box>
    )
}
export default BrandPage;