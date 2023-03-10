import {Container, Grid, Typography, useTheme} from "@mui/material";
import {Box} from "@mui/system";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Link from "next/link";
import {panelItems} from "../../data/profile/panelitems";
const PanelLayout = ({children}) => {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/login');
        }
    }, [])

    return (
        <Container maxWidth={'lg'} sx={{mt: 5}}>
            <Grid container justifyContent={'space-between'}>
                <Grid xs={12} md={3} lg={2.5} item>
                    <Box sx={{
                        cursor: "pointer",
                        mb: 2,
                        gap: {xs: 3, md: 0},
                        display: "flex",
                        flexDirection: {xs: "row", md: "column"},
                        backgroundColor: 'gray.lighter',
                        borderRadius: 4,
                        p: {md: 2}
                    }}>
                        {
                            panelItems.map((item) => {
                                const active = router.pathname===item.link ;
                                return (
                                    <Link key={item.link} href={item.link} onClick={item.onClick?.bind(this)}>
                                        <Box sx={{
                                            display: "flex",
                                            flexDirection: {xs: "column", md: "row"},
                                            py: 2,
                                            px : 2 ,
                                            gap: 1,
                                            borderRadius : 3 ,
                                            alignItems: "center",
                                            justifyContent: {xs: "center", md: 'start'} ,
                                            backgroundColor : active ? "primary.light" : ""
                                        }}>
                                            {active ? item.activeIcon : item.icon}
                                            <Typography variant={'subtitle2'} sx={{color : active ? "white" : "text.main" , textAlign : "center"}}>{item.title}</Typography>
                                        </Box>
                                    </Link>
                                )
                            })
                        }
                    </Box>
                </Grid>
                <Grid sx={{backgroundColor: "white", height: 'fit-content', borderRadius: 4}} xs={12} md={8.5} item>
                    {children}
                </Grid>
            </Grid>
        </Container>
    )
}
export default PanelLayout;