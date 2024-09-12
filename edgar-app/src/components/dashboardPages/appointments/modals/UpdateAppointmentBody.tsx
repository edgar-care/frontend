import type { Dispatch, SetStateAction } from 'react';
import { Icon, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';

import AppointmentDoctorCard from 'components/dashboardPages/appointments/AppointmentDoctorCard';
import Pagination from 'components/navigation/Pagination';

import paginationHandler from 'utils/navigation/paginationHandler';
import countMaxNumberPage from 'utils/navigation/countMaxNumberPage';

import { useGetDoctorsQuery } from 'services/request/doctor';

import SearchIcon from 'assets/icons/SearchIcon';

const UpdateAppointmentBody = ({
	pageIndex,
	newAppointmentId,
	searchValue,
	setPageIndex,
	setNewAppointmentId,
	setSearchValue,
}: {
	pageIndex: number;
	newAppointmentId: string;
	searchValue: string;
	setPageIndex: Dispatch<SetStateAction<number>>;
	setNewAppointmentId: Dispatch<SetStateAction<string>>;
	setSearchValue: Dispatch<SetStateAction<string>>;
}): JSX.Element => {
	const { data: doctors } = useGetDoctorsQuery();

	const filteredDoctors =
		doctors?.filter((doctor) => doctor.name.toLowerCase().includes(searchValue.toLowerCase())) || [];

	return (
		<VStack w="100%" spacing="16px">
			<InputGroup>
				<Input placeholder="Docteur Edgar" maxLength={100} onChange={(e) => setSearchValue(e.target.value)} />
				<InputRightElement>
					<Icon as={SearchIcon} />
				</InputRightElement>
			</InputGroup>
			<VStack w="100%">
				{filteredDoctors &&
					paginationHandler(filteredDoctors, pageIndex, 3).map((doctor) => (
						<AppointmentDoctorCard
							key={doctor.id}
							doctorInfos={doctor}
							selectedAppointment={newAppointmentId}
							setSelectedAppointment={setNewAppointmentId}
						/>
					))}
			</VStack>
			{filteredDoctors && filteredDoctors.length > 3 && (
				<Pagination
					pageIndex={pageIndex}
					maxPageNumbers={countMaxNumberPage(filteredDoctors, 3)}
					setPageIndex={setPageIndex}
					variant="secondary"
					size="small"
				/>
			)}
		</VStack>
	);
};

export default UpdateAppointmentBody;
