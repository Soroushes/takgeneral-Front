import { Grid, Typography , Box  , Divider ,Input, TextField, Button } from "@mui/material";
import Rating from '@mui/material/Rating';
import { useState } from "react";
import {Controller, useForm} from "react-hook-form";
import { userCommentInput } from "src/data/comment&question";
import Checkbox from '@mui/material/Checkbox';
const SingleProductAddComment = ()=>{
    const [rating , setRating] = useState('2.5');
    const [suggest , setSuggest] = useState(false)
    const {control} = useForm();
    const changeCheckSuggest = ()=>{
        setSuggest(prev => !prev)
    }
    return(
        <>
            <Typography sx={{pb:2 , fontWeight:'bold'}}>نظر شما درباره این کالا</Typography>
            <Grid container justifyContent={'space-between'} rowGap={3}>
                <Grid item lg={4} md={4} xs={12}>
                    <Box sx={{display:'flex' , gap:1 , flexDirection:'column'}}>
                            <Box sx={{display:'flex' , gap:5 , justifyContent:'space-between' }}>
                                <Typography variant="subtitle1" sx={{ color:'text.muted'}}>کیفیت و کارایی</Typography>
                                <Rating name="simple-controlled" value={rating} onChange={(event, newRating) => {setRating(newRating)}}/>
                            </Box>
                            <Divider/>
                            <Box sx={{display:'flex' , gap:5, justifyContent:'space-between'}}>
                                <Typography variant="subtitle1" sx={{ color:'text.muted'}}>ارزش خرید</Typography>
                                <Rating name="simple-controlled" value={rating} onChange={(event, newRating) => {setRating(newRating)}}/>
                            </Box>
                            <Divider/>
                            <Box sx={{display:'flex' , gap:5, justifyContent:'space-between'}}>
                                <Typography variant="subtitle1" sx={{ color:'text.muted'}}>قیمت</Typography>
                                <Rating name="simple-controlled" value={rating} onChange={(event, newRating) => {setRating(newRating)}}/>
                            </Box>
                    </Box>
                </Grid>
                <Grid item lg={7} md={7} xs={12}>
                    {
                        userCommentInput.comment.map((comment)=>{
                            return(
                                <Grid key={comment.name} pb={2} width={'100%'} item>
                                    <Controller
                                        defaultValue={''}
                                        name={comment.name}
                                        control={control}
                                        rules={comment.rules}
                                        render={({field, fieldState}) =>
                                        <TextField 
                                        label={comment.label}
                                        value={field?.value}
                                        onChange={field?.onChange}
                                        helperText={fieldState.error?.message ?? ''}
                                        variant={'outlined'} fullWidth={true}
                                    />
                                }
                            />
                                </Grid>
                            )
                        })
                    }
                    <Grid item sx={{pt:1}}>
                        <Box sx={{display :'flex' , justifyContent:'space-between' , alignItems:'center'}}>
                            <Grid >
                                <Box sx={{display:'flex' , alignItems:'center'}}>
                                    <Checkbox size="small" color="secondary" checked={suggest} onChange={changeCheckSuggest}/>
                                    <Typography color={'text.muted'}>پیشنهاد میکنم</Typography>
                                </Box>
                            </Grid>
                            <Grid><Button variant="contained" color={'secondary'}>ارسال نظر</Button></Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
export default SingleProductAddComment;