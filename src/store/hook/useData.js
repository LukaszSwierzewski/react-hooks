import {useState, useEffect} from 'react'
import { useStore } from './useStore';
const useUsers = () => {
      const [users, usersSet] = useState([]);
      const { state, dispatch } = useStore();
      const { morePersons } = state
      useEffect(() => {
        async function fetchUsers() {
          if(morePersons.length > 0) return usersSet(morePersons)
          const fullResponse = await fetch('https://reqres.in/api/users');
          const responseJson = await fullResponse.json();
          usersSet(responseJson.data);
          dispatch({type: 'fetch/morePersons', payload: responseJson.data})
        }

    fetchUsers();
  }, [dispatch, morePersons]);
      return [users];
};
export default useUsers