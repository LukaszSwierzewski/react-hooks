
export const userInitialState = {
    user: {
      loggedIn: false
    }
  };
  
  export const userActions = {
    login: state => {
      return { user: { loggedIn: true } };
    },
    logout: state => {
      return { user: { loggedIn: false } };
    }
  };