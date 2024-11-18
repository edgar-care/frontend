import { Box, Button, HStack, Skeleton, Stack, Text, VStack } from '@chakra-ui/react';

import { useGetPrescriptionByIdQuery } from 'services/request/prescriptions';
import { useAuthContext } from 'contexts/auth';

const PatientPrescriptionCard = ({ prescriptionId }: { prescriptionId: string }) => {
	const { auth } = useAuthContext();
	const { data: prescription } = useGetPrescriptionByIdQuery(prescriptionId);

	return (
		<Skeleton isLoaded={prescription !== undefined} w="100%" borderRadius="8px">
			{prescription && (
				<Stack
					direction={{ base: 'column', md: 'row' }}
					bg="white"
					border="2px solid"
					borderColor="blue.200"
					borderRadius="8px"
					p="12px"
					w="100%"
					justify="space-between"
					spacing={{ base: '8px', md: '16px' }}
					align="center"
				>
					<HStack w="100%" spacing="8px">
						<Box bg="green.500" h="42px" minW="4px" borderRadius="4px" />
						<VStack w="100%" align="start" spacing="0">
							<Text
								size="boldLg"
								maxW={{ base: '100%', md: '200px', '3xl': '400px', '4xl': '600px' }}
								whiteSpace="nowrap"
								overflow="hidden"
								textOverflow="ellipsis"
							>
								Ordonnance
							</Text>
							<Text
								size="sm"
								maxW={{ base: '100%', md: '200px', '3xl': '400px', '4xl': '600px' }}
								whiteSpace="nowrap"
								overflow="hidden"
								textOverflow="ellipsis"
							>
								Ajouté le {new Date(prescription.createdAt).toLocaleDateString('fr-FR')}{' '}
								{prescription.createdBy === auth.getId() && 'par Vous'}
							</Text>
						</VStack>
					</HStack>
					<Button
						w={{ base: '100%', md: 'auto' }}
						size="customSm"
						onClick={() => window.open(prescription.downloadUrl, '_blank')}
					>
						Télécharger
					</Button>
				</Stack>
			)}
		</Skeleton>
	);
};

export default PatientPrescriptionCard;
