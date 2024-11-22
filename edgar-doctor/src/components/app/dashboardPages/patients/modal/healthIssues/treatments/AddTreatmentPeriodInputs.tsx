import { HStack, Input, Select, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import { useGetMedicineByIdQuery } from 'services/request/medicines';

import AddTreatmentButton from 'components/app/dashboardPages/patients/modal/healthIssues/treatments/AddTreatmentButton';

import displayMedicineUsageUnit from 'utils/app/dashboard/diagnostic/displayMedicineUsageUnit';

import type { TreatmentMedicinesType, TreatmentType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';

import CrossIcon from 'assets/icons/CrossIcon';
import ClockIcon from 'assets/icons/ClockIcon';

const DisplayMedicineDosageForm = ({
	medicine,
	periodIndex,
}: {
	medicine: TreatmentMedicinesType | undefined;
	periodIndex: number;
}): JSX.Element => {
	const { data: medicineInfo } = useGetMedicineByIdQuery(medicine?.medicineId ?? '');

	if (!medicineInfo || !medicine) return <></>;

	return <Text>{displayMedicineUsageUnit(medicineInfo.dosageForm, medicine.periods[periodIndex].quantity > 1)}</Text>;
};

const AddTreatmentPeriodInputs = ({
	treatmentMedicine,
	periodIndex,
	control,
}: {
	treatmentMedicine: TreatmentMedicinesType;
	periodIndex: number;
	control: Control<TreatmentType>;
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, sm: false });

	return (
		<Controller
			control={control}
			rules={{ required: true }}
			name="medicines"
			render={({ field: { value, onChange } }) => (
				<VStack align="start">
					<VStack align="start">
						<Stack direction={{ base: 'column', sm2: 'row' }} spacing="12px">
							<HStack spacing="4px">
								<Input
									type="number"
									placeholder="1"
									w="30px"
									variant="noStyle"
									borderBottom="2px solid"
									borderColor="blue.500"
									value={
										value.find((v) => v.medicineId === treatmentMedicine.medicineId)?.periods[
											periodIndex
										].quantity
									}
									onChange={(e) =>
										onChange(
											value.map((v) =>
												v.medicineId !== treatmentMedicine.medicineId
													? v
													: {
															...v,
															periods: v.periods.map((period, index) =>
																index !== periodIndex
																	? period
																	: {
																			...period,
																			quantity: parseInt(e.target.value, 10),
																		},
															),
														},
											),
										)
									}
								/>
								<DisplayMedicineDosageForm
									medicine={value.find((v) => v.medicineId === treatmentMedicine.medicineId)}
									periodIndex={periodIndex}
								/>
							</HStack>
							<HStack spacing="4px">
								<Input
									type="number"
									placeholder="1"
									w="30px"
									variant="noStyle"
									borderBottom="2px solid"
									borderColor="blue.500"
									value={
										value.find((v) => v.medicineId === treatmentMedicine.medicineId)?.periods[
											periodIndex
										].frequency
									}
									onChange={(e) =>
										onChange(
											value.map((v) =>
												v.medicineId !== treatmentMedicine.medicineId
													? v
													: {
															...v,
															periods: v.periods.map((period, index) =>
																index !== periodIndex
																	? period
																	: {
																			...period,
																			frequency: parseInt(e.target.value, 10),
																		},
															),
														},
											),
										)
									}
								/>
								<Text>fois tous les</Text>
								<Input
									type="number"
									placeholder="1"
									w="30px"
									variant="noStyle"
									borderBottom="2px solid"
									borderColor="blue.500"
									value={
										value.find((v) => v.medicineId === treatmentMedicine.medicineId)?.periods[
											periodIndex
										].frequencyRatio
									}
									onChange={(e) =>
										onChange(
											value.map((v) =>
												v.medicineId !== treatmentMedicine.medicineId
													? v
													: {
															...v,
															periods: v.periods.map((period, index) =>
																index !== periodIndex
																	? period
																	: {
																			...period,
																			frequencyRatio: parseInt(
																				e.target.value,
																				10,
																			),
																		},
															),
														},
											),
										)
									}
								/>
								<Select
									w="125px"
									variant="noStyle"
									borderBottom="2px solid"
									borderColor="blue.500"
									defaultValue={
										value.find((v) => v.medicineId === treatmentMedicine.medicineId)?.periods[
											periodIndex
										].frequencyUnit
									}
									onChange={(e) =>
										onChange(
											value.map((v) =>
												v.medicineId !== treatmentMedicine.medicineId
													? v
													: {
															...v,
															periods: v.periods.map((period, index) =>
																index !== periodIndex
																	? period
																	: { ...period, frequencyUnit: e.target.value },
															),
														},
											),
										)
									}
								>
									<option value="JOUR">Jour(s)</option>
									<option value="SEMAINE">Semaine(s)</option>
									<option value="MOIS">Mois</option>
								</Select>
							</HStack>
						</Stack>
						{value.find((v) => v.medicineId === treatmentMedicine.medicineId)?.periods[periodIndex]
							.periodLength && (
							<HStack>
								<Text>Pendant</Text>
								<Input
									type="number"
									placeholder="1"
									w="30px"
									variant="noStyle"
									borderBottom="2px solid"
									borderColor="blue.500"
									value={
										value.find((v) => v.medicineId === treatmentMedicine.medicineId)?.periods[
											periodIndex
										].periodLength
									}
									onChange={(e) =>
										onChange(
											value.map((v) =>
												v.medicineId !== treatmentMedicine.medicineId
													? v
													: {
															...v,
															periods: v.periods.map((period, index) =>
																index !== periodIndex
																	? period
																	: {
																			...period,
																			periodLength: parseInt(e.target.value, 10),
																		},
															),
														},
											),
										)
									}
								/>
								<Select
									w="125px"
									variant="noStyle"
									borderBottom="2px solid"
									borderColor="blue.500"
									defaultValue={
										value.find((v) => v.medicineId === treatmentMedicine.medicineId)?.periods[
											periodIndex
										].periodUnit
									}
									onChange={(e) =>
										onChange(
											value.map((v) =>
												v.medicineId !== treatmentMedicine.medicineId
													? v
													: {
															...v,
															periods: v.periods.map((period, index) =>
																index !== periodIndex
																	? period
																	: { ...period, periodUnit: e.target.value },
															),
														},
											),
										)
									}
								>
									<option value="JOUR">Jour(s)</option>
									<option value="SEMAINE">Semaine(s)</option>
									<option value="MOIS">Mois</option>
								</Select>
							</HStack>
						)}
					</VStack>
					<Stack direction={{ base: 'column', sm: 'row' }} align={{ base: 'start', sm: 'center' }}>
						{value.find((v) => v.medicineId === treatmentMedicine.medicineId)?.periods[periodIndex]
							.periodLength ? (
							<AddTreatmentButton
								icon={ClockIcon}
								variant="RED"
								onClick={() =>
									onChange(
										value.map((v) =>
											v.medicineId !== treatmentMedicine.medicineId
												? v
												: {
														...v,
														periods: v.periods.map((period, index) =>
															index !== periodIndex
																? period
																: {
																		quantity: period.quantity,
																		frequency: period.frequency,
																		frequencyRatio: period.frequencyRatio,
																		frequencyUnit: period.frequencyUnit,
																	},
														),
													},
										),
									)
								}
							>
								Supprimer une durée
							</AddTreatmentButton>
						) : (
							<AddTreatmentButton
								icon={ClockIcon}
								variant="BLUE"
								onClick={() =>
									onChange(
										value.map((v) =>
											v.medicineId !== treatmentMedicine.medicineId
												? v
												: {
														...v,
														periods: v.periods.map((period, index) =>
															index !== periodIndex
																? period
																: {
																		...period,
																		periodLength: 1,
																		periodUnit: 'SEMAINE',
																	},
														),
													},
										),
									)
								}
							>
								Ajouter une durée
							</AddTreatmentButton>
						)}
						{!isMobile && <Text color="gray.500">-</Text>}
						<AddTreatmentButton
							icon={CrossIcon}
							variant="RED"
							onClick={() =>
								onChange(
									value.map((v) =>
										v.medicineId !== treatmentMedicine.medicineId
											? v
											: {
													...v,
													periods: v.periods.filter((_, index) => index !== periodIndex),
												},
									),
								)
							}
						>
							Supprimer la période
						</AddTreatmentButton>
					</Stack>
				</VStack>
			)}
		/>
	);
};

export default AddTreatmentPeriodInputs;
