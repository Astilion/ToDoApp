import { useState } from "react";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthHandler() {
    setIsLogin((isCurrentlyLogin) => !isCurrentlyLogin);
  }

  return (
    <div className="flex items-center justify-center bg-slate-200 dark:bg-gray-600">
      <form method="post" className="flex flex-col">
        <h2 className="py-4 text-3xl font-semibold">
          {isLogin ? "Log in" : "Create a new user"}
        </h2>
        <input
          className="p-1/2 mb-1 h-auto text-xl"
          type="text"
          name="username"
          placeholder="Email Address"
          required
        />
        <input
          type="password"
          className="p-1/2 mb-1 h-auto text-xl"
          name="password"
          placeholder="Password"
          required
        />
        <div>
          <button onClick={switchAuthHandler} type="button">
            {isLogin ? "Create new user" : "Login"}
          </button>
          <button>Save</button>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
