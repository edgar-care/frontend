import { useState } from 'react';
import { Icon, Input, InputGroup, InputRightElement, Text, VStack } from '@chakra-ui/react';

import SelectDoctorCard from 'components/dashboardPages/chat/modals/SelectDoctorCard';
import Pagination from 'components/navigation/Pagination';

import { useGetDoctorsQuery } from 'services/request/doctor';

import paginationHandler from 'utils/navigation/paginationHandler';
import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';

import SearchIcon from 'assets/icons/SearchIcon';

import { type DoctorType } from 'types/dashboard/DoctorType';
import { useChatContext } from 'contexts/chat';

const SelectDoctorContent = ({ onClick }: { onClick: (doctorInfos: DoctorType) => void }): JSX.Element => {
	const { data: doctors } = useGetDoctorsQuery();

	const { chats } = useChatContext();

	const [pageIndex, setPageIndex] = useState(1);
	const [searchValue, setSearchValue] = useState('');

	const notAlreadyInChat =
		doctors?.filter(
			(doctor) =>
				!chats.some((chat) => chat.participants.some((participant) => participant.participantId === doctor.id)),
		) || [];

	const filteredDoctors = notAlreadyInChat.filter(
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
						<SelectDoctorCard doctorInfos={doctor} onClick={onClick} key={doctor.id} />
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
		</VStack>
	);
};

export default SelectDoctorContent;
