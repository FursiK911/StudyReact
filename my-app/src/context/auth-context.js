import React from 'react';


//Контексты очень хороший вариант если нужно передавать данные 
//по цепочке от объекта A до объекта D
const authContext = React.createContext({  
    authenticated: false,
    login: () => {},
});

export default authContext;