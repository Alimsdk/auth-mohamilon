import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

 

const Home = () => {
    const userInfo=useContext(AuthContext);
    console.log(userInfo)
    return (
        <div>
            <h3>I am from Home</h3>
        </div>
    );
};

export default Home;