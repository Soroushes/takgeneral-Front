import {Box} from "@mui/material";

const HtmlDescription = ({children})=>{
    return(
        <Box sx={{px:2 , pt:1 ,maxWidth: '100%', maxHeight:200}}>
            {children}
        </Box>
    )
}
export default HtmlDescription;