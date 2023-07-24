import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import {useEffect, useState} from 'react';
import {Typography} from '@mui/material';
import { useRouter, useSearchParams , usePathname} from "next/navigation";

const CheckBoxFilter = ({subFilter, category}) => {
    let filtersId = [];
    subFilter.map((value) => {
        filtersId.push(value.brand__id);
    })
    let initialCheckBox = {}
    filtersId.forEach((id) => {
        initialCheckBox[String(id)] = false;
    })
    const {push, isReady} = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    console.log(pathname)
    const brandParams = searchParams.get('brand');
    const pageParams = searchParams.get('page');
    const pageSizeParams = searchParams.get('page_size');
    const orderingParams = searchParams.getAll('ordering');
    const paramsArray = [pageParams ,pageSizeParams , orderingParams];
    // const params = {};
    // for (const [key, value] of searchParams.entries()) {
    //     params[key] = value
    // }
    const [checkBox, setCheckBox] = useState(initialCheckBox);
    useEffect(() => {
        // update our checkbox ui with query route
        if (isReady && brandParams) {
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
        const newCheckBoxState = {...checkBox, [event.target.name]: (event.target.checked)}
        setCheckBox(newCheckBoxState);
        const checkedFields = Object.keys(newCheckBoxState).filter(key => newCheckBoxState[key] === true);
        if (checkedFields.length) {
            const brandString = [];
            checkedFields.map((item)=>{
                brandString.push(`brand=${item}`)
            })
            push(`${category}?`+ brandString.join('&'))
        } else {
            push(`/${category}`);
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