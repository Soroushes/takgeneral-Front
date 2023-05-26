import {MapContainer, Marker, TileLayer} from "react-leaflet";
import {Box} from "@mui/system";
import {Divider, Typography} from "@mui/material";

const AddressPreview = ({address}) => {
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
                    center={[address.lt, address.lng]} zoom={16} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[address.lt, address.lng]}></Marker>
                </MapContainer>
            </Box>
            <Box sx={{px: 1}} alignItems={'center'} display={'flex'}>
                <Box sx={{
                    width: '50%',
                    py: 2,
                    display: 'flex',
                    gap: 1,
                    alignItems: 'center',
                    borderInlineEnd: '1px solid #ccc',

                }}>
                    <Typography whiteSpace={'nowrap'} variant={'body2'}>نام آدرس : </Typography>
                    <Typography textAlign={'justify'} overflow={'hidden'} textOverflow={'ellipsis'} color={'text.muted'}
                                variant={'subtitle1'}>{address?.title}</Typography>
                </Box>
                <Box sx={{width: '50%', display: 'flex', justifyContent: 'end', gap: 1, alignItems: 'center'}}>
                    <Typography whiteSpace={'nowrap'} variant={'body2'}>کد پستی : </Typography>
                    <Typography textAlign={'justify'} overflow={'hidden'} textOverflow={'ellipsis'} color={'text.muted'}
                                variant={'subtitle1'}>{address?.post_code}</Typography>
                </Box>
            </Box>
            <Divider/>
            <Box sx={{px: 1}} alignItems={'center'} display={'flex'}>
                <Box sx={{
                    width: '50%',
                    py: 2,
                    display: 'flex',
                    gap: 1,
                    alignItems: 'center',
                    borderInlineEnd: '1px solid #ccc'
                }}>
                    <Typography whiteSpace={'nowrap'} variant={'body2'}>پلاک : </Typography>
                    <Typography textAlign={'justify'} overflow={'hidden'} textOverflow={'ellipsis'} color={'text.muted'}
                                variant={'subtitle1'}>{address?.pelak}</Typography>
                </Box>
                <Box sx={{width: '50%', display: 'flex', gap: 1, alignItems: 'center', justifyContent: 'end', py: 2}}>
                    <Typography whiteSpace={'nowrap'} variant={'body2'}>واحد : </Typography>
                    <Typography textAlign={'justify'} overflow={'hidden'} textOverflow={'ellipsis'} color={'text.muted'}
                                variant={'subtitle1'}>{address?.vahed}</Typography>
                </Box>
            </Box>
            <Divider/>
            <Box sx={{p: 2}} gap={3} alignItems={'center'} display={'flex'}>
                <Typography variant={'body2'} width={'max-content'}>آدرس کامل : </Typography>
                <Typography textAlign={'justify'} color={'text.muted'} variant={'subtitle1'}>{address?.full_address}</Typography>
            </Box>
            <Divider/>
        </>
    )
}
export default AddressPreview;
