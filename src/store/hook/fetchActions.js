
export const fetchInitialState = {
    persons: [],
    loading: false,
    morePersons: []
  };
  
  export const fetchActions = {
    'fetch/getPersons': (state, payloads) => {
       return state.persons = payloads
    },
    logout: state => {
      return { user: { loggedIn: false } };
    },
    'fetch/morePersons': (state, payload) => {
        return state.morePersons = payload
    }
  };