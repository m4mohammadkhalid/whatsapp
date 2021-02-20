import Link from 'next/link'
import {useState, useEffect} from 'react'
import {signup,isAuth} from '../actions/auth'
import Router from 'next/router'
const SignUpComponent=()=>{
  const [values, setValues]=useState({
      name:'khalid4',
      email:'khaild499@gmail.com',
      mobile:'9102603030',
      password:'fuckubby',
      error:'',
      loading:false,
      message:'',
      showForm:true
  })
  const {name,email,mobile,password,error,loading,message,showForm}=values;
  useEffect(()=>{
    isAuth() && Router.push(`/`);
  },[]);

    const handleSubmit=(e)=>{
        e.preventDefault()
       // console.table({name,email,mobile,password,error,loading,message,showForm})
        setValues({...values,loading:true,error:false})
        const user={name,email,mobile,password}
        signup(user).then(data=>{
          if(data.error){
              setValues({...values,error:data.error,loading:false})
          }else{
            setValues({...values,name:'',email:'',mobile:'',password:'',error:'',loading:false,message:data.message,showForm:false})
          }
        })
      }

    const handleChange=name=>e=>{
        setValues({...values,error:false,[name]:e.target.value})
    }

    const showLoading=()=>(loading ? <div className="alert alert-info">loading...</div>:'')
  const showError=()=>(error ? <div className="alert alert-info">{error}</div>:'')
  const showMessage=()=>(message ? <div className="alert alert-info">{message}</div>:'')



        const SignUpFrom=()=>{
            return(

                <form onSubmit={handleSubmit} className="signup-form">
                <label className="login-page_label">
                  <input value={name} onChange={handleChange('name')} className="login-page_input" type="text" name="name" autoComplete="off" />
                  <span className="login-page_placeholder">Name</span>
                </label>
                <label className="login-page_label">
                  <input value={email} onChange={handleChange('email')} className="login-page_input" type="email" name="email" autoComplete="off" />
                  <span className="login-page_placeholder">Email</span>
                </label>
                <label className="login-page_label">
                  <input value={mobile} onChange={handleChange('mobile')} className="login-page_input" type="number" name="mobile" autoComplete="off" />
                  <span className="login-page_placeholder">Number</span>
                </label>
                <label className="login-page_label">
                  <input value={password} onChange={handleChange('password')} className="login-page_input" type="text" name="password" />
                  <span className="login-page_placeholder">Password</span>
                </label>
                <div className="signup-section_submit">
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
                    <input type="submit" name="submit-signup" defaultValue="submit" />
                  </div>
                </div>
              </form>
            )
        }

        return(
          <>
            {showMessage()}
            {showLoading()}
            {showError()}
            { showForm && SignUpFrom()}
          
          </>
    )
}

export default SignUpComponent;
