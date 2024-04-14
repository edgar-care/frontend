import { useEffect, useState } from 'react';
import {
	Box,
	Button,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerOverlay,
	HStack,
	Icon,
	Text,
	useToast,
	VStack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import UpdateMedicalPersonalModalContent from 'components/dashboardPages/medical/modal/UpdateMedicalPersonalModalContent';
import UpdateMedicalMedicalModalContent from 'components/dashboardPages/medical/modal/UpdateMedicalMedicalModalContent';
import Stepper from 'components/stepper/Stepper';

import MedicalIllustration from 'assets/illustrations/MedicalIllustration';

import { type PatientMedicalType } from 'types/dashboard/medical/PatientMedicalType';

import { useUpdatePatientMedicalFolderMutation } from 'services/request/medical';

const UpdateMedicalDrawer = ({
	isOpen,
	onClose,
	medicalInfos,
}: {
	isOpen: boolean;
	onClose: () => void;
	medicalInfos: PatientMedicalType;
}): JSX.Element => {
	const [triggerUpdatePatientMedicalFolder] = useUpdatePatientMedicalFolderMutation();

	const [step, setStep] = useState(0);
	const {
		handleSubmit,
		formState: { errors },
		register,
		control,
		reset,
	} = useForm<PatientMedicalType>({
		mode: 'onChange',
	});

	const toast = useToast({ duration: 3000, isClosable: true });

	const onSubmit = handleSubmit((data) => {
		triggerUpdatePatientMedicalFolder({
			name: data.name,
			firstname: data.firstname,
			birthdate: data.birthdate,
			sex: data.sex,
			height: data.height,
			weight: data.weight,
			primaryDoctorId: data.primaryDoctorId,
			medicalAntecedents: [],
			onboardingStatus: data.onboardingStatus,
		})
			.unwrap()
			.then(() => {
				toast({ title: 'Votre dossier médical a bien été modifié', status: 'success' });
				setStep(0);
				onClose();
			})
			.catch(() => {
				toast({ title: 'Une erreur est survenue', status: 'error' });
			});
	});

	useEffect(() => {
		reset(medicalInfos);
	}, []);

	return (
		<Drawer
			isOpen={isOpen}
			onClose={() => {
				setStep(0);
				onClose();
			}}
			size="sm"
			placement="bottom"
		>
			<DrawerOverlay />
			<DrawerContent borderRadius="16px 16px 0px 0px" maxH="700px">
				<DrawerBody p="24px 24px 16px 24px">
					<VStack spacing="32px" w="100%">
						<VStack w="100%">
							<Icon as={MedicalIllustration} w="48px" h="48px" />
							<VStack spacing="16px" w="100%">
								<Text size="xl" textAlign="center">
									{step === 0
										? 'Mettez à jour vos informations personnelles'
										: 'Mettez à jour vos informations médicales'}
								</Text>
								<Box as="span" w="200px">
									<Stepper nbrSteps={2} activeStep={step} />
								</Box>
							</VStack>
						</VStack>
						{step === 0 ? (
							<UpdateMedicalPersonalModalContent register={register} control={control} errors={errors} />
						) : (
							<UpdateMedicalMedicalModalContent register={register} errors={errors} />
						)}
					</VStack>
				</DrawerBody>
				<DrawerFooter p="16px 24px 24px 24px">
					<HStack w="100%">
						<Button
							variant="secondary"
							w="100%"
							onClick={() => {
								if (step === 0) onClose();
								else setStep(0);
							}}
						>
							{step === 0 ? 'Annuler' : 'Précedent'}
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
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default UpdateMedicalDrawer;
