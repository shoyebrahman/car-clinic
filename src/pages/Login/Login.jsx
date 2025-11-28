//import React, { useContext } from 'react'
import login from "../../../public/asset/images/login/login.svg"
import { Link, useLocation, useNavigate } from 'react-router-dom'
//import { AuthContext } from '../../provider/Authprovider'
import axios from 'axios'
import { useAuth } from "../../Hooks/useAuth"

export const Login = () => {

  //const {signIn} = useContext(AuthContext)
  const {signIn} = useAuth();
  const location = useLocation();
  const navigate = useNavigate()

    const handlelogin = event => {
        event.preventDefault()

         const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result => {
          const loggedInUser = result.user;
          console.log(loggedInUser)
          const user = { email }
         // navigate(location?.state ? location?.state : '/')
         //get access token
         axios.post('https://car-clinic-server-mu.vercel.app/jwt', user, {
          withCredentials: true
         })
         .then(res =>{
          console.log(res.data)
          if(res.data.success) {
             navigate(location?.state ? location?.state : '/')
          }
         })
        })
        .catch(error => console.log(error))
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
     
      <img src={login} alt="" />
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Login now!</h1>
      <form onSubmit={handlelogin}>
        <div className='from-control'>
              
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          
          <input type="submit" className="btn btn-primary" value="Login" />
        
        </div>
      </form>
      <p className='my-4 text-center'>New in Car Clinic? <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link></p>
      </div>
    </div>
  </div>
</div>
  )
}
