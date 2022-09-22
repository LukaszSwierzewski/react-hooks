
export const fetchInitialState = {
    persons: [],
    loading: false,
    morePersons: []
  };
  
  export const fetchActions = {
    'fetch/getPersons': (state, payload) => {
       return {persons: payload}
    },
    logout: state => {
      return { user: { loggedIn: false } };
    },
    'fetch/morePersons': (state, payload) => {
        return {morePersons: payload}
    },
    'fetch/loading': (state) => {
        return {loading: !state.loading }
    }
  };