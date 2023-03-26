import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import {useState} from 'react';
import {Typography} from '@mui/material';

const CheckBoxFilter = ({subFilter}) => {
    let names = []
    subFilter.values.map((value) => {
        names.push(value.name);
    })
    let checkBoxBull = {}
    names.map((name) => {
        checkBoxBull[name] = false
    })
    const [checkBox, setCheckBox] = useState(checkBoxBull);
    const handleCheck = (event) => {
        setCheckBox({
            ...checkBox,
            [event.target.name]: (event.target.checked),
        });
    };

    return (
        <Paper elevation={1} sx={{p: 3, borderRadius: 2}}>
            <FormLabel sx={{borderBottom: '1px solid #ccc', pb: 1 , fontSize : 14 , mb : 1}}  component="legend">{subFilter.title}</FormLabel>
            <FormGroup>
                {
                    subFilter.values.map((value) => {
                        return (
                            <Box
                                key={value.name}
                                sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: ' space-between',
                                px: 1,
                                fontWeight: 'bold'
                            }}>
                                <FormControlLabel
                                    control={<Checkbox size={'small'} checked={checkBox[value.name]} onChange={handleCheck} name={value.name}/>} label={value.name}
                                />
                                <Typography>{value.number}</Typography>
                            </Box>
                        )
                    })
                }
            </FormGroup>
        </Paper>
    )
}
export default CheckBoxFilter;