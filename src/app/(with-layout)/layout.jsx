'use client'
import {Box} from "@mui/material";
import Navbar from '../../components/layout/Navbar';
import MobileHeader from "../../components/layout/MobileHeader";
import DesktopHeader from '../../components/layout/DesktopHeader'
import AlertSnakeBar from "../../components/share/alertSnakeBar";
import {useSelector} from 'react-redux';
import Footer from "@/components/layout/Footer";
import {useEffect, useState} from "react";
import {BASE_URL} from "@/data/urls";
export default function Layout({children}) {
    const [categoryNames , setCategoryNames] = useState(null)
    const getCategories = async ()=>{
        try{
            const res = await fetch(`${BASE_URL}all-categories/`);
            if(!res.ok){
                console.log(res.error())
            }else{
                return(
                    res.json()
                )
            }
        }catch (err) {
            console.log(err)
        }
    };
    useEffect(async ()=>{
        const categories = await getCategories();
        await setCategoryNames(categories)
    },[])
    const {navbarHeight, mobileHeaderHeight, desktopHeaderHeight} = useSelector(state => state.deviceInfo);
    return (
        <>
            <Box sx={{position: 'relative', zIndex: 10}}>
                <Box sx={{display:{md:'none' , xs:'block'}}}><MobileHeader categories={categoryNames}/></Box>
                <Box sx={{display:{xs:'none' , md:'block'}}}><DesktopHeader categories={categoryNames}/></Box>
            </Box>
            <Box
                sx={{
                    pt: {xs: `${mobileHeaderHeight}px`, md: `${desktopHeaderHeight}px`},
                    pb: {xs: `${navbarHeight}px`, md: 0},
                }}>
                <Box sx={{minHeight : '70vh'}}>
                    {children}
                </Box>
                <Footer/>
            </Box>
            <Box
                sx={{
                    display:{md:'none' , xs:'block'},
                    position: "fixed",
                    zIndex: 1200,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: `${navbarHeight}px`,
                }}>
                <Navbar/>
            </Box>
            <AlertSnakeBar/>
        </>
    );
}