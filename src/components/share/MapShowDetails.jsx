import {MapContainer, Marker, TileLayer} from "react-leaflet";
import {Box} from "@mui/system";
import {Typography} from "@mui/material";

const MapShowDetails = () => {
    const position = [51.505, -0.09]
    return (
        <>
            <Box sx={{aspectRatio: '1/1'}}>
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
            <Box sx={{p: 1}} gap={3} alignItems={'center'} display={'flex'} justifyContent={'space-between'}>
                <Typography whiteSpace={'nowrap'} variant={'subtitle1'}>آدرس : </Typography>
                <Typography textAlign={'justify'} overflow={'hidden'} textOverflow={'ellipsis'} color={'text.muted'} variant={'subtitle1'}> sdf asf asf asfنید شنتید ش  سشیت شدتی asd asd asd asd ad asd asd  ن</Typography>
            </Box>
            <Box sx={{p: 1}} gap={3} alignItems={'center'} display={'flex'} justifyContent={'space-between'}>
                <Typography whiteSpace={'nowrap'} width={'max-content'} variant={'body2'}>نام آدرس</Typography>
                <Typography textAlign={'justify'} overflow={'hidden'} textOverflow={'ellipsis'} color={'text.muted'} variant={'subtitle1'}>اطلاعی ندارم</Typography>
            </Box>
            <Box sx={{p: 1}} gap={3} alignItems={'center'} display={'flex'} justifyContent={'space-between'}>
                <Typography whiteSpace={'nowrap'} width={'max-content'} variant={'body2'}>آدرس : </Typography>
                <Typography textAlign={'justify'} overflow={'hidden'} textOverflow={'ellipsis'} color={'text.muted'} variant={'subtitle1'}> sdf asf asf asfنید شنتید ش  سشیت شدتی asd asd asd asd ad asd asd  ن</Typography>
            </Box>
            <Box sx={{p: 1}} gap={3} alignItems={'center'} display={'flex'} justifyContent={'space-between'}>
                <Typography whiteSpace={'nowrap'} width={'max-content'} variant={'body2'}>آدرس : </Typography>
                <Typography textAlign={'justify'} overflow={'hidden'} textOverflow={'ellipsis'} color={'text.muted'} variant={'subtitle1'}> sdf asf asf asfنید شنتید ش  سشیت شدتی asd asd asd asd ad asd asd  ن</Typography>
            </Box>
        </>
    )
}
export default MapShowDetails;