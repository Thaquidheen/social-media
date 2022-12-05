import { Link } from 'react-router-dom';
import './Register.scss';

export const Register = () => {
  return (
    <div className="Register">
      <div className="card">
        <div className="left">
         <h1>Register</h1>
         <form>
          <input type='text'  placeholder='Username' />
          <input type="email" placeholder='Email' />
          <input type="password"  placeholder='password' />
          <input type="text"  placeholder='Name' />

          <button>Register</button>
         </form>
        </div>
        <div className="right">
         <h1>Lorem ipsum</h1>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum repellendus laboriosam quis amet eum, beatae deleniti recusandae, illum modi nisi exercitationem dolore dolor minima pariatur ratione debitis enim natus quo.</p>
         <span>Do you have an account ?</span>
         <Link  to='/login'>
         <button>Login</button>
         </Link>
         
        </div>
      </div>
    </div>
  )
}
