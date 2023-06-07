import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import {Controller} from "react-hook-form";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

const AnswerButton = ({control, setAnswerInputIsShow, answerInputIsShow, date}) => {
    const openAnswerInput = () => {
        setAnswerInputIsShow(prev => !prev);
    };
    return (<>
            {answerInputIsShow ? <>
                <Typography sx={{px: 2}} component={'p'} textAlign={'end'} variant={'caption'}>{date}</Typography>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'start'} sx={{mt: 2}}>
                    <Controller
                        name="newAnswer"
                        defaultValue={''}
                        control={control}
                        rules={{required: 'متن پاسخ خود را وارد کنید'}}
                        sx={{display: 'flex !important', justifyContent: 'center'}}
                        render={({field, fieldState}) => <TextField
                            sx={{borderRadius: 2, width: '95%'}}
                            label={'پاسخ خود را مطرح کنید'}
                            value={field.value}
                            size={'small'}
                            helperText={fieldState.error?.message ?? ''}
                            error={!!fieldState.error?.message}
                            onChange={field.onChange}
                            autoFocus
                        />}
                    />
                    <IconButton sx={{mr: {lg: 2}}} onClick={openAnswerInput} size={'small'}>
                        <CloseIcon color={'primary'}/>
                    </IconButton>
                </Box>
                <Box container display={'flex'} justifyContent={'start'} alignItems={'center'}>
                    <Button variant="contained" size="small" type="submit"
                            sx={{fontSize: '12px', borderRadius: 1.5, p: 1, mt: 1}}
                    >
                        ارسال پاسخ
                    </Button>
                </Box>
            </> : <Grid container display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Grid item md={1.5}>
                    <Button variant={'contained'} disabled={answerInputIsShow}
                            onClick={openAnswerInput}
                            sx={{fontSize: '12px', width: '100%', borderRadius: 1.5, mt: 1}}
                            color="gray">
                        ثبت پاسخ
                    </Button>
                </Grid>
                <Grid item md={2} display={'flex'} justifyContent={'end'} sx={{mt: {xs: 2}}}>
                    <Typography sx={{px: 2}} component={'p'} textAlign={'end'}
                                variant={'caption'}>{date}</Typography>
                </Grid>
            </Grid>}

        </>

    )
}
export default AnswerButton