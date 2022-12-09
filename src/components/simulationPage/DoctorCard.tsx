import { HStack, Text, VStack } from '@chakra-ui/react';
import colors from 'theme/foundations/colors';
import { useRouter } from 'next/router';

type DoctorCardProps = {
	doc: string;
	pos: string;
};

const DoctorCard = ({ doc, pos }: DoctorCardProps) => {
	const router = useRouter();

	return (
		<VStack
			backgroundColor="white"
			border={`2px solid ${colors.blue[100]}`}
			w="100%"
			p="8px 16px"
			borderRadius="8px"
			_hover={{
				border: `2px solid ${colors.blue[200]}`,
				background: `${colors.blue[100]}`,
			}}
			cursor="pointer"
			onClick={() => router.push('/simulation/connection')}
		>
			<HStack justify="space-between" w="100%">
				<Text size="xl">{doc}</Text>
				<Text size="xl">{pos}</Text>
			</HStack>
		</VStack>
	);
};

export default DoctorCard;
