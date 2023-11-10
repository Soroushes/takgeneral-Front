'use client'
import {Button, Container, Grid, MenuItem, TextField, Typography , Box} from "@mui/material";
import { useEffect, useMemo, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import MainModal from "../../../../components/share/MainModal";
import SortIcon from '../../../../assets/icons/share/sort.svg';
import ProductList from "../../../../components/share/ProductList";
import Image from "next/image";
import {Controller, useForm} from "react-hook-form";
import {IOSSwitch} from '@/assets/theme/theme';
import HtmlDescription from "@/components/share/HtmlDescription";
import BreadcrumbGenerator from "@/components/share/BreadcrumbGenerator";

const BrandPage = ({product, page_count, current_page , content , main_banner , brand}) => {
    const breadcrumbData = useMemo(()=>[{url : `/brand/${brand.url}` , name : brand.name}] ,[brand])
    const {control} = useForm()
    const [sortValue, setSortValue] = useState('newest');
    const noQueryPath = usePathname();
    const sortValueItems = [
        {
            name: <Typography component={'p'}>جدیدترین</Typography>,
            value: "newest"
        },
        {
            name: <Typography component={'p'}>گران ترین</Typography>,
            value: "-price"
        },
        {
            name: <Typography component={'p'}>ارزان ترین</Typography>,
            value: "price"
        }
    ];
    const [openSortModal, setOpenSortModal] = useState(false);
    const {push} = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    useEffect(() => {
        setSortValue('newest');
    }, [noQueryPath]);
    const handleSortOnchange = (value) => {
        setSortValue(value);
        params.set('ordering', value);
        push('?' + params.toString());
    }
    return (
        <Box sx={{minHeight: "70vh"}}>
            {
                main_banner.length ?
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
                        <Box sx={{
                            display: {md: 'block', xs: 'none'},
                            width: '100%',
                            aspectRatio: '4.5/1',
                            position: 'relative',
                            p: 0
                        }}>
                            <Image fill alt={''} src={main_banner[0]?.image}/>
                        </Box>
                    </> :null
            }
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <BreadcrumbGenerator breadcrumb={breadcrumbData} hasEmptyUrl={false}/>
                        <Typography component={'h1'} px={1} mb={2} variant={'h3'}>برند {brand.name}</Typography>
                        <Box display={{md: 'none', xs: 'block'}} sx={{mb: 2, px: 1}}>
                            <Button size={'small'} onClick={() => setOpenSortModal(true)} color={'btnGray'}
                                    variant={'contained'}>
                                <SortIcon/>
                                <Typography component={'div'} sx={{ml: 1}}>
                                    {
                                        sortValueItems.find((item) => item.value === sortValue).name
                                    }
                                </Typography>
                            </Button>
                        </Box>
                        <Grid container sx={{display: {md: 'flex', xs: 'none'}}}>
                            <Grid item md={3.5}>
                                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}
                                     sx={{
                                         mx: 1,
                                         px: 2,
                                         py: 1.5,
                                         borderRadius: 2,
                                         backgroundColor: 'white',
                                         boxShadow: 1
                                     }}>
                                    <Typography variant={'subtitle1'}>فقط کالاهای موجود</Typography>
                                    <Controller
                                        name={'available-product'}
                                        control={control}
                                        render={({field}) => (
                                            <IOSSwitch color={'primary'} onChange={field.onChange}
                                                       value={field.value}/>
                                        )}
                                    />
                                </Box>
                            </Grid>
                            <Grid item md={8.5} sx={{height: 'auto', px: 1}}>
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
                    </Grid>
                    <Grid item md={3.5} sx={{pt: .5, mt: 2, display: {xs: 'none', md: "block"}}}>
                        <Box sx={{backgroundColor: 'white', boxShadow: 1, mx: 1, px: 2, py: 1.5, borderRadius: 2}}>
                            <Typography variant={'subtitle1'}>محدوده قیمت</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8.5} sx={{mt: 2}}>
                        <ProductList page={current_page} count={page_count} product={product}/>
                    </Grid>
                </Grid>
                <HtmlDescription>{content.desc}</HtmlDescription>
            </Container>
            <MainModal setOpen={setOpenSortModal} open={openSortModal} title={'دسته بندی بر اساس'}>
                {
                    sortValueItems.map((sortItem) => (
                        <Box sx={{border:`1px solid ${sortItem.value === sortValue ? '#ff8301' :'#eee'}`, borderRadius: 2}} mx={2} mb={1} key={sortItem.value}>
                            <Typography
                                component={'p'}
                                onClick={() => {
                                    handleSortOnchange(sortItem.value);
                                    setOpenSortModal(false);
                                }}
                                sx={{py: 1.5, px: 1.5}}
                            >
                                {sortItem.name}
                            </Typography>
                        </Box>
                    ))
                }
            </MainModal>
        </Box>
    )
}
export default BrandPage;