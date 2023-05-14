import {MapContainer, Marker, TileLayer} from "react-leaflet";
import {Box} from "@mui/system";
import {Divider, Typography} from "@mui/material";
import MainModal from "./MainModal";
import Map from "./Map";
import {useState} from "react";

const MapShowDetails = () => {
    const position = [51.505, -0.09];
    const [openMapModal , setOpenMapModal] = useState(false) ;
    return (
        <>
            <Box onClick={()=>setOpenMapModal(true)} sx={{aspectRatio: '1/1'}}>
                <MapContainer
                    dragging={false}
                    zoomControl={false}
                    style={{
                        width: "100%",
                        zIndex: "10",
                        height: "100%",
                        position: "relative",
                        borderRadius: "8px"
                    }}
                    center={position} zoom={18} scrollWheelZoom={false}>
                    <TileLayer
                        url="https://api.mapbox.com/styles/v1/sepidehtadayon/ckytn288a000814llavgwz2ys/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2VwaWRlaHRhZGF5b24iLCJhIjoiY2t5dG16Yzh1MGdhdTJ4bzhqa2N5aXhuZCJ9.RF8Hc0pbIBQygcPtSkXVOA"
                    />
                    <Marker position={position}></Marker>
                </MapContainer>
            </Box>
            <Box sx={{p: 2}} gap={3} alignItems={'center'} display={'flex'} justifyContent={'space-between'}>
                <Typography whiteSpace={'nowrap'} variant={'body2'}>آدرس : </Typography>
                <Typography textAlign={'justify'} overflow={'hidden'} textOverflow={'ellipsis'} color={'text.muted'}
                            variant={'subtitle1'}> sdf asf asf asfنید شنتید ش سشیت شدتی asd asd asd asd ad asd asd
                </Typography>
            </Box>
            <Divider/>
            <Box sx={{p: 2}} gap={3} alignItems={'center'} display={'flex'} justifyContent={'space-between'}>
                <Typography whiteSpace={'nowrap'} width={'max-content'} variant={'body2'}>نام آدرس</Typography>
                <Typography textAlign={'justify'} overflow={'hidden'} textOverflow={'ellipsis'} color={'text.muted'}
                            variant={'subtitle1'}>اطلاعی ندارم</Typography>
            </Box>
            <Divider />
            <Box sx={{p: 2}} gap={3} alignItems={'center'} display={'flex'} justifyContent={'space-between'}>
                <Typography whiteSpace={'nowrap'} width={'max-content'} variant={'body2'}>آدرس : </Typography>
                <Typography textAlign={'justify'} overflow={'hidden'} textOverflow={'ellipsis'} color={'text.muted'}
                            variant={'subtitle1'}> sdf asf asf asfنید شنتید ش سشیت شدتی asd asd asd asd ad asd asd
                    ن</Typography>
            </Box>
            <Divider/>
            <Box sx={{p: 2}} gap={3} alignItems={'center'} display={'flex'} justifyContent={'space-between'}>
                <Typography whiteSpace={'nowrap'} width={'max-content'} variant={'body2'}>آدرس : </Typography>
                <Typography textAlign={'justify'} overflow={'hidden'} textOverflow={'ellipsis'} color={'text.muted'}
                            variant={'subtitle1'}> sdf asf asf asfنید شنتیدasd asd asd ad asd asdن</Typography>
                <Divider/>
            </Box>
            <MainModal setOpen={setOpenMapModal} title={'انتخاب آدرس بر روی نقشه'} open={openMapModal} mobileFullHeight={true} desktopFullScreen={true}>
                <MapContainer
                    style={{
                        width: "100%",
                        zIndex: "10",
                        height: "100%",
                        position: "relative",
                    }}
                    zoomControl={false}
                    center={position}
                    zoom={18}
                >
                    <Map/>
                </MapContainer>
            </MainModal>
        </>
    )
}
export default MapShowDetails;