import {
	Box,
	Button,
	HStack,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useToast,
	VStack,
} from '@chakra-ui/react';

import useCustomState from 'hooks/useCustomState';

import { MessageResponse } from 'types/MessageResponse';

import updateInfosMiddleware from 'utils/app/patient/medical/updateInfosMiddleware';

import colors from 'theme/foundations/colors';

import UpdateModalInputForm from './UpdateModalInputForm';
import UpdateModalNumberForm from './UpdateModalNumberForm';

const UpdateMedicalModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }): JSX.Element => {
	const {
		value: heightValue,
		setValue: setHeightValue,
		error: heightError,
		setError: setHeightError,
	} = useCustomState(0);
	const {
		value: weightValue,
		setValue: setWeightValue,
		error: weightError,
		setError: setWeightError,
	} = useCustomState(0);
	const {
		value: doctorNameValue,
		setValue: setDoctorNameValue,
		error: doctorNameError,
		setError: setDoctorNameError,
	} = useCustomState('');
	const {
		value: allergiesValue,
		setValue: setAllergiesValue,
		error: allergiesError,
		setError: setAllergiesError,
	} = useCustomState('');
	const {
		value: diseasesValue,
		setValue: setDiseasesValue,
		error: diseasesError,
		setError: setDiseasesError,
	} = useCustomState('');
	const {
		value: treatmentsValue,
		setValue: setTreatmentsValue,
		error: treatmentsError,
		setError: setTreatmentsError,
	} = useCustomState('');

	const toast = useToast({ duration: 2000, isClosable: true });

	const handleSubmit = async (): Promise<MessageResponse> => {
		try {
			if (
				updateInfosMiddleware(
					heightValue,
					setHeightError,
					weightValue,
					setWeightError,
					doctorNameValue,
					setDoctorNameError,
				)
			)
				return { title: 'Vos informations ont bien été mises à jour', status: 'success' };
			return { title: 'Une erreur est survenue, veuillez réessayer', status: 'error' };
		} catch (error) {
			console.error(error);
			return { title: 'Une erreur est survenue, veuillez réessayer', status: 'error' };
		}
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose} size="2xl">
			<ModalOverlay />
			<ModalContent bg="blue.100" borderRadius="16px" p="32px">
				<VStack bg="white" borderRadius="8px" border={`2px solid ${colors.blue[200]}`} p="16px">
					<ModalHeader>
						<VStack>
							<Text size="boldXl">Modification de votre profil</Text>
							<Box
								w="200px"
								h="3px"
								bg={`linear-gradient(90deg, ${colors.blue[600]} 0%, ${colors.pink[600]} 100%)`}
							/>
						</VStack>
					</ModalHeader>

					<ModalBody w="100%">
						<VStack spacing="16px" w="100%">
							<HStack w="100%" spacing="16px">
								<UpdateModalNumberForm
									label="Poids"
									placeholder="Votre poids"
									value={weightValue}
									setValue={setWeightValue}
									error={weightError}
									setError={setWeightError}
									isRequired={true}
								/>
								<UpdateModalNumberForm
									label="Taille"
									placeholder="Votre taille"
									value={heightValue}
									setValue={setHeightValue}
									error={heightError}
									setError={setHeightError}
									isRequired={true}
								/>
							</HStack>
							<UpdateModalInputForm
								label="Médecin traitant"
								placeholder="Le nom de votre médecin traitant"
								value={doctorNameValue}
								setValue={setDoctorNameValue}
								error={doctorNameError}
								setError={setDoctorNameError}
								isRequired={true}
							/>
							<UpdateModalInputForm
								label="Allergies"
								placeholder="Le nom de vos allergies"
								value={allergiesValue}
								setValue={setAllergiesValue}
								error={allergiesError}
								setError={setAllergiesError}
								isRequired={false}
							/>
							<UpdateModalInputForm
								label="Maladies"
								placeholder="Le nom de vos maladies"
								value={diseasesValue}
								setValue={setDiseasesValue}
								error={diseasesError}
								setError={setDiseasesError}
								isRequired={false}
							/>
							<UpdateModalInputForm
								label="Traitements en cours"
								placeholder="Le nom de vos traitements en cours"
								value={treatmentsValue}
								setValue={setTreatmentsValue}
								error={treatmentsError}
								setError={setTreatmentsError}
								isRequired={false}
							/>
						</VStack>
					</ModalBody>
					<ModalFooter>
						<HStack spacing="32px">
							<Button variant="secondary" onClick={onClose}>
								Annuler mes changements
							</Button>
							<Button
								variant="primary"
								onClick={() => {
									handleSubmit().then((res) => {
										toast({
											title: res.title,
											status: res.status,
										});
										if (res.status === 'success') onClose();
									});
								}}
							>
								Valider mes changements
							</Button>
						</HStack>
					</ModalFooter>
				</VStack>
			</ModalContent>
		</Modal>
	);
};

export default UpdateMedicalModal;
