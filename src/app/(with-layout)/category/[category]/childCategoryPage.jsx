'use client'
import Image from "next/image";
import {Box, Button, Collapse, Container, Grid, MenuItem, TextField, Typography} from "@mui/material";
import CheckBoxFilter from "@/components/share/CheckBoxFilter";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import MainModal from "../../../../components/share/MainModal";
import {useEffect, useRef, useState} from "react";
import FilterAltIcon from '../../../../assets/icons/share/setting-5.svg';
import CategorySlider from "../../../../components/share/CategorySlider";
import SortIcon from "../../../../assets/icons/share/sort.svg";
import ProductList from "../../../../components/share/ProductList";
import BreadcrumbGenerator from "@/components/share/BreadcrumbGenerator";
import HtmlDescription from "@/components/share/HtmlDescription";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import Link from "next/link";
import {IOSSwitch} from "@/assets/theme/theme";

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
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    useEffect(() => {
        setSortValue('newest')
    }, [noQueryPath])
    const handleSortOnchange = (value) => {
        setSortValue(value);
        params.set('ordering', value);
        push('?' + params.toString(), {scroll: false})
    };
    const toggleDrawer = () => {
        setDrawerIsOpen(prev => !prev);
    };
    return (
        <>
            {
                main_banner.length ?
                    <Link href={'/'}>
                        <Box sx={{
                            width: '100%',
                            aspectRatio: '1.3/1',
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
                        <BreadcrumbGenerator
                            breadcrumb={breadcrumb.map(item => ({...item, url: `/category/${item.url}`}))}/>
                    </Box>
                    <Typography sx={{mb: 1, mx: 2}} variant={'h4'} component={'h1'}>{main_category?.name}</Typography>
                    <Box sx={{px: 1}}>
                        <CategorySlider mainCategory={main_category} category={childCategory}/>
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
                                    <Typography sx={{ml: 1}}> فیلترها</Typography>
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
                                <CheckBoxFilter category={main_category?.name} key={noQueryPath} subFilter={brands}/>
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
                <MainModal setOpen={setOpenFilterModal} onCloseFn={() => {
                    setDrawerIsOpen(false)
                }} open={openFilterModal} title={'فیلترها'}>
                    <Box sx={{p: 2}}>
                        <Box display={'flex'} mb={1} alignItems={'center'} justifyContent={'space-between'}
                             sx={{
                                 mx: 1,
                                 px: 2,
                                 py: 1.5,
                                 borderRadius: 2,
                                 border: '1px solid #eee'
                             }}>
                            <Typography>فقط کالاهای موجود</Typography>
                            <IOSSwitch color={'primary'}/>
                        </Box>
                        <Box sx={{mx: 1, px: 2, py: 1.5, borderRadius: 2, border: '1px solid #eee'}}>
                            <Box onClick={toggleDrawer} display={'flex'} justifyContent={'space-between'}>
                                <Typography>برندها</Typography>
                                {
                                    drawerIsOpen ?
                                        <ExpandLessRoundedIcon/> :
                                        <ExpandMoreRoundedIcon/>
                                }
                            </Box>
                            <Collapse in={drawerIsOpen}>
                                <Box mt={1}>
                                    <CheckBoxFilter category={main_category?.name} key={noQueryPath}
                                                    subFilter={brands}/>
                                </Box>
                            </Collapse>
                        </Box>
                    </Box>
                </MainModal>
                <MainModal setOpen={setOpenSortModal} open={openSortModal} title={'دسته بندی بر اساس'}>
                    {
                        sortValueItems.map((sortItem) => (
                            <Box sx={{border: '1px solid #eee', borderRadius: 2}} mx={2} mb={1} key={sortItem.value}>
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
        </>
    )
}
export default ChildCategoryPage;