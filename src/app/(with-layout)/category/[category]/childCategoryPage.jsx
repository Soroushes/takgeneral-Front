'use client'
import Image from "next/image";
import {Box, Button, Container, Divider, Grid, MenuItem, TextField, Typography} from "@mui/material";
import CheckBoxFilter from "@/components/share/CheckBoxFilter";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import MainModal from "../../../../components/share/MainModal";
import {Fragment, useEffect, useRef, useState} from "react";
import FilterAltIcon from '../../../../assets/icons/share/setting-5.svg';
import CategorySlider from "../../../../components/share/CategorySlider";
import SortIcon from "../../../../assets/icons/share/sort.svg";
import ProductList from "../../../../components/share/ProductList";
import BreadcrumbGenerator from "@/components/share/BreadcrumbGenerator";
import HtmlDescription from "@/components/share/HtmlDescription";

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
const ChildCategoryPage = ({
                               brands,
                               current_page,
                               page_count,
                               category,
                               childCategory,
                               products,
                               content,
                               breadcrumb,
                               main_banner
                           }) => {
    const {push} = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const noQueryPath = usePathname();
    const [openFilterModal, setOpenFilterModal] = useState(false);
    const [openSortModal, setOpenSortModal] = useState(false);
    const [sortValue, setSortValue] = useState('newest');
    const productBoxRef = useRef(null);
    useEffect(() => {
        setSortValue('newest')
    }, [noQueryPath])
    const handleSortOnchange = (value) => {
        setSortValue(value);
        params.set('ordering', value);
        push('?' + params.toString(), {scroll: false})
    }
    return (
        <>
            <Box sx={{
                width: '100%',
                aspectRatio: '1.5/1',
                position: 'relative',
                p: 0,
                display: {xs: 'block', md: 'none'}
            }}>
                <Image fill alt={''} src={main_banner[0]?.mobile_image}/>
            </Box>
            <Box sx={{minHeight: "70vh"}}>
                <Box sx={{
                    display: {md: 'block', xs: 'none'},
                    width: '100%',
                    aspectRatio: '4.5/1',
                    position: 'relative',
                    p: 0
                }}>
                    <Image fill alt={''} src={main_banner[0]?.image}/>
                </Box>
                <Container disableGutters={true} ref={productBoxRef} maxWidth={'lg'}>
                    <Box sx={{px: 1}}>
                        <BreadcrumbGenerator breadcrumb={breadcrumb}/>
                    </Box>
                    <Box sx={{px: 1}}>
                        <CategorySlider selfId={category} category={childCategory}/>
                    </Box>
                    <Grid sx={{px: 1.5}} container>
                        <Grid item xs={12}>
                            <Box sx={{
                                mb: 2,
                                px: 1,
                                gap: 1,
                                display: {xs: 'flex', md: 'none'},
                                justifyContent: 'space-between'
                            }}>
                                <Button size={'small'} color={'btnLightGray'}
                                        onClick={() => setOpenFilterModal(true)}
                                        variant={'outlined'}>
                                    <FilterAltIcon/>
                                    <Typography sx={{ml: 1}}> فیلتر</Typography>
                                </Button>
                                <Button size={'small'} onClick={() => setOpenSortModal(true)} color={'btnLightGray'}
                                        variant={'outlined'}>
                                    <SortIcon/>
                                    <Typography sx={{ml: 1}}>
                                        {
                                            sortValueItems.find((item) => item.value === sortValue).name
                                        }
                                    </Typography>
                                </Button>
                            </Box>
                            <Grid container sx={{display: {md: 'flex', xs: 'none'}}}>
                                <Grid item md={3.5}></Grid>
                                <Grid item md={8.5} sx={{mb: 3, px: 1}} gap={1} display={'flex'}
                                      alignItems={'center'}>
                                    <Typography>
                                        مرتب سازی براساس:
                                    </Typography>
                                    <TextField
                                        sx={{width: "150px"}}
                                        size={'small'}
                                        select
                                        value={sortValue}
                                        onChange={(e) => handleSortOnchange(e.target.value)}
                                    >
                                        {
                                            sortValueItems?.map((sortItem) => (
                                                <MenuItem key={sortItem.value} variant={'subtitle1'}
                                                          value={sortItem.value}>{sortItem.name}</MenuItem>
                                            ))
                                        }
                                    </TextField>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item md={3.5} sx={{pr: 2, display: {xs: 'none', md: "block"}}}>
                            <Box sx={{p: 2, borderRadius: 2, backgroundColor: '#fff', boxShadow: 1, width: '100%'}}>
                                <CheckBoxFilter category={category} key={noQueryPath} subFilter={brands}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8.5}>
                            <ProductList product={products} page={current_page} count={page_count}/>
                        </Grid>
                    </Grid>
                    <HtmlDescription>{content}</HtmlDescription>
                </Container>
                <MainModal setOpen={setOpenFilterModal} open={openFilterModal} title={'فیلتر'}>
                    <Box sx={{px: 2}}>
                        <CheckBoxFilter key={noQueryPath} subFilter={brands}/>
                    </Box>
                </MainModal>
                <MainModal setOpen={setOpenSortModal} open={openSortModal} title={'دسته بندی بر اساس'}>
                    {
                        sortValueItems.map((sortItem) => (
                            <Fragment key={sortItem.value}>
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
                            </Fragment>
                        ))
                    }
                </MainModal>
            </Box>
        </>
    )
}
export default ChildCategoryPage;