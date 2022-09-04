import {useParams,useLocation} from "react-router-dom";

const Post = (props) => {
    let {category,id}=useParams();
    let location=useLocation();
    console.log(location);

    return (
        <>
            {/* <h1>Post Page - {props.match.params.category}</h1>
            <h1>Post Page - {props.match.params.id}</h1> */}

            <h1>Post Page - {props.match.params.category}</h1>
            <h1>Post Page - {id}</h1>
        </>
    )
}

export default Post;