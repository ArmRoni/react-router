import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const  Home = () => {
    const navigation = useNavigate();
    const location = useLocation();
    console.log(location)
    return (
        <div>
             <Header></Header>
             {
                navigation.state === "loading" ? <p>loading ...</p> :  <Outlet></Outlet>
             }
            
            <Footer></Footer>
        </div>
    );
};

export default  Home;