import { HStack, Text, VStack } from '@chakra-ui/react';
import Avatar from 'boring-avatars';

import { useGetPatientMedicalFolderQuery } from 'services/request/medical';

const SimpleProfileCard = (): JSX.Element => {
	const { data: medicalInfo } = useGetPatientMedicalFolderQuery();

	return (
		<VStack
			w="100%"
			bg="white"
			border="2px solid"
			borderColor="blue.200"
			borderRadius="16px"
			transition="all .3s ease-out"
		>
			<HStack justify="space-between" w="100%" p="8px 16px">
				<HStack spacing="16px" w="100%">
					<Avatar
						size={30}
						name="Lucas LOUIS"
						variant="beam"
						colors={['#335FC2', '#C3EAAC', '#C6DEF7', '#5AAF33']}
					/>
					<Text size="boldMd" textTransform="capitalize">
						{medicalInfo?.firstname} {medicalInfo?.name}
					</Text>
				</HStack>
			</HStack>
		</VStack>
	);
};

export default SimpleProfileCard;
