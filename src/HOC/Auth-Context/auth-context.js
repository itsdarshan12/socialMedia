import React, { useState } from 'react';

export const AuthContext = React.createContext({
    isAuthenticated: false,
    login: () => { }
});


const AuthProvider = (props) => {
    const [getIsAuthenticated, setIsAuthenticated] = useState(false);
    const [getUserName, setUserName] = useState("");

    const fnLoginHandler = () => {
        setIsAuthenticated(true);
    };

    const fnLogOutHandler = () => {
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated: getIsAuthenticated,
            login: fnLoginHandler,
            logout: fnLogOutHandler
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;