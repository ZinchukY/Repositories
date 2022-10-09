import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {LOAD_POSTS} from "../../redux/actions/actions";
import {User} from "../user/User";
import {postsService} from "../../services/posts.service";
import {Post} from "../post/Post";

const Posts = () => {

    const {posts} = useSelector(state => state.postsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        postsService.getAll().then(({data}) => dispatch({type: LOAD_POSTS, payload: data}))
    }, [])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    )
}
export {Posts};