import {Box, Typography } from "@mui/material";
import PN from "persian-number";
import {useAxios} from "src/hooks/useAxios";
import {useState} from "react";
import Rating from '@mui/material/Rating';
import PersonIcon from '../../assets/icons/profile-circle.svg';
import Like from '../../assets/icons/like.svg';
import DisLike from '../../assets/icons/dislike.svg';
const Comment = ({comment}) => {
    const date = Intl.DateTimeFormat('fa', {
        useGrouping: false, year: "numeric", month: "long", day: "numeric"
    }).format(comment.created_at.timestamp * 1000);
    const [likeDislike, setLikeDislike] = useState('')
    const {callApi} = useAxios();
    const handlelikeDislike = (like) => {
        if ((like && likeDislike === 'like') || (!like && likeDislike === 'dislike')) {
            return
        }
        callApi({
            url: 'like-disslike-comment', method: 'post', token: true, data: {
                comment: comment.id, like_vote: like, dislike_vote: !like
            }, successFunc: () => {
                if (like) {
                    setLikeDislike('like');
                } else {
                    setLikeDislike('dislike');
                }
            }
        })


    }
    return (
        <Box sx={{px:2 , mb:2}}>
            <Box display={'flex'} justifyContent={'space-between'}>
                <Box display={'flex'} gap={3} alignItems={'center'} justifyContent={'space-between'}>
                    <Box display={'flex'}><Rating size={'small'} sx={{mr:.5}} defaultValue={1} max={1} /><Typography>{PN.convertEnToPe(PN.sliceNumber(Math.trunc(2)))}</Typography></Box>
                    <Box display={"flex"} alignItems={"center"} gap={.5} >
                        <PersonIcon fontSize={'small'} color={'gray'}/>
                        <Typography color={'text.muted'} variant="subtitle1">{comment?.user_alias_name}</Typography>
                    </Box>
                    <Typography variant={'subtitle2'} color={'text.muted'}>{date}</Typography>
                </Box>
                <Box item color={'gray.main'} display={'flex'} justifyContent={'end'} alignItems={'center'} gap={1}>
                    <Box onClick={handlelikeDislike.bind(this, true)} display={'flex'} gap={1}
                         alignItems={'center'}>
                        <Typography variant="subtitle1" color={likeDislike === 'like' ? 'primary' : 'gray'}>
                            {PN.convertEnToPe(likeDislike === 'like' ? comment.likes_count + 1 : comment.likes_count)}
                        </Typography>
                        <Like color={likeDislike === 'like' ? 'primary' : 'gray'}
                                           sx={{cursor: 'pointer'}}
                                           fontSize={'10px'}/>
                    </Box>
                    <Box display={'flex'} onClick={handlelikeDislike.bind(this, false)} gap={1}
                         alignItems={'center'}>
                        <Typography variant="subtitle1" color={likeDislike === 'dislike' ? 'primary' : 'gray'}>
                            {PN.convertEnToPe(likeDislike === 'dislike' ? comment.diss_likes_count + 1 : comment.diss_likes_count)}
                        </Typography>
                        <DisLike color={likeDislike === 'dislike' ? 'primary' : 'gray'} sx={{cursor: 'pointer'}} fontSize={'10px'}/>
                    </Box>
                </Box>
            </Box>
            <Typography sx={{mt:1}} lineHeight={2.5} variant="subtitle1">{comment.content}</Typography>
        </Box>

    )
}
export default Comment;