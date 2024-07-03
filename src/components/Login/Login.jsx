import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const {signInUser,googleSignIn} = useContext(AuthContext);
  const navigate=useNavigate();

  const handleUserSignIn=(e)=>{
      e.preventDefault();
      const email=e.target.email.value;
      const password=e.target.password.value;
      signInUser(email,password).then(res=>{
        console.log(res.user);
        e.target.reset();
        navigate('/');
      }).catch(err=>{
        console.log(err.message)
      })
  }

  const handleGoogleSignIn=()=>{
    googleSignIn().then(res=>{
      console.log(res.user);
    }).catch(err=>{
      console.log(err.message)
    })
  }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content ">
    
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleUserSignIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className= "btn btn-primary">Login</button>
              </div>
              <div>
                <p>New User ?  <Link to='/register' style={{textDecoration:'underline',color:'blue'}}>Register Now</Link> </p>
              </div>
            </form>
            <div className="flex justify-between gap-8 mb-4 mx-4">
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-warning" style={{display:'flex',alignItems:'center',columnGap:'10px'}}><FaGoogle />Google SignIn</button>
                <button className="btn btn-outline btn-primary" style={{display:'flex',alignItems:'center',columnGap:'10px'}}><FaGithub />Github SignIn</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;