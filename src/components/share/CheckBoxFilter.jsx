import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import {useEffect, useState} from 'react';
import {Typography} from '@mui/material';
import {useRouter} from "next/router";

const CheckBoxFilter = ({subFilter}) => {
    let filtersId = []
    subFilter.map((value) => {
        filtersId.push(value.brand__id);
    })
    let initialCheckBox = {}
    filtersId.forEach((id) => {
        initialCheckBox[String(id)] = false;
    })
    const {push, isReady, query} = useRouter();
    const [checkBox, setCheckBox] = useState(initialCheckBox);
    useEffect(() => {
        // update our checkbox ui with query route
        if (isReady && query.brand) {
            let brandsArray = query.brand;
            const newInitialCheckBox = {};
            if (typeof query.brand !== 'object') {
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
        const newCheckBoxState = {...checkBox, [event.target.name]: (event.target.checked)}
        setCheckBox(newCheckBoxState);
        const checkedFields = Object.keys(newCheckBoxState).filter(key => newCheckBoxState[key] === true);
        if (checkedFields.length) {
            push({
                pathname: `/products/${query.category}/${query.categoryType}`,
                query: {
                    ...query,
                    brand: checkedFields,
                    page: 1
                }
            }, undefined, {scroll: false})
        } else {
            push(`/products/${query.category}/${query.categoryType}`, undefined, {scroll: false});
        }
    };
    //
    return (
        <>
            <FormLabel sx={{borderBottom: '1px solid #ccc', pb: 1, fontSize: 14, mb: 1}} component="legend">
                برندهای پمپ
            </FormLabel>
            {
                subFilter.map((value) => {
                    return (
                        <Box
                            key={value.brand__id}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: ' space-between',
                                mb: 1,
                                fontWeight: 'bold'
                            }}>
                            <Checkbox inputProps={{'aria-label': 'controlled'}} size={'small'}
                                      checked={checkBox[value.brand__id]} onChange={handleCheck}
                                      name={String(value.brand__id)}/>
                            <Typography variant={'body2'} sx={{textAlign: 'center'}}>{value.brand__name}</Typography>
                            <Typography variant={'subtitle2'}>({value.product_count})</Typography>
                        </Box>
                    )
                })
            }
        </>
    )
}
export default CheckBoxFilter;