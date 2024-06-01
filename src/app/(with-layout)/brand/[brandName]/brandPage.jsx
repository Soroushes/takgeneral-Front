'use client'
import { Container, Grid, Typography , Box} from "@mui/material";
import { useEffect, useMemo, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import SortIcon from '../../../../assets/icons/share/sort.svg';
import ProductList from "../../../../components/share/ProductList";
import Image from "next/image";
import {Controller, useForm} from "react-hook-form";
import {IOSSwitch} from '@/assets/theme/theme';
import HtmlDescription from "@/components/share/HtmlDescription";
import BreadcrumbGenerator from "@/components/share/BreadcrumbGenerator";
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import SelectionButton from "@/components/share/selectionButton";

const BrandPage = ({product, page_count, current_page , content , main_banner , brand}) => {
    const [contentIsShow, setContentIsShow] = useState(false);
    const breadcrumbData = useMemo(()=>[{url : `/brand/${brand.url}` , name : brand.name}] ,[brand])
    const {control} = useForm();
    const [sortValue, setSortValue] = useState('newest');
    const noQueryPath = usePathname();
    const sortValueItems = [
        {
            name: 'جدیدترین',
            id: "newest"
        },
        {
            name: 'گران ترین',
            id: "-price"
        },
        {
            name: 'ارزان ترین',
            id: "price"
        }
    ];
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
                        <Box display={{md: 'none', xs: 'block'}} sx={{mb: 2 , width:'100px'}}>
                            <SelectionButton selectedValue={sortValueItems.find((item) => item.id === sortValue).name}  defaultValue={sortValue} modalName={'دسته بندی بر اساس'} items={sortValueItems} itemValues={'name'} handleChangeFn={handleSortOnchange}>
                                <SortIcon/>
                            </SelectionButton>
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
                                     }}>
                                    <Typography component={'p'} variant={'subtitle1'}>فقط کالاهای موجود</Typography>
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
                                <SelectionButton defaultValue={sortValue} items={sortValueItems} itemValues={'name'} handleChangeFn={handleSortOnchange}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={3.5} sx={{pt: .5, mt: 2, display: {xs: 'none', md: "block"}}}>
                        <Box sx={{backgroundColor: 'white', mx: 1, px: 2, py: 1.5, borderRadius: 2}}>
                            <Typography component={'p'} variant={'subtitle1'}>محدوده قیمت</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8.5} sx={{mt: 2}}>
                        <ProductList concept={'brand'} page={current_page} count={page_count} product={product}/>
                    </Grid>
                </Grid>
                {
                    content.desc ?
                        <Box sx={{px: 1}}>
                            <Box sx={{position: contentIsShow ? '': 'relative'}}>
                                <HtmlDescription boxSx={{
                                    mt: 3,
                                    maxHeight: !contentIsShow ? '170px' : 'auto',
                                    overflow: 'hidden', textOverflow: 'ellipsis', px: 0 ,
                                    '&::before':{
                                        content:'""',
                                        width:'100%',
                                        height:'100%',
                                        position:'absolute',
                                        left:0,
                                        top:0,
                                        background:'linear-gradient(transparent 110px, #FCFCFD)'
                                    }
                                }}>{content.desc}</HtmlDescription>
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
        </Box>
    )
}
export default BrandPage;