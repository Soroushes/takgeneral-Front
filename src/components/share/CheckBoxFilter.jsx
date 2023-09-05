import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import {useEffect, useState} from 'react';
import {Typography} from '@mui/material';
import { useRouter, useSearchParams} from "next/navigation";

const CheckBoxFilter = ({subFilter}) => {
    let filtersId = [];
    subFilter.map((value) => {
        filtersId.push(value.id);
    })
    let initialCheckBox = {}
    filtersId.forEach((id) => {
        initialCheckBox[String(id)] = false;
    })
    const {push} = useRouter();
    const searchParams = useSearchParams();
    const brandParams = searchParams.getAll('brand');
    const [checkBox, setCheckBox] = useState(initialCheckBox);
    useEffect(() => {
        // update our checkbox ui with query route
        if (brandParams) {
            let brandsArray = brandParams;
            const newInitialCheckBox = {};
            if (typeof brandParams !== 'object') {
                brandsArray = Array(brandsArray);
            }
            brandsArray.forEach(brandId => {
                newInitialCheckBox[brandId] = true;
            })
            setCheckBox(prevState => (
                {
                    ...prevState,
                    ...newInitialCheckBox
                }
            ))
        }
    }, []);
    const handleCheck = (event) => {
        const params = new URLSearchParams(searchParams);
        const newCheckBoxState = {...checkBox, [event.target.name]: (event.target.checked)}
        setCheckBox(newCheckBoxState);
        const checkedFields = Object.keys(newCheckBoxState).filter(key => newCheckBoxState[key] === true);
        if(checkedFields.length){
            params.delete('page');
            params.delete('brand');
            checkedFields.map((checkedItems)=>{
                params.append('brand' , checkedItems);
            })
            push('?'+params.toString(),{scroll : false})
        }else{
            params.delete('brand');
            params.set('page',1);
            push('?'+params.toString() , {scroll : false})
        }
    };
    return (
        <>
            <FormLabel sx={{borderBottom: '1px solid #ccc', pb: 1, fontSize: 14, mb: 1}} component="legend">
                برندهای پمپ
            </FormLabel>
            {
                subFilter.map((value) => {
                    return (
                        <Box
                            key={value.id}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: ' space-between',
                                mb: 1,
                                fontWeight: 'bold'
                            }}>
                            <Checkbox inputProps={{'aria-label': 'controlled'}} size={'small'}
                                      checked={checkBox[value.id]} onChange={handleCheck}
                                      name={String(value.id)}/>
                            <Typography variant={'body2'} sx={{textAlign: 'center'}}>{value.name}</Typography>
                            <Typography variant={'subtitle2'}>({value.product_count})</Typography>
                        </Box>
                    )
                })
            }
        </>
    )
}
export default CheckBoxFilter;