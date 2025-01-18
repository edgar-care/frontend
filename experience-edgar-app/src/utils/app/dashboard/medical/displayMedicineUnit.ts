import type { MedicineUnitType } from 'types/dashboard/medical/MedicineType';

const displayMedicineUnit = (unit: MedicineUnitType): string => {
	const units: Record<MedicineUnitType, string> = {
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
		CAPSULE_MOLLE: 'Capsule molle',
		COMPRIME_ENROBE: 'Comprimé enrobé',
		COMPRIME_ORODISPERSIBLE: 'Comprimé orodispersible',
		COMPRIME_PELLICULE: 'Comprimé pelliculé',
		SOLUTION_INHALATION: 'Solution pour inhalation',
	};

	return units[unit];
};

export default displayMedicineUnit;
