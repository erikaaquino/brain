import React, { useState } from "react";
// import './SignIn.css';

function SignIn({onRouteChange,loadUser}) {
 const [signInEmail,setSignInEmail]=useState('');
 const [signInPassword,setSignInPassword]=useState('');
 
 const onEmailChange=(event)=>{
  setSignInEmail(event.target.value);
 }

 const onPasswordChange=(event)=>{
  setSignInPassword(event.target.value);
 }
const onSubmitSignIn=(event)=>{
  event.preventDefault();//esto es para que no se recargue la pagina 
  fetch('https://nameless-island-50939.herokuapp.com/signin',{
    method: 'post',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      email: signInEmail,
      password:signInPassword
    })
  })
  .then(response=>{
    return response.json()
  })
  .then(user=>{
    console.log(user);
    if(user.id){
      onRouteChange('home');
      loadUser(user);
    }
  })
   

}
  return (
    <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={onEmailChange}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={onPasswordChange}
              />
            </div>
          </fieldset>
          <div className="">
            <input
            onClick={onSubmitSignIn}
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit" //este type hace que se recargue de nuevo en la pag y por eso en onSubmitSignIn agg algo 
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3">
            <p onClick={()=> onRouteChange("Register")} className="f6 link dim black db pointer">
              Register
            </p>
          </div>
        </form>
      </main>
    </article>
  );
}
export default SignIn;
