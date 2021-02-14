import { createContext } from "react";

export const userContext = createContext({
    firstname: "",
    setFirstname: () => { },
    lastname: "",
    setLastname: () => { },
    email: "",
    setEmail: () => { },
    password: "",
    setPassword: () => { },
    repeatPass: "",
    setRepeatPass: () => { },
    policy: "",
    setPolicy: () => { },
    handleLogin: () => { },
    handleRegister: () => { },
    validator: null
})
