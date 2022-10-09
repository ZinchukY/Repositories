import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {LOAD_COMMENTS} from "../../redux/actions/actions";
import {commentsService} from "../../services/comments.service";
import {Comment} from "../comment/Comment";

const Comments = () => {

    const {comments} = useSelector(state => state.commentsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        commentsService.getAll().then(({data}) => dispatch({type: LOAD_COMMENTS, payload: data}))
    },[])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    )
}
export {Comments};