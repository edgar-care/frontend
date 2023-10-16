import { Box, Button, HStack, Text, useDisclosure, VStack } from '@chakra-ui/react';

import UpdateMedicalModal from 'components/dashboardPages/medical/modal/UpdateMedicalModal';

import { type MedicalInfos, type PersonalInfos } from 'types/onboarding/OnboardingInfos';

const MedicalUpdateCard = ({
	personalInfos,
	medicalInfos,
}: {
	personalInfos: PersonalInfos;
	medicalInfos: MedicalInfos;
}): JSX.Element => {
	const { isOpen: isOpenUpdateModal, onOpen: onOpenUpdateModal, onClose: onCloseUpdateModal } = useDisclosure();

	return (
		<>
			<HStack
				p="16px"
				w="100%"
				bg="white"
				border="2px solid"
				borderColor="blue.200"
				spacing="4px"
				maxW="400px"
				borderRadius="8px"
			>
				<Box as="span" w="4px" alignSelf="stretch" bg="green.500" borderRadius="4px" />
				<VStack pl="8px" w="100%" align="start">
					<VStack w="100%" spacing="0px" align="start">
						<Text size="lg">Des informations manquantes ?</Text>
						<Text size="lg">Des changements médicaux ?</Text>
					</VStack>
					<Button w="100%" onClick={onOpenUpdateModal}>
						Mettre à jour mes informations
					</Button>
				</VStack>
			</HStack>
			<UpdateMedicalModal
				isOpen={isOpenUpdateModal}
				onClose={onCloseUpdateModal}
				personalInfos={personalInfos}
				medicalInfos={medicalInfos}
			/>
		</>
	);
};

export default MedicalUpdateCard;
