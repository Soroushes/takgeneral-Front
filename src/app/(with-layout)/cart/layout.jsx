'use client';
import {FormProvider, useForm} from 'react-hook-form'
const Layout = ({children})=>{
    const formController = useForm({
        defaultValues: {
            myself: true
        },mode:'onSubmit' , reValidateMode:'onSubmit'
    });
    return(
        <FormProvider {...formController}>
        {children}
    </FormProvider>)
}
export default Layout