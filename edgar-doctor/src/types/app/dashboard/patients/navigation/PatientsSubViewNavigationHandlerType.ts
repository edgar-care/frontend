import type { PatientsSubViewNavigationTabType } from 'types/app/dashboard/patients/navigation/PatientsSubViewNavigationTabType';

export type PatientsSubViewNavigationHandlerType = {
	[key: string]: PatientsSubViewNavigationTabType & { content: JSX.Element };
};
