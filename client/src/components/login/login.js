import { useState } from 'react'

const Login = ({ onSumit }) => {
   const [user, setUser] = useState('')
   const [pass, setPass] = useState('')

   const onLogin = () => {
      onSumit({ user, pass })
      setUser('')
      setPass('')
   }

   return (
      <div data-testid='login-1' className='container'>
         <form>
            <h3 className='center-align'>Login</h3>
            <input
               className='input'
               type='text'
               data-testid='login-username'
               name='userName'
               placeholder='Username'
               value={user}
               onChange={(e) => setUser(e.target.value)}
            ></input>
            <input
               className='input'
               type='password'
               data-testid='login-password'
               name='password'
               placeholder='Password'
               value={pass}
               onChange={(e) => setPass(e.target.value)}
            ></input>
            <button data-testid='login-button' className='input btn-login' onClick={onLogin}>
               Login
            </button>
         </form>
      </div>
   )
}

export default Login
