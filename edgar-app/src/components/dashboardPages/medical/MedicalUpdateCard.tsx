import { Box, Button, HStack, Text, useDisclosure, VStack } from '@chakra-ui/react';

import UpdateMedicalHandler from 'components/dashboardPages/medical/modal/UpdateMedicalHandler';

import type { OnboardingInfos } from 'types/onboarding/OnboardingInfos';

const MedicalUpdateCard = ({ medicalInfos }: { medicalInfos: OnboardingInfos }): JSX.Element => {
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
				borderRadius="8px"
				maxW={{ base: '100%', md: '400px' }}
				minW={{ base: '100%', sm: '300px' }}
			>
				<Box as="span" w="4px" alignSelf="stretch" bg="green.500" borderRadius="4px" />
				<VStack pl="8px" w="100%" align="start">
					<VStack w="100%" spacing="0px" align="start">
						<Text size={{ base: 'md', lg: 'lg' }} id="edgar-dashboardMedicalPage-updateInformations1-text">
							Des informations manquantes ?
						</Text>
						<Text size={{ base: 'md', lg: 'lg' }} id="edgar-dashboardMedicalPage-updateInformations2-text">
							Des changements médicaux ?
						</Text>
					</VStack>
					<Button
						w="100%"
						onClick={onOpenUpdateModal}
						id="edgar-dashboardMedicalPage-updateInformations-button"
					>
						Mettre à jour mes informations
					</Button>
				</VStack>
			</HStack>
			<UpdateMedicalHandler isOpen={isOpenUpdateModal} onClose={onCloseUpdateModal} medicalInfos={medicalInfos} />
		</>
	);
};

export default MedicalUpdateCard;
