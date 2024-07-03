import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";

const Register = () => {
  const {createNewUser,googleSignIn}= useContext(AuthContext);
  const navigate=useNavigate();
  const handleUserRegistration=(e)=>{
    e.preventDefault();
       const name=e.target.name.value;
       const email=e.target.email.value;
       const password=e.target.password.value;
      
       createNewUser(email,password).then(res=>{
        console.log(res.user);
        e.target.reset();
        navigate('/');
       }).catch(err=>{
        console.log(err.message)
       })

       console.log({name,email,password})
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
            <form onSubmit={handleUserRegistration} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
              <div>
                <p>Already Registered ?  <Link to='/login' style={{textDecoration:'underline',color:'blue'}}>Login Now</Link> </p>
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

export default Register;