import { Stack, Text, useBreakpointValue } from '@chakra-ui/react';

import type { DoctorSearchData } from 'types/DoctorSearchData';
import { Image } from '@chakra-ui/next-js';

const DoctorSearchResponseCard = ({ doctorSearchData }: { doctorSearchData: DoctorSearchData }): JSX.Element => {
	const isMobile = useBreakpointValue({ base: true, sm: false });

	return (
		<Stack
			direction={{ base: 'column', sm: 'row' }}
			p={{ base: '16px 24px', sm: '12px 32px' }}
			justify="space-between"
			spacing={{ base: '8px', sm: '16px' }}
			bg="blue.700"
			w="100%"
			borderRadius="12px"
			align={{ base: 'start', sm: 'center' }}
		>
			<Stack
				direction={{ base: 'column', sm: 'row' }}
				spacing={{ base: '8px', sm: '32px' }}
				align={{ base: 'start', sm: 'center' }}
			>
				{!isMobile && (
					<Image
						src="/assets/Edgars/edgar-high-five.svg"
						alt="edgar-high-five-image"
						width={30}
						height={32}
						w="30px"
						h="32px"
					/>
				)}
				<Text size="lg" color="white">
					{doctorSearchData.name}
				</Text>
				<Text size="lg" color="white">
					{doctorSearchData.address}
				</Text>
			</Stack>
			<Text size="lg" color="white">
				{doctorSearchData.phone}
			</Text>
		</Stack>
	);
};

export default DoctorSearchResponseCard;
