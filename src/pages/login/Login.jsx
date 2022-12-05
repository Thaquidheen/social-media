import { Link } from 'react-router-dom';
import './Login.scss';

export const Login = () => {
  return (
    <div className='login' >
      <div className="card">
        <div className="left">
         <h1>HELLO WORLD.</h1>
         <p>Lorem,. Cupiditate inventore illo blanditiis, iure vero dignissimos quos voluptates hic minima consectetur libero reprehenderit, optio porro? Fugit aperiam alias harum inventore sequi.</p>
         <span>Don't you have an account ?</span>
         <Link to='/register'>
         <button>Register</button>
         </Link>

        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder="Username" />
              <input type="password" placeholder='Password' />
              <button>Login</button>
            </form>
            </div>
      </div>

    </div>
  )
}
