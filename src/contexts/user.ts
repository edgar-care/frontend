import { createContext, Dispatch, SetStateAction, useContext } from 'react';

import { PatientInfos } from 'types/PatientInfos';

type PatientContextType =
	| undefined
	| { infos: PatientInfos | undefined; setInfos: Dispatch<SetStateAction<PatientInfos | undefined>> };

const PatientContext = createContext<PatientContextType>(undefined);

const usePatientContext = (): {
	infos: PatientInfos | undefined;
	setInfos: Dispatch<SetStateAction<PatientInfos | undefined>>;
} => {
	const context = useContext(PatientContext);
	if (!context) throw new Error('context used outside of provider.');
	return context;
};

export type { PatientContextType };
export { usePatientContext };
export default PatientContext;
