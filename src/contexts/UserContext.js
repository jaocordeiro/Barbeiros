import React, {createContext, useReducer} from 'react';
import {initialState, userReducer} from '../reducers/UserReducer';

export const UserContext = createContext();

export default ({children}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  console.log(children);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};
