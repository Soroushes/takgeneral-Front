import { Grid, Typography , Box  , Divider , TextField, Button } from "@mui/material";
import Rating from '@mui/material/Rating';
import {Controller, useForm} from "react-hook-form";
import { userCommentInput } from "src/data/comment&question";
import Checkbox from '@mui/material/Checkbox';
const SingleProductAddComment = ()=>{
    const {control : controlComment} = useForm();
    const {control : controlRating} = useForm();
    const {control : controlSuggest} = useForm();
    return(
        <>
            <Typography></Typography>
            <Divider orientation="vertical" flexItem/>
            <Typography sx={{pb:2 , fontWeight:'bold'}}>نظر شما درباره این کالا</Typography>
            <Grid container justifyContent={'space-between'} rowGap={3}>
                <Grid item lg={4} md={4} xs={12}>
                    <Box sx={{display:'flex' , gap:1 , flexDirection:'column'}}>
                            <Box sx={{display:'flex' , gap:5 , justifyContent:'space-between' }}>
                                <Typography variant="subtitle1" sx={{ color:'text.muted'}}>کیفیت و کارایی</Typography>
                                <Controller
                                name="Rating"
                                control={controlRating}
                                render={({field , fieldState})=>
                                <Rating sx={{direction:'rtl'}} name="simple-controlled" value={field.value} onChange={field.onChange}/>
                                }
                                />
                            </Box>
                            <Divider/>
                            <Box sx={{display:'flex' , gap:5, justifyContent:'space-between'}}>
                                <Typography variant="subtitle1" sx={{ color:'text.muted'}}>ارزش خرید</Typography>
                                <Controller
                                name="Rating"
                                control={controlRating}
                                render={({field , fieldState})=>
                                <Rating name="simple-controlled" value={field.value} onChange={field.onChange}/>
                                }
                                />                            
                            </Box>
                            <Divider/>
                            <Box sx={{display:'flex' , gap:5, justifyContent:'space-between'}}>
                                <Typography variant="subtitle1" sx={{ color:'text.muted'}}>قیمت</Typography>
                                <Controller
                                name="Rating"
                                control={controlRating}
                                render={({field , fieldState})=>
                                <Rating name="simple-controlled" value={field.value} onChange={field.onChange}/>
                                }
                                />                            
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
                                        control={controlComment}
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
                                    <Controller
                                    name="suggest"
                                    control={controlSuggest}
                                    defaultValue={false}
                                    render={({field , fieldState})=>
                                    <Checkbox size="small" color="secondary" checked={field.value} onChange={field.onChange}/>
                                    }   
                                    />
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