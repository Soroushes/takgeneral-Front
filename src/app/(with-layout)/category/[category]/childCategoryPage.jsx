'use client'
import Image from "next/image";
import {Box, Button, Collapse, Container, Grid, Typography} from "@mui/material";
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
import SelectionButton from "@/components/share/selectionButton";

const sortValueItems = [
    {
        name: <Typography variant={'subtitle1'} component={'p'}>جدیدترین</Typography>,
        id: "newest"
    },
    {
        name: <Typography variant={'subtitle1'} component={'p'}>گران ترین</Typography>,
        id: "-price"
    },
    {
        name: <Typography variant={'subtitle1'} component={'p'}>ارزان ترین</Typography>,
        id: "price"
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
    // const handleCancel = ()=>{
    //     params.delete('brand');
    //     push('?'+ params.toString());
    //     setOpenFilterModal(false)
    // };
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
                                <Box width={'30%'} sx={{border:'1px solid #eee' , display:'flex' , alignItems:'center' , py:.5 , px:1.5 , borderRadius:1}}
                                        onClick={() => setOpenFilterModal(true)}
                                        variant={'outlined'}>
                                    <FilterAltIcon/>
                                    <Typography variant={'subtitle1'} sx={{ml: 1}}> فیلترها</Typography>
                                </Box>
                                    <SelectionButton defaultValue={sortValue} modalName={'دسته بندی بر اساس'} items={sortValueItems} itemValues={'name'} handleChangeFn={handleSortOnchange}>
                                        <SortIcon/>
                                        <Box ml={1}>
                                            {
                                                sortValueItems.find((item) => item.id === sortValue).name
                                            }
                                        </Box>
                                    </SelectionButton>
                            </Box>
                            <Grid container sx={{display: {md: 'flex', xs: 'none'}}}>
                                <Grid item md={3.5}></Grid>
                                <Grid item md={8.5} sx={{mb: 3, px: 1}} gap={1} display={'flex'} alignItems={'center'}>
                                    <Typography>
                                        مرتب سازی براساس:
                                    </Typography>
                                    <SelectionButton defaultValue={sortValue} items={sortValueItems} itemValues={'name'} handleChangeFn={handleSortOnchange}/>
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
                            <Box sx={{px: 1}}>
                                <Box sx={{position: contentIsShow ? '': 'relative'}}>
                                    <HtmlDescription boxSx={{
                                        mt: 3,
                                        maxHeight: !contentIsShow ? '170px' : 'auto',
                                        overflow: 'hidden', textOverflow: 'ellipsis', px: 0 ,
                                        '&::before':{
                                            width:'100%',
                                            height:'100%',
                                            position:'absolute',
                                            left:0,
                                            top:0,
                                            background:'linear-gradient(transparent 110px, #FCFCFD)'
                                        }
                                    }}>{content}</HtmlDescription>
                                </Box>
                                <Box mt={3} onClick={setContentIsShow.bind(this, prev => !prev)}
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
                        {/*<Box px={1} mt={1} display={'flex'} justifyContent={'space-between'}>*/}
                        {/*    <Button onClick={()=>{setOpenFilterModal(false)}} size={'large'} color={'primary'} variant={'contained'} sx={{width:'48%' , borderRadius:2}}>اعمال فیلتر</Button>*/}
                        {/*    <Button onClick={handleCancel} size={'large'} color={'gray'} variant={'outlined'} sx={{width:'48%' , borderRadius:2}}>لغو</Button>*/}
                        {/*</Box>*/}
                    </Box>
                </MainModal>
                <MainModal setOpen={setOpenSortModal} open={openSortModal} title={'دسته بندی بر اساس'}>
                    {
                        sortValueItems.map((sortItem) => (
                            <Box sx={{border:`1px solid ${sortItem.id === sortValue ? '#ff8301' :'#eee'}`, borderRadius: 2}} mx={2} mb={1} key={sortItem.value}>
                                <Typography
                                    component={'p'}
                                    onClick={() => {
                                        handleSortOnchange(sortItem.id);
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