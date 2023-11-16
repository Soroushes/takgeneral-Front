import {Box, MenuItem, TextField, Typography} from "@mui/material";
import {useState} from "react";
import MainModal from "@/components/share/MainModal";

const SelectionButton = ({defaultValue , items , handleChangeFn , itemValues , children , modalName , selectedValue})=>{
    const [modalIsOpen , setModalIsOpen] = useState(false);
    return(
        <>
            <TextField
                sx={{
                    width: "150px", "& fieldset": {border: '1px solid #eee'},
                    display:{md:'block' , xs:'none'}
                }}
                size={'small'}
                select
                defaultValue={defaultValue}
                onChange={(e) => handleChangeFn(e.target.value)}
            >
                {
                    items.map((sortItem) => (
                        <MenuItem key={sortItem.id}
                                  variant={'subtitle1'}
                                  value={sortItem.id}>{sortItem[itemValues]}</MenuItem>
                    ))
                }
            </TextField>
            <Box onClick={()=>{setModalIsOpen(true)}} sx={{display:{md:'none' , xs:'flex'} , border:'1px solid #eee' , alignItems:'center' , py:.5 , px:1.5 , borderRadius:2}}>
                {
                    children
                }
                <Typography ml={1}>{selectedValue}</Typography>
            </Box>
            <MainModal open={modalIsOpen} setOpen={setModalIsOpen} title={modalName}>
                {
                    items.map((sortItem) => (
                        <Box sx={{border:`1px solid ${sortItem[itemValues] === selectedValue ? '#ff8301':'#eee'}`, borderRadius: 2}} mx={2} mb={1} key={sortItem.value}>
                            <Typography
                                component={'p'}
                                onClick={() => {
                                    handleChangeFn(sortItem.id);
                                    setModalIsOpen(false);
                                }}
                                sx={{py: 1.5, px: 1.5}}
                            >
                                {sortItem[itemValues]}
                            </Typography>
                        </Box>
                    ))
                }
            </MainModal>
        </>
    )
}
export default SelectionButton;