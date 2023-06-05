import {Box, Button, Grid, TextField} from "@mui/material";
import {Controller} from "react-hook-form";
import ClickAwayListener from '@mui/base/ClickAwayListener';
import CloseIcon from '@mui/icons-material/Close';

const AnswerButton = ({control, setAnswerInputIsShow, answerInputIsShow}) => {
    const openAnswerInput = () => {
        setAnswerInputIsShow(prev => !prev);
    };
    return (<>
            {
                answerInputIsShow ?
                    <>
                        <Box display={'flex'} justifyContent={'space-between'} gap={1} alignItems={'center'} sx={{mt: 2}}>
                            <Controller
                                name="newAnswer"
                                defaultValue={''}
                                control={control}
                                rules={{required: 'متن پاسخ خود را وارد کنید'}}
                                sx={{display:'flex !important' , justifyContent :'center'}}
                                render={({field, fieldState}) =>
                                        <TextField
                                            sx={{ borderRadius: 2 , width:'95%'  }}
                                            label={'پاسخ خود را مطرح کنید'}
                                            value={field.value}
                                            helperText={fieldState.error?.message ?? ''}
                                            error={!!fieldState.error?.message}
                                            onChange={field.onChange}
                                            autoFocus
                                        />
                                }
                            />
                            <Button onClick={openAnswerInput} variant={'outlined'} sx={{borderRadius : 2 , minWidth:{md:'5%' , xs:'3%'} , p:1 }}>
                                <CloseIcon color={'primary'}/>
                            </Button>
                        </Box>
                        <Grid container>
                            <Grid item xs={12} md={1.5} justifyContent={'end'}>
                                <Button variant="contained" size="small" type="submit"
                                        sx={{width: '100%', fontSize: '12px', borderRadius: 1.5, p: 1, mt: 1}}
                                >
                                    ارسال پاسخ
                                </Button>
                            </Grid>
                        </Grid>
                    </> :
                    <Grid container>
                        <Grid item xs={12} md={1.5}>
                            <Button variant={'contained'} disabled={answerInputIsShow}
                                    onClick={openAnswerInput}
                                    sx={{fontSize: '12px', width: '100%', borderRadius: 1.5, mt: 1}}
                                    color="gray">
                                ثبت پاسخ
                            </Button>
                        </Grid>
                    </Grid>
            }

        </>

    )
}
export default AnswerButton