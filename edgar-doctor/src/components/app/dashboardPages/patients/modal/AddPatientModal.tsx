import { useState } from 'react';

import {
	Box,
	Button,
	HStack,
	Icon,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	Text,
	VStack,
	useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import AddPatientModalContent from 'components/app/dashboardPages/patients/modal/AddPatientModalContent';
import AddPatientModalMedicalAntecedents from 'components/app/dashboardPages/patients/modal/AddPatientModalMedicalAntecedents';
import Stepper from 'components/stepper/Stepper';

import AddPatientIllustration from 'assets/illustrations/AddPatientIllustration';

import { type AddPatientDTO } from 'store/types/patients.type';

import { useAddPatientMutation } from 'services/request/patients';

const AddPatientModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const [triggerAddPatient] = useAddPatientMutation();

	const [step, setStep] = useState(0);
	const {
		handleSubmit,
		formState: { errors },
		register,
		control,
		watch,
	} = useForm<AddPatientDTO>({
		mode: 'onChange',
	});

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		triggerAddPatient({
			email: data.email,
			medicalFolder: data.medicalFolder,
		})
			.unwrap()
			.then(() => {
				toast({ title: 'La patient a bien été ajouté', status: 'success' });
				setStep(0);
				onClose();
			})
			.catch(() => {
				toast({ title: 'Une erreur est survenue', status: 'error' });
			});
	});

	return (
		<Modal
			isOpen={isOpen}
			onClose={() => {
				setStep(0);
				onClose();
			}}
			size="2xl"
		>
			<ModalOverlay />
			<ModalContent>
				<ModalBody p="24px 24px 16px 24px">
					<VStack spacing="32px" w="100%">
						<VStack w="100%">
							<Icon as={AddPatientIllustration} w="48px" h="48px" />
							<VStack spacing="16px" w="100%">
								<Text size="xl">Ajoutez un patient</Text>
								<Box as="span" w="300px">
									<Stepper nbrSteps={2} activeStep={step} />
								</Box>
							</VStack>
						</VStack>
						{step === 0 ? (
							<AddPatientModalContent register={register} control={control} errors={errors} />
						) : (
							<AddPatientModalMedicalAntecedents
								control={control}
								errors={errors}
								medicalAntecedents={watch('medicalFolder.medicalAntecedents')}
							/>
						)}
					</VStack>
				</ModalBody>
				<ModalFooter p="16px 24px 24px 24px">
					<HStack w="100%">
						<Button
							variant="secondary"
							w="100%"
							onClick={() => {
								if (step === 0) onClose();
								else setStep(0);
							}}
						>
							{step === 0 ? 'Annuler' : 'Revenir en arrière'}
						</Button>
						<Button
							w="100%"
							variant={step === 0 ? 'primary' : 'validate'}
							onClick={() => {
								if (step === 0) setStep(1);
								else void onSubmit();
							}}
							type={step === 0 ? 'button' : 'submit'}
						>
							{step === 0 ? 'Continuer' : 'Confirmer'}
						</Button>
					</HStack>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default AddPatientModal;
