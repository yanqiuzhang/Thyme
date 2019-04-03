import React from 'react';

const LoginForm = (props) => {
  return (
    <form>
      <div>
        <label>Username</label>
        <input id="username" type="name" onChange={props.inputChangeHandler}></input>
      </div>

      <div>
        <label>Password</label>
        <input id="password" type="password" onChange={props.inputChangeHandler}></input>
      </div>
      <button onClick={(e) => props.loginHandler(e)} id="submit">Submit</button>
    </form>
  )
}

export default LoginForm;