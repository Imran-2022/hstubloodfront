import React, { createContext, useState } from 'react';
export const userContext=createContext()

const Context = ({children}) => {
    const [loginUser,setLoginUser]=useState({name:"imran"})
    return (
        <userContext.Provider value={[loginUser,setLoginUser]}>
            {children}
        </userContext.Provider>
    );
};

export default Context;