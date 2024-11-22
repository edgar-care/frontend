export type MedicineUnitType =
	| 'CREME'
	| 'POMMADE'
	| 'GELULE'
	| 'COMPRIME'
	| 'GELE'
	| 'SOLUTION_BUVABLE'
	| 'POUDRE'
	| 'SUPPOSITOIRE'
	| 'AMPOULE'
	| 'SUSPENSION_NASALE'
	| 'SPRAY'
	| 'COLLUTOIRE'
	| 'SHAMPOOING'
	| 'SOLUTION_INJECTABLE'
	| 'COMPRIMER_EFERVESCENT'
	| 'GRANULER_EN_SACHET'
	| 'PASTILLE'
	| 'SIROP'
	| 'COMPRIME_ENROBE'
	| 'COMPRIME_ORODISPERSIBLE'
	| 'SOLUTION_INHALATION'
	| 'COMPRIME_PELLICULE'
	| 'CAPSULE_MOLLE';

export type MedicineDosageUnitType = 'mg' | 'g' | 'ml';

export type MedicineContainerType = 'BOITE' | 'FLACON' | 'TUBE' | 'AMPOULE';

export type MedicineType = {
	id: string;
	dci: string;
	dosage: number;
	dosageUnit: MedicineDosageUnitType;
	dosageForm: MedicineUnitType;
	container: MedicineContainerType;
	name: string;
};
