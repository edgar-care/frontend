import { HStack, Text, VStack } from '@chakra-ui/react';
import colors from 'theme/foundations/colors';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';
import { DoctorType } from 'types/simulationPage/DoctorType';

type DoctorCardProps = {
	doc: DoctorType;
	setSelectedDoctor: Dispatch<SetStateAction<string>>;
};

const DoctorCard = ({ doc, setSelectedDoctor }: DoctorCardProps) => {
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
			onClick={() => {
				setSelectedDoctor(doc.id);
				router.push('/simulation/connection');
			}}
		>
			<HStack justify="space-between" w="100%">
				<Text size="xl">{doc.name}</Text>
				<Text size="xl">{doc.position}</Text>
			</HStack>
		</VStack>
	);
};

export default DoctorCard;
