'use client'
import {Box} from "@mui/system";
import Image from "next/image";
import {Button, Container, Divider, Grid, MenuItem, TextField, Typography} from "@mui/material";
import CheckBoxFilter from "src/components/share/CheckBoxFilter";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import MainModal from "../../../components/share/MainModal";
import {Fragment, useEffect, useRef, useState} from "react";
import FilterAltIcon from '../../../assets/icons/share/setting-5.svg';
import Banner from '../../../assets/images/categoryBanner1.jpg'
import CategorySlider from "../../../components/share/CategorySlider";
import {useSelector} from "react-redux";
import SortIcon from "../../../assets/icons/share/sort.svg";
import ProductList from "../../../components/share/ProductList";

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
const ChildCategoryPage = ({ brands, current_page, page_count , data  , category ,childCategory , products , content}) => {
    const {push} = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const noQueryPath = usePathname();
    const [openFilterModal, setOpenFilterModal] = useState(false);
    const [openSortModal, setOpenSortModal] = useState(false);
    const [sortValue, setSortValue] = useState('newest');
    const productBoxRef = useRef(null);
    const {isMobile} = useSelector(state => state.deviceInfo)
    useEffect(() => {
        setSortValue('newest')
    }, [noQueryPath])
    const handleSortOnchange = (value) => {
        setSortValue(value);
        params.set('ordering' , value);
        push(noQueryPath+'?'+ params.toString())
    }
    return (
        <Box sx={{minHeight: "70vh"}}>
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
            <Container disableGutters={true} ref={productBoxRef} maxWidth={'lg'}>
                <Box sx={{px : 1}}>
                    <CategorySlider selfId={category} category={childCategory}/>
                </Box>
                <Grid sx={{px: 1.5}} container>
                    <Grid item xs={12}>
                        {
                            isMobile ?
                                <Box sx={{mb: 2, px: 1, gap: 1, display: 'flex', justifyContent: 'space-between'}}>
                                    <Button size={'small'} onClick={() => setOpenFilterModal(true)} color={'btnGray'}
                                            variant={'contained'}>
                                        <FilterAltIcon/>
                                        <Typography sx={{ml: 1}}> فیلتر</Typography>
                                    </Button>
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
                                    <Grid item md={3.5}></Grid>
                                    <Grid item md={8.5} sx={{mb: 2 , px:1}}>
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
                            <Box sx={{p: 2, borderRadius: 2, backgroundColor: '#fff', boxShadow: 1, width: '100%'}}>
                                <CheckBoxFilter category={category} key={noQueryPath} subFilter={brands}/>
                            </Box>
                        </Grid>

                    }
                    <Grid item xs={12} md={8.5}>
                        <ProductList product={products} page={current_page} count={page_count}/>
                    </Grid>
                </Grid>
                <Box dangerouslySetInnerHTML={{__html: content}}/>
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
    )
}
export default ChildCategoryPage;