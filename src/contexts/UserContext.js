import React, {createContext, useReducer} from 'react';

export const UserContext = createContext();

export default ({children}) => {
  return (<UserContext.Provider>{children}</UserContext.Provider>);
};
