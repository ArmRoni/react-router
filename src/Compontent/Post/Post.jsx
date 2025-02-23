import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
  const {id, title } = post;

  const psotStyle = {
        border: "2px solid yellow",
        padding: "10px",
        borderRadius:"20px",
        textAlign:'center'
    }
    const navigate = useNavigate();// useNavigate hook in use  
    const handleShowDetail = () => {
        navigate(`/post/${id}`);
    }
    return (
        <div style={psotStyle}>
                <h4>Poar of Id: {id}</h4>
                <p>{title}</p>
                <Link to={`/post/${id}`}>Post Details</Link> 
                <br />
                {/* dynamic post link */}
                <button className="cursor-pointer" onClick={handleShowDetail}>Click to see details</button>
        </div>
    );
};

export default Post;