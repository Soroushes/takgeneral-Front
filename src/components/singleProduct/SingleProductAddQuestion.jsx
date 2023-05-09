import { Typography  , Grid, TextField} from "@mui/material";
import {Controller, useForm} from "react-hook-form";
import { userCommentInput } from "src/data/comment&question";
const SingleProductAddQuestion =()=>{
    const {control} = useForm();
    return(
        <>
            <Typography mb={1}>پرسش شما درباره این کالا</Typography>
            <Grid container justifyContent={'space-between'} rowGap={3}>
                <Grid item md={4} lg={4} xs={12} rowGap={1}>
                    <Typography variant="subtitle1">درباره این کالا سوالی دارید ؟</Typography>
                    <Typography variant="subtitle1">سوال خود را ثبت کنید</Typography>
                </Grid>
                <Grid item lg={7} md={7} xs={12} >
                {
                    userCommentInput.question.map((question)=>{
                        return(
                            <Grid pb={2}>
                                <Controller
                                defaultValue={''}
                                control={control}
                                name={question.name}
                                rules={question.rules}
                                render={({field , fieldState})=>
                                    <TextField
                                    value={field.value}
                                    onChange={fieldState.onChange}
                                    helperText={fieldState.error?.message ?? ''}
                                    label={question.label}
                                    variant={'outlined'} fullWidth={true}
                                    />
                                }
                                />
                            </Grid>
                        )
                    })
                }
                </Grid>     
            </Grid>

        </>
    )
};
export default SingleProductAddQuestion;