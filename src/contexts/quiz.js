import {createContext} from "react";


export const Quizcontext = createContext();

export const Quizprovider = ({children}) => {
    return <Quizcontext.Provider value="hello" >{children}</Quizcontext.Provider>;
}



