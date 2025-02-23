import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {

    const post = useLoaderData();
    console.log(post);
    const {id, body, title} = post;

    const  {postId} = useParams();
    console.log(postId)

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1) //-1 use beacous one step back to postDetails navigate(-1) Go back  (1)// Go forward
        
    }

    return (
        <div>
                <h1>Post About Detaisl: {id}</h1> 
                <h2>post Details: {body}</h2>     
                <p>{title}</p>  
                <button className="cursor-pointer" onClick={handleGoBack}>Go back</button>     
        </div>
    );
};

export default PostDetails;