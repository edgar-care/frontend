import { HStack, Text, VStack } from '@chakra-ui/react';
import Avatar from 'boring-avatars';

import { useAuthContext } from 'contexts/auth';

import { useGetDoctorByIdQuery } from 'services/request/doctor';

import colors from 'theme/foundations/colors';

const SimpleProfileCard = (): JSX.Element => {
	const { auth } = useAuthContext();

	const { data: doctorInfo } = useGetDoctorByIdQuery(auth.getId());

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
						size={28}
						name={`${doctorInfo?.firstname} ${doctorInfo?.name.toUpperCase()}`}
						variant="beam"
						colors={[colors.green[600], colors.green[200], colors.green[500]]}
					/>
					<Text size="boldMd" textTransform="capitalize">
						{doctorInfo?.firstname} {doctorInfo?.name}
					</Text>
				</HStack>
			</HStack>
		</VStack>
	);
};

export default SimpleProfileCard;
