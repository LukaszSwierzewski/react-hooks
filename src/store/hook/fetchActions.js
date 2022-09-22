
export const fetchInitialState = {
    persons: 'asd',
    loading: false
  };
  
  export const fetchActions = {
    'fetch/getPersons': async (state, payloads) => {
       return state.persons = payloads
    },
    logout: state => {
      return { user: { loggedIn: false } };
    }
  };