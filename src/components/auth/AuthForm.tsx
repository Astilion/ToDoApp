import { useState } from 'react';
import { Form } from 'react-router-dom';


function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthHandler() {
    setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  }

  return (
    <div className='flex  justify-center  items-center bg-slate-200 dark:bg-gray-600'>
      <form method="post">
        <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div>
          <button onClick={switchAuthHandler} type="button">
            {isLogin ? 'Create new user' : 'Login'}
          </button>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
