import { type MedicineUnitType } from 'types/app/dashboard/diagnostics/MedicineType';

const displayMedicineUnit = (unit: MedicineUnitType): string => {
	const units: { [key: string]: string } = {
		APPLICATION: 'application',
		TABLET: 'comprimé',
		TABLESPOON: 'cuillère à soupe',
		COFFEESPOON: 'cuillère à café',
	};

	return units[unit];
};

export default displayMedicineUnit;
