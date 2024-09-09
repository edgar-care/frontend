import { HStack, Input, Select, Stack, Text, useBreakpointValue, VStack } from '@chakra-ui/react';
import { type Control, Controller } from 'react-hook-form';

import PatientAddPrescriptionButton from 'components/app/dashboardPages/patients/subViews/prescriptions/modals/PatientAddPrescriptionButton';

import type { UploadPatientPrescriptionDTO } from 'store/types/prescriptions.type';

import type { PatientPrescriptionMedicineType } from 'types/app/dashboard/patients/prescriptions/PatientPrescriptionMedicineType';

import CrossIcon from 'assets/icons/CrossIcon';
import ClockIcon from 'assets/icons/ClockIcon';

const PatientAddPrescriptionPeriodInputs = ({
	prescriptionMedicine,
	periodIndex,
	control,
}: {
	prescriptionMedicine: PatientPrescriptionMedicineType;
	periodIndex: number;
	control: Control<UploadPatientPrescriptionDTO>;
}): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, sm: false });

	return (
		<Controller
			control={control}
			rules={{ required: true }}
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
										value.find((v) => v.medicineId === prescriptionMedicine.medicineId)?.periods[
											periodIndex
										].quantity
									}
									onChange={(e) =>
										onChange(
											value.map((v) =>
												v.medicineId !== prescriptionMedicine.medicineId
													? v
													: {
															...v,
															periods: v.periods.map((period, index) =>
																index !== periodIndex
																	? period
																	: { ...period, quantity: e.target.value },
															),
														},
											),
										)
									}
								/>
								<Text>comprimé</Text>
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
										value.find((v) => v.medicineId === prescriptionMedicine.medicineId)?.periods[
											periodIndex
										].frequency
									}
									onChange={(e) =>
										onChange(
											value.map((v) =>
												v.medicineId !== prescriptionMedicine.medicineId
													? v
													: {
															...v,
															periods: v.periods.map((period, index) =>
																index !== periodIndex
																	? period
																	: { ...period, frequency: e.target.value },
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
										value.find((v) => v.medicineId === prescriptionMedicine.medicineId)?.periods[
											periodIndex
										].frequencyRatio
									}
									onChange={(e) =>
										onChange(
											value.map((v) =>
												v.medicineId !== prescriptionMedicine.medicineId
													? v
													: {
															...v,
															periods: v.periods.map((period, index) =>
																index !== periodIndex
																	? period
																	: { ...period, frequencyRatio: e.target.value },
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
										value.find((v) => v.medicineId === prescriptionMedicine.medicineId)?.periods[
											periodIndex
										].frequencyUnit
									}
									onChange={(e) =>
										onChange(
											value.map((v) =>
												v.medicineId !== prescriptionMedicine.medicineId
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
						{value.find((v) => v.medicineId === prescriptionMedicine.medicineId)?.periods[periodIndex]
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
										value.find((v) => v.medicineId === prescriptionMedicine.medicineId)?.periods[
											periodIndex
										].periodLength
									}
									onChange={(e) =>
										onChange(
											value.map((v) =>
												v.medicineId !== prescriptionMedicine.medicineId
													? v
													: {
															...v,
															periods: v.periods.map((period, index) =>
																index !== periodIndex
																	? period
																	: { ...period, periodLength: e.target.value },
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
										value.find((v) => v.medicineId === prescriptionMedicine.medicineId)?.periods[
											periodIndex
										].periodUnit
									}
									onChange={(e) =>
										onChange(
											value.map((v) =>
												v.medicineId !== prescriptionMedicine.medicineId
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
						{value.find((v) => v.medicineId === prescriptionMedicine.medicineId)?.periods[periodIndex]
							.periodLength ? (
							<PatientAddPrescriptionButton
								icon={ClockIcon}
								variant="RED"
								onClick={() =>
									onChange(
										value.map((v) =>
											v.medicineId !== prescriptionMedicine.medicineId
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
							</PatientAddPrescriptionButton>
						) : (
							<PatientAddPrescriptionButton
								icon={ClockIcon}
								variant="BLUE"
								onClick={() =>
									onChange(
										value.map((v) =>
											v.medicineId !== prescriptionMedicine.medicineId
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
							</PatientAddPrescriptionButton>
						)}
						{!isMobile && <Text color="gray.500">-</Text>}
						<PatientAddPrescriptionButton
							icon={CrossIcon}
							variant="RED"
							onClick={() =>
								onChange(
									value.map((v) =>
										v.medicineId !== prescriptionMedicine.medicineId
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
						</PatientAddPrescriptionButton>
					</Stack>
				</VStack>
			)}
			name="medicines"
		/>
	);
};

export default PatientAddPrescriptionPeriodInputs;
