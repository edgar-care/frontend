import type { MedicineUnitType } from 'types/app/dashboard/diagnostics/MedicineType';

const displayMedicineUnit = (unit: MedicineUnitType): string => {
	const units: { [key: string]: string } = {
		CREME: 'Crème',
		POMMADE: 'Pommade',
		GELULE: 'Gélule',
		COMPRIME: 'Comprimé',
		GELE: 'Gel',
		SOLUTION_BUVABLE: 'Solution buvable',
		POUDRE: 'Poudre',
		SUPPOSITOIRE: 'Suppositoire',
		AMPOULE: 'Ampoule',
		SUSPENSION_NASALE: 'Suspension nasale',
		SPRAY: 'Spray',
		COLLUTOIRE: 'Collutoire',
		SHAMPOOING: 'Shampooing',
		SOLUTION_INJECTABLE: 'Solution injectable',
		COMPRIMER_EFERVESCENT: 'Comprimé effervescent',
		GRANULER_EN_SACHET: 'Granulé en sachet',
		PASTILLE: 'Pastille',
		SIROP: 'Sirop',
	};

	return units[unit];
};

export default displayMedicineUnit;
