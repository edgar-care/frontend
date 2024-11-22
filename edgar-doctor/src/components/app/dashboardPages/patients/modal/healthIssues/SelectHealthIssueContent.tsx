import { useState } from 'react';
import { VStack, chakra, Text, HStack, Icon, useDisclosure, Button } from '@chakra-ui/react';
import { type Control, Controller, type FieldErrors, type UseFormRegister, type UseFormWatch } from 'react-hook-form';

import SelectHealthIssueNameInput from 'components/app/dashboardPages/patients/modal/healthIssues/SelectHealthIssueNameInput';
import TreatmentCompactCard from 'components/app/dashboardPages/patients/modal/healthIssues/treatments/TreatmentCompactCard';
import AddTreatmentHandler from 'components/app/dashboardPages/patients/modal/healthIssues/treatments/AddTreatmentHandler';

import type { HealthIssuesType } from 'types/app/dashboard/patients/medicalInfos/HealthIssueType';

import DashIcon from 'assets/icons/DashIcon';
import PlusIcon from 'assets/icons/PlusIcon';

const SelectHealthIssueContent = ({
	onSubmit,
	register,
	control,
	watch,
	errors,
}: {
	onSubmit: () => void;
	register: UseFormRegister<HealthIssuesType>;
	control: Control<HealthIssuesType>;
	watch: UseFormWatch<HealthIssuesType>;
	errors: FieldErrors<HealthIssuesType>;
}): JSX.Element => {
	const [treatmentToDelete, setTreatmentToDelete] = useState<number[]>([]);

	const { isOpen: isOpenAddTreatment, onOpen: onOpenAddTreatment, onClose: onCloseAddTreatment } = useDisclosure();
	const { isOpen: isDeleteTreatment, onToggle: onToggleDeleteTreatment } = useDisclosure();

	const medicalAntecedentName = watch('name');

	return (
		<VStack w="100%" spacing="24px">
			<chakra.form onSubmit={onSubmit} w="100%" h="100%">
				<VStack
					w="100%"
					spacing="16px"
					h="100%"
					sx={{
						'::-webkit-scrollbar': {
							width: '6px',
						},
						'::-webkit-scrollbar-track': {
							background: 'grey.100',
							borderRadius: '8px',
							marginTop: '64px',
							marginBottom: '64px',
						},
						'::-webkit-scrollbar-thumb': {
							background: 'grey.200',
							borderRadius: '8px',
						},
						'::-webkit-scrollbar-thumb:hover': {
							background: 'grey.300',
						},
					}}
				>
					<VStack w="100%">
						<VStack w="100%" spacing="16px">
							<SelectHealthIssueNameInput register={register} errors={errors} />
							<Controller
								name="treatments"
								control={control}
								render={({ field: { value, onChange } }) => (
									<VStack w="100%" spacing="12px">
										<HStack
											w="100%"
											justify="space-between"
											cursor="pointer"
											onClick={onOpenAddTreatment}
										>
											<Text>Ajouter un traitement</Text>
											<Icon as={PlusIcon} w="14px" h="14px" color="blue.700" />
										</HStack>
										<HStack
											w="100%"
											justify="space-between"
											py="2px"
											px={isDeleteTreatment ? '8px' : '0px'}
											bg={isDeleteTreatment ? 'red.100' : 'transparent'}
											border="1px solid"
											borderColor={isDeleteTreatment ? 'red.200' : 'transparent'}
											borderRadius="8px"
											cursor="pointer"
											onClick={onToggleDeleteTreatment}
										>
											<Text color={isDeleteTreatment ? 'red.700' : 'black'}>
												Supprimer un traitement
											</Text>
											<Icon as={DashIcon} w="14px" h="auto" color="red.700" />
										</HStack>
										{value.map((treatment, index) => (
											<TreatmentCompactCard
												treatment={treatment}
												medicalAntecedentName={medicalAntecedentName}
												isDeletable={isDeleteTreatment}
												onDelete={() =>
													setTreatmentToDelete((prev) => {
														if (prev.includes(index))
															return prev.filter((i) => i !== index);
														return [...prev, index];
													})
												}
												key={index}
											/>
										))}
										{isDeleteTreatment && (
											<Button
												size="customSm"
												variant="deleteBordered"
												w="100%"
												onClick={() => {
													onChange(
														value.filter((_, index) => !treatmentToDelete.includes(index)),
													);
													setTreatmentToDelete([]);
													onToggleDeleteTreatment();
												}}
											>
												Supprimer les traitements
											</Button>
										)}
										<AddTreatmentHandler
											isOpen={isOpenAddTreatment}
											onClose={onCloseAddTreatment}
											onChange={onChange}
											treatments={value}
										/>
									</VStack>
								)}
							/>
						</VStack>
					</VStack>
				</VStack>
			</chakra.form>
		</VStack>
	);
};

export default SelectHealthIssueContent;
