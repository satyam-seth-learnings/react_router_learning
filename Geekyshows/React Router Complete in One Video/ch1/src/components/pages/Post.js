const Post = (props) => {
    return (
        <>
            <h1>Post Page - {props.match.params.category}</h1>
            <h1>Post Page - {props.match.params.id}</h1>
        </>
    )
}

export default Post;