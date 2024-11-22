import { PrescriptionTimeUnitType } from 'types/app/dashboard/patients/prescriptions/PrescriptionTimeUnitType';

const displayTimeUnit = (unit: PrescriptionTimeUnitType, plural: boolean = false): string => {
	const units: Record<PrescriptionTimeUnitType, string> = {
		JOUR: plural ? 'jours' : 'jour',
		SEMAINE: plural ? 'semaines' : 'semaine',
		MOIS: 'mois',
		ANNEE: plural ? 'années' : 'année',
	};

	return units[unit];
};

export default displayTimeUnit;
