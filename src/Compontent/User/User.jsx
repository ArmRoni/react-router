import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const User = ({user}) => {
    const {id, name, email, phone} = user;
    const userStyle = {
        border: "2px solid yellow",
        padding: "10px",
        borderRadius:"20px",
        textAlign:'center'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <Link to={`/user/${id}`}  > Show Details</Link>
        </div>
    );
};
User.propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.number.isRequired,
    }).isRequired,
  };
  

export default User;