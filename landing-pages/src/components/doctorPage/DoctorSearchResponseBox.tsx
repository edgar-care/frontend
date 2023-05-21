import { VStack } from '@chakra-ui/react';

import type { DoctorSearchData } from 'types/DoctorSearchData';

import DoctorSearchResponseCard from './DoctorSearchResponseCard';

const DoctorSearchResponseBox = ({ doctorSearchData }: { doctorSearchData: DoctorSearchData[] }): JSX.Element => (
	<VStack w="100%" spacing="16px">
		{doctorSearchData.map((data) => (
			<DoctorSearchResponseCard doctorSearchData={data} key={data.phone} />
		))}
	</VStack>
);

export default DoctorSearchResponseBox;
