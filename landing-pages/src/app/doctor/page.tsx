'use client';

import { useState } from 'react';
import { VStack } from '@chakra-ui/react';

import NavBar from 'components/navigation/NavBar';
import Footer from 'components/navigation/footer/Footer';
import DoctorSearchBox from 'components/doctorPage/DoctorSearchBox';
import DoctorSearchResponseBox from 'components/doctorPage/DoctorSearchResponseBox';

import type { DoctorSearchData } from 'types/DoctorSearchData';

const DoctorPage = (): JSX.Element => {
	const [doctorSearchData, setDoctorSearchData] = useState<DoctorSearchData[]>([]);

	return (
		<VStack
			bg="white"
			borderStyle="solid"
			borderWidth={{ base: '0px', xl: '0px 1px' }}
			borderColor="blue.200"
			spacing="32px"
			justify="space-between"
			w="100%"
			minH="100vh"
		>
			<NavBar variant="white" />
			<VStack
				w="100%"
				spacing={{ base: '64px', md: '96px' }}
				p={{ base: '32px 32px', md: '32px 64px', xl: '64px 128px' }}
			>
				<DoctorSearchBox setDoctorSearchData={setDoctorSearchData} />
				<DoctorSearchResponseBox doctorSearchData={doctorSearchData} />
			</VStack>
			<Footer />
		</VStack>
	);
};

export default DoctorPage;
