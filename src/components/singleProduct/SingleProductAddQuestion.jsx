import { Typography  , Grid, TextField, Button } from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import { userCommentInput } from "src/data/comment&question";
import { forwardRef } from "react";
const SingleProductAddQuestion =()=>{
    const {control} = useForm();
    // const CustomInput = forwardRef(function CustomInput(props, ref) {
    //     return (
            
    //       <Input
    //         slots={{ input: StyledInputElement, textarea: StyledTextareaElement }}
    //         {...props}
    //         ref={ref}
    //       />
    //     );
    //   });
    return(
        <>
            <Typography sx={{fontWeight:'bold'}} mb={1}>پرسش شما درباره این کالا</Typography>
            <Grid container justifyContent={'space-between'} rowGap={3}>
                <Grid item md={4} lg={4} xs={12} rowGap={1}>
                    <Typography variant="subtitle1">درباره این کالا سوالی دارید ؟</Typography>
                    <Typography variant="subtitle1">سوال خود را ثبت کنید</Typography>
                </Grid>
                <Grid item lg={7} md={7} xs={12} >
                    <Grid pb={2}>
                        <Controller
                            defaultValue={''}
                            control={control}
                            name={userCommentInput.question.name.name}
                            rules={userCommentInput.question.name.rules}
                            render={({field , fieldState})=>
                                <TextField
                                value={field.value}
                                onChange={field.onChange}
                                helperText={fieldState.error?.message ?? ''}
                                label={userCommentInput.question.name.label}
                                variant={'outlined'} fullWidth={true}
                                minRows={4}
                                />
                                }
                            />
                    </Grid>
                    {/* <Grid>
                        <Controller
                            defaultValue={''}
                            control={control}
                            name={userCommentInput.question.question.name}
                            rules={userCommentInput.question.question.rules}
                            render={({field , fieldState})=>
                            <CustomInput 
                            aria-label="Demo input" multiline 
                            placeholder={userCommentInput.question.question.label}
                            minRows={5}
                            value={field.value}
                            onChange={field.onChange}
                            />
                                }
                        />
                    </Grid> */}
                    <Grid>
                        <Button variant="contained" sx={{px:4}} color="secondary">ارسال پرسش</Button>
                    </Grid>
                </Grid>     
            </Grid>

        </>
    )
};
export default SingleProductAddQuestion;