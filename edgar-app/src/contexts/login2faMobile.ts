import { createContext, useContext } from 'react';

import Login2faMobile from 'libs/login2faMobile';

type Login2faMobileContextType = { response: boolean | undefined; code: string; actions: Login2faMobile } | undefined;

const Login2faMobileContext = createContext<Login2faMobileContextType>(undefined);

const useLogin2faMobileContext = () => {
	const context = useContext(Login2faMobileContext);
	if (!context) throw new Error('Context used outside of provider.');
	return context;
};

export type { Login2faMobileContextType };
export { useLogin2faMobileContext };
export default Login2faMobileContext;
