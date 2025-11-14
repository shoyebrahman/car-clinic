import React, { useContext } from 'react'
import login from "../../../public/asset/images/login/login.svg"
import { Link } from 'react-router-dom'
import { AuthContext } from '../../provider/Authprovider'
import { updateProfile } from "firebase/auth";


 export const Signup = () => {

  const {createUser} = useContext(AuthContext)
    const handleSignup = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)

        createUser(email, password)
  .then(result => {
    const user = result.user;
    console.log(user);

    // update display name
    updateProfile(user, {
      displayName: name
    }).then(() => {
      console.log("Name updated!");
    }).catch(err => console.log(err));
  })
  .catch(error => console.log(error));

    }
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
     
      <img src={login} alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-5xl font-bold">SignUp now!</h1>
      <form onSubmit={handleSignup}>
        <div className='from-control'>
              
          <label className="label">Name</label>
          <input type="text" name='name'  className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          
          <input type="submit" className="btn btn-primary" value="Login" />
        
        </div>
      </form>
      <p className='my-4 text-center'>Already Have a Account? <Link className='text-orange-600 font-bold' to="/Login">Sign In</Link></p>
      </div>
    </div>
  </div>
</div>
  )
}


export default Signup;
