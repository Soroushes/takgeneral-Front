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
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import Link from "next/link";

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
const ChildCategoryPage = ({
                               brands,
                               current_page,
                               page_count,
                               category,
                               childCategory,
                               products,
                               content,
                               breadcrumb,
                               main_banner, main_category
                           }) => {
    const {push} = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const noQueryPath = usePathname();
    const [openFilterModal, setOpenFilterModal] = useState(false);
    const [openSortModal, setOpenSortModal] = useState(false);
    const [sortValue, setSortValue] = useState('newest');
    const productBoxRef = useRef(null);
    const [contentIsShow, setContentIsShow] = useState(false);
    useEffect(() => {
        setSortValue('newest')
    }, [noQueryPath])
    const handleSortOnchange = (value) => {
        setSortValue(value);
        params.set('ordering', value);
        push('?' + params.toString(), {scroll: false})
    };
    return (
        <>
            {
                main_banner.length ?
                    <Link href={'/'}>
                        <Box sx={{
                            width: '100%',
                            aspectRatio: '1.5/1',
                            position: 'relative',
                            p: 0,
                            display: {xs: 'block', md: 'none'}
                        }}>
                            <Image fill alt={main_banner[0]?.alt ?? ''} src={main_banner[0]?.mobile_image}/>
                        </Box>
                    </Link>
                     : null
            }
            <Box sx={{minHeight: "70vh"}}>
                {
                    main_banner.length ?
                        <Box sx={{
                            display: {md: 'block', xs: 'none'},
                            width: '100%',
                            aspectRatio: '4.5/1',
                            position: 'relative',
                            p: 0
                        }}>
                            <Image fill alt={main_banner[0]?.alt ?? ''} src={main_banner[0]?.image}/>
                        </Box> : null
                }
                <Container disableGutters={true} ref={productBoxRef} maxWidth={'lg'}>
                    <Box sx={{px: 1}}>
                        <BreadcrumbGenerator breadcrumb={breadcrumb.map(item=> ({...item , url :  `/category/${item.url}`}))}/>
                    </Box>
                    <Typography sx={{mb: 1, mx: 2}} variant={'h4'} component={'h1'}>{main_category?.name}</Typography>
                    <Box sx={{px: 1}}>
                        <CategorySlider categoryUrl={category} category={childCategory}/>
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
                                    <Box sx={{ml: 1}}>
                                        {
                                            sortValueItems.find((item) => item.value === sortValue).name
                                        }
                                    </Box>
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
                                                <MenuItem
                                                    key={sortItem.value} sx={{background: 'primary'}}
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
                        <Grid pb={5.5} item xs={12} md={8.5}>
                            <ProductList product={products} page={current_page} count={page_count}/>
                        </Grid>
                    </Grid>
                    {
                        content ?
                            <Box sx={{px: 1, position: 'relative'}}>
                                <HtmlDescription boxSx={{
                                    mt: 3,
                                    maxHeight: !contentIsShow ? '160px' : 'auto',
                                    overflow: 'hidden', textOverflow: 'ellipsis', px: 0
                                }}>{content}</HtmlDescription>
                                <Box onClick={setContentIsShow.bind(this, prev => !prev)}
                                     sx={{display: "flex", mt: 2, cursor: 'pointer', alignItems: "center", gap: 1}}>
                                    <Typography
                                        variant={"body2"}
                                        color={'primary'}
                                        sx={{
                                            cursor: "pointer",
                                            textAlign: "center",
                                        }}
                                    >
                                        {
                                            contentIsShow ? 'مشاهده کمتر' : "مشاهده بیشتر"
                                        }
                                    </Typography>
                                    {
                                        contentIsShow ? <ExpandLessRoundedIcon fontSize={'small'} color={'primary'}/> :
                                            <ExpandMoreRoundedIcon fontSize={'small'} color={'primary'}/>
                                    }
                                </Box>
                            </Box> : null
                    }
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
                                    component={'p'}
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