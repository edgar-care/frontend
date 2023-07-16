'use client';

import { useState } from 'react';

import PatientContext from 'contexts/user';

import { PatientInfos } from 'types/PatientInfos';

// TODO: need to clean after simulation flow refactor
const PatientProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
	const [patientInfos, setPatientInfos] = useState<PatientInfos | undefined>(undefined);

	return (
		<PatientContext.Provider value={{ infos: patientInfos, setInfos: setPatientInfos }}>
			{children}
		</PatientContext.Provider>
	);
};

export default PatientProvider;
