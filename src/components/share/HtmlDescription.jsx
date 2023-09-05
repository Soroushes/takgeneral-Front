import {Box} from "@mui/material";

const HtmlDescription = ({children , boxSx})=>{
    return(
        <Box sx={{px:2 , pt:1 ,maxWidth: '100%' , ...boxSx}} className={'html-response-elements'}  dangerouslySetInnerHTML={{__html: children}}/>
    )
}
export default HtmlDescription;