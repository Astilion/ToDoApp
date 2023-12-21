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
        <div className="m-3">
          <button
            onClick={switchAuthHandler}
            className=" rounded-lg bg-sky-700 px-3 py-1 font-bold text-white transition-colors hover:bg-sky-500 sm:ml-2"
            type="button"
          >
            {isLogin ? "Create new user" : "Login"}
          </button>
          <button className=" rounded-lg bg-sky-700 px-3 py-1 font-bold text-white transition-colors hover:bg-sky-500 sm:ml-2">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AuthForm;
