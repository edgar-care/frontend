import { type Dispatch, type SetStateAction, useState } from 'react';
import { Icon, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react';

import { useGetDoctorsQuery } from 'services/request/doctor';

import SelectPrimaryDoctorCard from 'components/app/dashboardPages/patients/modal/forms/primaryDoctor/SelectPrimaryDoctorCard';
import Pagination from 'components/navigation/Pagination';

import SearchIcon from 'assets/icons/SearchIcon';

import paginationHandler from 'utils/navigation/paginationHandler';
import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';

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
	const [pageIndex, setPageIndex] = useState(1);
	const [searchValue, setSearchValue] = useState('');

	const filteredDoctors = doctors?.filter(
		(doctor) =>
			doctor.name.toLowerCase().includes(searchValue.toLowerCase()) ||
			doctor.firstname.toLowerCase().includes(searchValue.toLowerCase()),
	);

	return (
		<VStack w="100%" spacing="24px">
			<InputGroup>
				<Input
					placeholder="Nom du médecin"
					maxLength={100}
					onChange={(e) => {
						setPageIndex(1);
						setSearchValue(e.target.value);
					}}
				/>
				<InputRightElement>
					<Icon as={SearchIcon} />
				</InputRightElement>
			</InputGroup>
			<VStack w="100%">
				{filteredDoctors &&
					paginationHandler(filteredDoctors, pageIndex, 5).map((doctor) => (
						<SelectPrimaryDoctorCard
							doctorInfos={doctor}
							onChange={onChange}
							onClose={onClose}
							setPrimaryDoctorName={setPrimaryDoctorName}
							key={doctor.id}
						/>
					))}
				{filteredDoctors && filteredDoctors?.length === 0 && <Text>Aucun médecin trouvé</Text>}
				{filteredDoctors && filteredDoctors?.length > 5 && (
					<Pagination
						pageIndex={pageIndex}
						maxPageNumbers={countMaxNumberPage(filteredDoctors, 5)}
						setPageIndex={setPageIndex}
						variant="secondary"
						size="small"
					/>
				)}
			</VStack>
			{/*	TODO: add pagination */}
		</VStack>
	);
};

export default SelectPrimaryDoctorContent;
