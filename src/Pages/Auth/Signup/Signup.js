import React, { useEffect, useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import '../../Auth/Login/Login.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPass: "",
    })
    const [errors, SetErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [user] = useAuthState(auth)
    const [
        createUserWithEmailAndPassword,
        ,
        loading,
        hookError,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

      const [signInWithGoogle, googleUser, loading2, googleError]=useSignInWithGoogle(auth);


    const handleEmailChange = (e)=> {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(e.target.value);
        if(validEmail){
            setUserInfo({...userInfo, email: e.target.value})
            SetErrors({...errors, email:""})
        } else{
            SetErrors({...errors, email:"Invalid email"})
            setUserInfo({...userInfo, email:""})
        }
    }
    const handlePasswordChange = (e)=>{
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(e.target.value);
        if (validPassword){
            setUserInfo({...userInfo, password: e.target.value});
            SetErrors({...errors, password:""})
        } else{
            SetErrors({...errors, password:"Minimum 6 characters"});
            setUserInfo({...userInfo, password:""})
        }
        
    }
    const handleConfirmPasswordChange = (e)=>{
        if (e.target.value === userInfo.password){
            setUserInfo({...userInfo,confirmPass: e.target.value});
            SetErrors({...errors, password:""})
        } else{
            SetErrors({...errors, password:"password don't match"});
            setUserInfo({...userInfo, confirmPass:""})
        }
        
    }

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log(userInfo);
        createUserWithEmailAndPassword(userInfo.email,userInfo.password)
    }

    useEffect(()=>{
        const error = hookError || googleError;
        if(hookError){
            switch(error?.code){
                case "auth/invalid-email":
                    toast('Invalid email provided, please provide a valid email')
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Please provide a right password.")
                    break
                case "auth/popup-closed-by-user":
                        toast( "The popup has been closed by the user before finalizing the operation.")
                        break
                    default:
                        toast("something went wrong")
            }
        }
    },[hookError, googleError])

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

   useEffect(()=>{
    if(user){
        navigate(from,{replace:true})
    }
   },[from, navigate, user])

   const handleGoogleSignIn = () =>{
    signInWithGoogle();
    // navigate("/")
}

    return (

        <div className='login-container'>
            <div className='login-title'>SIGNUP</div>
            <form className='login-form' onSubmit={handleLogin}>
                <input type="text" placeholder='Your Email' onChange={handleEmailChange} />
                {errors?.email && <p className='error-message'>{errors.email}</p>}
                <input type="password" placeholder='password' onChange={handlePasswordChange}/>
                {errors?.password && <p className='error-message'>{errors.password}</p>}
                <input type="password" placeholder='confirm password' onChange={handleConfirmPasswordChange}/>
                <button>SignUp</button>

                <p className='text-center mt-3'>Already have and account ? <Link to="/login" className='sign-link fw-bold pe-auto text-decoration-none'>SignIn</Link></p>

                <ToastContainer></ToastContainer>
            </form>
            <button onClick={handleGoogleSignIn}>Google SignIn</button>
        </div>
    );
};

export default Signup;