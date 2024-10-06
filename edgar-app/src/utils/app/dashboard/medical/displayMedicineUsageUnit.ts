import type { MedicineUnitType } from 'types/dashboard/medical/MedicineType';

const displayMedicineUsageUnit = (unit: MedicineUnitType): string => {
	const units: { [key: string]: string } = {
		CREME: 'application',
		POMMADE: 'application',
		GELULE: 'gélule',
		COMPRIME: 'comprimé',
		GELE: 'application',
		SOLUTION_BUVABLE: 'dose',
		POUDRE: 'sachet',
		SUPPOSITOIRE: 'suppositoire',
		AMPOULE: 'ampoule',
		SUSPENSION_NASALE: 'utilisation nasale',
		SPRAY: 'utilisation',
		COLLUTOIRE: 'utilisation',
		SHAMPOOING: 'application',
		SOLUTION_INJECTABLE: 'solution injectable',
		COMPRIMER_EFERVESCENT: 'comprimé effervescent',
		GRANULER_EN_SACHET: 'sachet',
		PASTILLE: 'pastille',
		SIROP: 'dose',
	};

	return units[unit];
};

export default displayMedicineUsageUnit;
