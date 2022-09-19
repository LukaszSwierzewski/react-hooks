import React, {useCallback} from "react";
import { useStore } from "../store/hook/useStore";

const HooksPage = props => {
  const { state, dispatch } = useStore();
  const login = useCallback(() => dispatch({ type: "login" }), [dispatch]);
  const logout = useCallback(() => dispatch({ type: "logout" }), [dispatch]);
  const increment = useCallback(() => dispatch({type: 'incrementCount'}), [dispatch])
  const { loggedIn } = state.user
  const { count } = state
  const handleClick = () => {
    console.log(loggedIn)
    loggedIn ? logout() : login();
  }

  return (
    <div>
        {count}
      <button onClick={handleClick}> {loggedIn ? "Logout" : "Login"}</button>
      <button onClick={increment}>Icrement count</button>
      <span>{state.user.loggedIn ? "logged in" : "logged out"}</span>
      <span>Counter: {state.count}</span>
    </div>
  );
};

export default HooksPage;