import { Dispatch, SetStateAction, useState } from 'react';
import { Box, Button, Input, Text, useBreakpointValue, useToast, VStack, Wrap, WrapItem } from '@chakra-ui/react';

import searchDoctor from 'utils/searchDoctor';

import type { DoctorSearchData } from 'types/DoctorSearchData';
import HighlightText from '../HighlightText';

const DoctorSearchBox = ({
	setDoctorSearchData,
}: {
	setDoctorSearchData: Dispatch<SetStateAction<DoctorSearchData[]>>;
}): JSX.Element => {
	const isTitleMultiLines = useBreakpointValue({ base: true, ssm: false });

	const [doctorName, setDoctorName] = useState('');
	const [localisation, setLocalisation] = useState('');

	const toast = useToast({ duration: 3000, isClosable: true });

	return (
		<VStack spacing="64px" w="100%" align="start">
			<VStack spacing="32px" w="100%" align="start">
				<Text size={{ base: '5xl', lg: '6xl', '2xl': '7xl' }} id="edgar-doctorPage-title-text">
					{isTitleMultiLines ? (
						<>
							edgar chez <HighlightText>les </HighlightText>
							<HighlightText>médecins</HighlightText>
						</>
					) : (
						<>
							edgar chez <HighlightText>les médecins</HighlightText>
						</>
					)}
				</Text>
				<Text size={{ base: 'xl', lg: '2xl' }} maxW="700px" id="edgar-doctorPage-subtitle-text">
					Trouvez un médecin près de chez vous utilisant edgar.
				</Text>
			</VStack>
			<VStack w="100%" align="start" spacing="32px">
				<Wrap align="end" spacing="32px">
					<WrapItem w={{ base: '100%', sm: '400px' }}>
						<VStack w="100%" align="start">
							<Text size="boldLg" id="edgar-doctorPage-doctorName-text">
								Nom du médecin
							</Text>
							<Input
								type="text"
								w="100%"
								maxLength={50}
								value={doctorName}
								placeholder="Renseignez le nom du médecin recherché "
								border="2px solid"
								borderColor="blue.500"
								borderRadius="12px"
								_placeholder={{
									color: 'gray.400',
								}}
								_hover={{
									borderColor: 'blue.500',
								}}
								onChange={(e) => setDoctorName(e.target.value)}
								id="edgar-doctorPage-doctorName-input"
							/>
						</VStack>
					</WrapItem>
					<WrapItem w={{ base: '100%', sm: '250px' }}>
						<VStack w="100%" align="start">
							<Text size="boldLg" id="edgar-doctorPage-localisation-text">
								Votre localisation
							</Text>
							<Input
								type="text"
								w="100%"
								value={localisation}
								maxLength={50}
								placeholder="Où ?"
								border="2px solid"
								borderColor="blue.500"
								borderRadius="12px"
								_placeholder={{
									color: 'gray.400',
								}}
								_hover={{
									borderColor: 'blue.500',
								}}
								onChange={(e) => setLocalisation(e.target.value)}
								id="edgar-doctorPage-localisation-input"
							/>
						</VStack>
					</WrapItem>
					<WrapItem w={{ base: '100%', sm: 'auto' }}>
						<Button
							variant="primary"
							w="100%"
							onClick={() => {
								searchDoctor(doctorName, localisation).then((res) => {
									toast({ title: res.title, status: res.status });
									if (res.status !== 'error') {
										setDoctorName('');
										setLocalisation('');
										setDoctorSearchData(res.doctors);
									}
								});
							}}
							id="edgar-doctorPage-searchDoctor-button"
						>
							Rechercher un médecin
						</Button>
					</WrapItem>
				</Wrap>
				<Box w="100%" h="1px" bg="blue.400" />
			</VStack>
		</VStack>
	);
};

export default DoctorSearchBox;
