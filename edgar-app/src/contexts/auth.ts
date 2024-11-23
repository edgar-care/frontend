import { createContext, type Dispatch, type SetStateAction, useContext } from 'react';

import Auth from 'libs/auth';

import type { AvailableMethod, Login2FADevice } from 'types/login-2fa/Login2FAResponse';

type AuthContextType =
	| {
			auth: Auth;
			availableMethods: AvailableMethod[];
			setAvailableMethods: Dispatch<SetStateAction<AvailableMethod[]>>;
			deviceInfos: Login2FADevice | undefined;
			setDeviceInfos: Dispatch<SetStateAction<Login2FADevice | undefined>>;
			email: string;
			setEmail: Dispatch<SetStateAction<string>>;
			password: string;
			setPassword: Dispatch<SetStateAction<string>>;
	  }
	| undefined;

const AuthContext = createContext<AuthContextType>(undefined);

const useAuthContext = () => {
	const context = useContext(AuthContext);
	if (!context) throw new Error('context used outside of provider.');
	return context;
};

export type { AuthContextType };
export { useAuthContext };
export default AuthContext;
