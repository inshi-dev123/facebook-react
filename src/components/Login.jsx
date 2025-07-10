import { useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="logindetails">
        <input className="login" type="text" placeholder="Email address or phone number" />
        <br />
        <input className="login" type="password" placeholder="Password" />
        <br />
        <button className="loginbtn">Log in</button>
        <br />
        <a href="" className="forgot">Forgotten Password?</a>
        <hr />
        <button className="createbtn" onClick={() => navigate('/signup')} >Create new account</button>
      </div>
    </>
  );
}

export default Login;
