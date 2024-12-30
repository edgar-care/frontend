import type { PrescriptionTimeUnitType } from 'types/dashboard/treatments/TreatmentType';

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
