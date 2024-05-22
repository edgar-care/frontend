export type MedicineUnitType = 'APPLICATION' | 'TABLET' | 'TABLESPOON' | 'COFFEESPOON';

export type MedicineType = {
	id: string;
	name: string;
	unit: MedicineUnitType;
};
