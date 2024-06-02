import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {
    Badge,
    Box,
    Button,
    ClickAwayListener,
    Container,
    Grow,
    InputAdornment,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    TextField,
    Typography
} from "@mui/material";
import UserIcon from "../../assets/icons/layout/user";
import SearchOutlined from "../../assets/icons/layout/searchOutlined";
import BluBag from '../../assets/icons/layout/blue-bag.svg';
import Link from "next/link";
import logo from '../../../public/logo.png';
import Image from "next/image";
import {urls} from "@/data/urls";
import {useSelector} from "react-redux";
import {useRouter} from "next/navigation";
import {useState} from "react";
import PN from "persian-number";

const DesktopHeader = ({categories}) => {
    const {isLoggedIn} = useSelector(state => state.userInfo);
    const router = useRouter();
    const {total_count} = useSelector(state => state.cart)
    const {desktopHeaderHeight} = useSelector(state => state.deviceInfo);
    const [categoryId, setCategoryId] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const openCategory = (...arg) => {
        setAnchorEl(arg[1].currentTarget);
        setCategoryId(arg[0]);
    }
    const handleClose = () => {
        setAnchorEl(null);
        setCategoryId(null);
    };
    return (
        <AppBar sx={{backgroundColor: "#fff", height: desktopHeaderHeight}}>
            <Toolbar sx={{height: '100% !important'}}>
                <Container maxWidth={'lg'}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            justifyContent: 'space-between',
                            width: "100%",
                            height: "100%",
                            py: 1,
                        }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                            <Link style={{width: '20%'}} href={urls.home}>
                                <Box sx={{
                                    textAlign: 'center',
                                    width: '100%',
                                    position: 'relative',
                                    aspectRatio: '5.6/1'
                                }}>
                                    <Image
                                        priority
                                        src={logo}
                                        fill
                                        alt="Takgeneral Logo"
                                    />
                                </Box>
                            </Link>
                            <Box sx={{width: "50%" }} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                                {/*<TextField*/}
                                {/*    size={'small'}*/}
                                {/*    variant={'outlined'}*/}
                                {/*    fullWidth={true}*/}
                                {/*    placeholder={'جستجو در تک جنرال'}*/}
                                {/*    InputProps={{*/}
                                {/*        sx: {backgroundColor: "btnGray.main", height: "100%", fontSize: 14},*/}
                                {/*        startAdornment: (*/}
                                {/*            <InputAdornment position="start">*/}
                                {/*                <SearchOutlined/>*/}
                                {/*            </InputAdornment>*/}
                                {/*        ),*/}
                                {/*    }}*/}
                                {/*/>*/}
                                {/*<Link title={'09212075118'} aria-label={`${PN.convertEnToPe('09212075118')} _`} passHref target={'_blank'} href={"tel:989212075118"}>*/}
                                {/*    <Typography fontWeight={'bold'}>تماس 24 ساعته : {PN.convertEnToPe('09212075118')}</Typography>*/}
                                {/*</Link>*/}
                                {/*<Link title={'02177500376'} aria-label={PN.convertEnToPe('02177500376')} passHref target={'_blank'} href={"tel:+982177500376"}>*/}
                                {/*    <Typography fontWeight={'bold'}> تماس در ساعات کاری : {PN.convertEnToPe('02177500376')}</Typography>*/}
                                {/*</Link>*/}
                                <Button variant={'contained'} onClick={()=>{router.push('/contact-us')}}>تماس با ما</Button>
                            </Box>
                            <Box sx={{display: "flex", gap: 2}}>
                                {
                                    isLoggedIn ?
                                        <Button onClick={() => router.push(urls.profile)}
                                                sx={{px: 2, gap: 1, py: .8, borderRadius: 2}} variant={'outlined'}>
                                            حساب کاربری
                                            <UserIcon/>
                                        </Button>
                                        :
                                        <Button onClick={() => router.push(urls.login)}
                                                sx={{px: 2, gap: 1, py: .8, borderRadius: 2}} variant={'contained'}>
                                            ورود/عضویت
                                            <UserIcon/>
                                        </Button>
                                }
                                <Button aria-label={'cart'} title={'cart'} onClick={() => router.push(urls.cart)}
                                        size={'medium'} color={'primary'}
                                        sx={{p: 0, borderRadius: 2.5, border: '1px solid primary', width: 'auto'}}
                                        variant={'outlined'}>
                                    <Badge anchorOrigin={{vertical: 'top', horizontal: 'left',}}
                                           badgeContent={total_count} color="primary">
                                        <BluBag/>
                                    </Badge>
                                </Button>
                            </Box>
                        </Box>
                        <Box
                            component={'ul'}
                            sx={{
                                display: "flex",
                                gap: 6,
                            }}>
                            <Box component={'li'}>
                                <Link href={'/'}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            alignItems: "center ",
                                        }}>
                                        <Typography component={'p'} sx={{color: 'text.main'}}
                                                    variant={'subtitle1'}>خانه</Typography>
                                    </Box>
                                </Link>
                            </Box>
                            <Box component={'li'}>
                                <Link href={'/contact-us'}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            alignItems: "center ",
                                        }}>
                                        {/*{item.icon}*/}
                                        <Typography component={'p'} sx={{color: 'text.main'}} variant={'subtitle1'}>تماس
                                            با
                                            ما</Typography>
                                    </Box>
                                </Link>
                            </Box>
                            <Box component={'li'}>
                                <Link href={'/about-us'}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            alignItems: "center ",
                                        }}>
                                        {/*{item.icon}*/}
                                        <Typography component={'p'} sx={{color: 'text.main'}} variant={'subtitle1'}>درباره
                                            ما</Typography>
                                    </Box>
                                </Link>
                            </Box>
                            <Box component={'li'}>
                                <Link href={'/blog'}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            alignItems: "center ",
                                        }}>
                                        {/*{item.icon}*/}
                                        <Typography component={'p'} sx={{color: 'text.main'}}
                                                    variant={'subtitle1'}>وبلاگ</Typography>
                                    </Box>
                                </Link>
                            </Box>
                            {categories?.map((item) => {
                                return (
                                    <Box key={item.name} onMouseLeave={handleClose}>
                                        <Box
                                            component={'li'}
                                            onMouseOver={openCategory.bind(this, item.id)}
                                            sx={{
                                                cursor: 'pointer',
                                                display: "flex",
                                                gap: 1,
                                                alignItems: "center ",
                                            }}>
                                            {/*{item.icon}*/}
                                                <Typography className={'test'} sx={{color: 'text.main'}}
                                                            variant={'subtitle1'}>{item.name}</Typography>
                                        </Box>
                                        <Popper
                                            open={item.id === categoryId}
                                            anchorEl={anchorEl}
                                            role={undefined}
                                            transition
                                            disablePortal
                                        >
                                            {({TransitionProps, placement}) => (
                                                <Grow
                                                    {...TransitionProps}
                                                    style={{
                                                        transformOrigin:
                                                            placement === 'bottom-start' ? 'left top' : 'left bottom',
                                                    }}
                                                >
                                                    <Paper>
                                                        <ClickAwayListener onClickAway={(event) => {
                                                            if (event.target.classList[2] === 'test') {
                                                                router.push(`/category/${item.url}`)
                                                            }
                                                            setAnchorEl(null);
                                                            setCategoryId(null);
                                                        }}>
                                                            <MenuList
                                                                autoFocusItem={item.id === categoryId}
                                                            >
                                                                {
                                                                    item.children.map((child) => {
                                                                        return (
                                                                            <Link key={child.name}
                                                                                  href={`/category/${child.url}`}>
                                                                                <MenuItem key={child.name}
                                                                                          onClick={handleClose}>{child.name}</MenuItem>
                                                                            </Link>
                                                                        )
                                                                    })
                                                                }
                                                            </MenuList>
                                                        </ClickAwayListener>
                                                    </Paper>
                                                </Grow>
                                            )}
                                        </Popper>
                                    </Box>
                                );
                            })}
                            <Box component={'li'}>
                                <Link href={`/category/flowmeter`}>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: 1,
                                            alignItems: "center ",
                                        }}>
                                        {/*{item.icon}*/}
                                        <Typography component={'h6'} sx={{color: 'text.main'}}
                                                    variant={'subtitle1'}>فلومتر</Typography>
                                    </Box>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Toolbar>
        </AppBar>
    );
};
export default DesktopHeader;
