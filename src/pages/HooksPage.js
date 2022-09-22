import React, {useCallback} from "react";
import { useEffect } from "react";
import { useStore } from "../store/hook/useStore";
import useUsers from '../store/hook/useData'
const HooksPage = props => {
  const { state, dispatch } = useStore();
  const login = useCallback(() => dispatch({ type: "login" }), [dispatch]);
  const logout = useCallback(() => dispatch({ type: "logout" }), [dispatch]);
  const increment = useCallback(() => dispatch({type: 'incrementCount'}), [dispatch])
  const fetchPersons = useCallback(() => dispatch({type: 'fetch/getPersons'}), [dispatch])
  const { loggedIn } = state.user
  const { count } = state
  const [users] = useUsers()
  const handleClick = () => {
    loggedIn ? logout() : login();
    console.log(state)
  }
  const fetchPersonsData = async () => {
    const data = await fetch('https://swapi.dev/api/people/1/')
    const response = await data.json()
    dispatch({type: 'fetch/getPersons', payload: response})
  }
  useEffect(() => {
    fetchPersonsData()
  }, [])
  
  return (
    <div>
      {users.length > 0 && users[0].email}
      <br />
      <button onClick={handleClick}> {loggedIn ? "Logout" : "Login"}</button>
      <button onClick={increment}>Icrement count</button>
      <span>{loggedIn ? "logged in" : "logged out"}</span>
      <span>Counter: {count}</span>
      <br />
      {state.persons.name}
    </div>
  );
};

export default HooksPage;