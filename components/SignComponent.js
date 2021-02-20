import Link from 'next/link'
import {signin,authenticate,isAuth} from '../actions/auth'
import {useState, useEffect} from 'react'
import Router from 'next/router';

const SigninComponent=()=>{
  const [values, setValues]=useState({
    email:'khaild499@gmail.com',
    password:'fuckubby',
    error:'',
    loading:false,
    message:'',
    showForm:true
})

const {email,password,error,loading,message,showForm}=values;

    useEffect(()=>{
      isAuth() && Router.push(`/`);
    },[]);

const handleSubmit=(e)=>{
      e.preventDefault()
     // console.table({name,email,mobile,password,error,loading,message,showForm})
      setValues({...values,loading:true,error:false})
      const user={email,password}
      signin(user).then(data=>{
        if(data.error){
            setValues({...values,error:data.error,loading:false})
        }else{
          authenticate(data,()=>{
            if(isAuth() && isAuth().role == 1){
              Router.push('/backend/admin')
            }else{
              Router.push('/backend/user')
            }
          })
          
        }
      })
    }

  const handleChange=name=>e=>{
      setValues({...values,error:false,[name]:e.target.value})
  }

  const showLoading=()=>(loading ? <div className="alert alert-info">loading...</div>:'')
const showError=()=>(error ? <div className="alert alert-info">{error}</div>:'')
const showMessage=()=>(message ? <div className="alert alert-info">{message}</div>:'')



    const SigninForm =()=>{
            
        return(
            <form onSubmit={handleSubmit} className="login-form">
            <label className="login-page_label">
              <input onChange={handleChange} className="login-page_input" type="email" name="email" autoComplete="off" />
              <span className="login-page_placeholder">Email</span>
            </label>
            <label className="login-page_label">
              <input onChange={handleChange} className="login-page_input" type="password" name="password" />
              <span className="login-page_placeholder">Password</span>
            </label>
            <div className="login-section_submit">
              <ul>
                <li>
                  <Link href="#">
                    <a target="_blank"><i className="fa fa-facebook fa-fw" /></a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a target="_blank"><i className="fa fa-twitter fa-fw" /></a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a target="_blank"><i className="fa fa-google fa-fw" /></a>
                  </Link>
                </li>
              </ul>
              <div className="login-page-submit-btn">
                <input type="submit" name="submit-login" defaultValue="submit" />
              </div>
            </div>
            <div className="login-page_forget">
              <Link href="#">
                <a>Forget Your Password ?</a>
              </Link>
            </div>
          </form>
            )
    }

    return(
      <>
            {showMessage()}
            {showLoading()}
            {showError()}
            {showForm && SigninForm()}
          
          </>
  
    )
};

export default SigninComponent;