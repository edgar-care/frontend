import type { MedicineUnitType } from 'types/dashboard/medical/MedicineType';

const displayMedicineUsageUnit = (unit: MedicineUnitType, plural: boolean = false): string => {
	const units: Record<MedicineUnitType, string> = {
		CREME: plural ? 'applications' : 'application',
		POMMADE: plural ? 'applications' : 'application',
		GELULE: plural ? 'gélules' : 'gélule',
		COMPRIME: plural ? 'comprimés' : 'comprimé',
		GELE: plural ? 'applications' : 'application',
		SOLUTION_BUVABLE: plural ? 'doses' : 'dose',
		POUDRE: plural ? 'sachets' : 'sachet',
		SUPPOSITOIRE: plural ? 'suppositoires' : 'suppositoire',
		AMPOULE: plural ? 'ampoules' : 'ampoule',
		SUSPENSION_NASALE: plural ? 'pulvérisations' : 'pulvérisation',
		SPRAY: plural ? 'pulvérisations' : 'pulvérisation',
		COLLUTOIRE: plural ? 'utilisations' : 'utilisation',
		SHAMPOOING: plural ? 'applications' : 'application',
		SOLUTION_INJECTABLE: plural ? 'doses' : 'dose',
		COMPRIMER_EFERVESCENT: plural ? 'comprimés effervescents' : 'comprimé effervescent',
		GRANULER_EN_SACHET: plural ? 'sachets' : 'sachet',
		PASTILLE: plural ? 'pastilles' : 'pastille',
		SIROP: plural ? 'doses' : 'dose',
	};

	return units[unit];
};

export default displayMedicineUsageUnit;
