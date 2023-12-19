'use client';
import {FormProvider, useForm} from 'react-hook-form'
const Layout = ({children})=>{
    const formController = useForm({
        defaultValues: {
            myself: true
        }
    });
    return(
        <FormProvider {...formController}>
        {children}
    </FormProvider>)
}
export default Layout