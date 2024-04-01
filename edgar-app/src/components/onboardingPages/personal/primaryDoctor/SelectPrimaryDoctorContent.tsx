import { type Dispatch, type SetStateAction, useState } from 'react';
import { Icon, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';

import SelectPrimaryDoctorCard from 'components/onboardingPages/personal/primaryDoctor/SelectPrimaryDoctorCard';

import { useGetDoctorsQuery } from 'services/request/doctor';

import SearchIcon from 'assets/icons/SearchIcon';

const SelectPrimaryDoctorContent = ({
	onChange,
	onClose,
	setPrimaryDoctorName,
}: {
	onChange: (event: unknown) => void;
	onClose: () => void;
	setPrimaryDoctorName: Dispatch<SetStateAction<string>>;
}): JSX.Element => {
	const { data: doctors } = useGetDoctorsQuery();
	const [searchValue, setSearchValue] = useState('');

	return (
		<VStack w="100%" spacing="24px">
			<InputGroup>
				<Input placeholder="Nom du médecin" onChange={(e) => setSearchValue(e.target.value)} />
				<InputRightElement>
					<Icon as={SearchIcon} />
				</InputRightElement>
			</InputGroup>
			<VStack w="100%">
				{doctors &&
					doctors
						.filter(
							(doctor) =>
								doctor.name.toLowerCase().includes(searchValue.toLowerCase()) ||
								doctor.firstname.toLowerCase().includes(searchValue.toLowerCase()),
						)
						.map((doctor) => (
							<SelectPrimaryDoctorCard
								doctorInfos={doctor}
								onChange={onChange}
								onClose={onClose}
								setPrimaryDoctorName={setPrimaryDoctorName}
								key={doctor.id}
							/>
						))}
			</VStack>
			{/*	TODO: add pagination */}
		</VStack>
	);
};

export default SelectPrimaryDoctorContent;
