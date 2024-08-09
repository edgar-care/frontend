import type { Dispatch, SetStateAction } from 'react';
import { HStack, Skeleton, Text, VStack } from '@chakra-ui/react';
import Avatar from 'boring-avatars';

import SettingsSection from 'components/navigation/settingsModals/SettingsSection';

import { useAuthContext } from 'contexts/auth';

import { useGetDoctorByIdQuery } from 'services/request/doctor';

import { type SettingsSectionType } from 'types/navigation/SettingsSectionType';

import colors from 'theme/foundations/colors';

const SettingsBody = ({
	sections,
	hasProfileBanner,
	id,
	setSelectedPageStack,
}: {
	sections: SettingsSectionType[];
	hasProfileBanner: boolean;
	id?: string;
	setSelectedPageStack: Dispatch<SetStateAction<string[]>>;
}): JSX.Element => {
	const auth = useAuthContext();

	const { data: doctorInfo, isLoading } = useGetDoctorByIdQuery(auth.getId());

	return (
		<VStack w="100%" spacing="0px">
			{hasProfileBanner && (
				<HStack w="100%" bg="blue.700" spacing="16px" p="12px" borderRadius="16px 16px 0px 0px">
					<Skeleton isLoaded={!isLoading && doctorInfo !== undefined}>
						{doctorInfo && (
							<Avatar
								size={48}
								name={`${doctorInfo.firstname} ${doctorInfo.name.toUpperCase()}`}
								variant="beam"
								colors={[colors.blue[700], colors.blue[200], colors.blue[500]]}
							/>
						)}
					</Skeleton>
					<Skeleton isLoaded={!isLoading && doctorInfo !== undefined}>
						{doctorInfo && (
							<VStack spacing="0px" align="start">
								<Text size="boldMd" color="white" id={`edgar-${id}-profileFirstnameName-text`}>
									{doctorInfo.firstname} {doctorInfo.name.toUpperCase()}
								</Text>
							</VStack>
						)}
					</Skeleton>
				</HStack>
			)}
			<VStack
				w="100%"
				p="4px 8px"
				borderRadius={`${hasProfileBanner ? '0px 0px' : '16px 16px'} 16px 16px`}
				border="2px solid"
				borderTop={hasProfileBanner ? '0px' : '2px'}
				borderColor="blue.100"
			>
				{sections.map((section) => (
					<SettingsSection
						section={section}
						key={section.name}
						id={`${id}-${section.name.replace(/ /g, '')}Section`}
						setSelectedPageStack={setSelectedPageStack}
					/>
				))}
			</VStack>
		</VStack>
	);
};

export default SettingsBody;
