import {Box} from "@mui/material";

const HtmlDescription = ({children})=>{
    return(
        <Box className={'html-response-elements'} sx={{px:2 , pt:1 ,maxWidth: '100%'}}>
            {children}
        </Box>
    )
}
export default HtmlDescription;