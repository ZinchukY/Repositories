const Post = ({post}) => {

    return (
        <div>
            <div>{post.name} -- {post.body}</div>
        </div>
    )
}
export {Post};