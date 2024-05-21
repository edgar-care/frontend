import { Box, Button, HStack, Skeleton, Stack, Text, VStack } from '@chakra-ui/react';

import { useGetPatientDocumentByIdQuery } from 'services/request/patients';

const PatientDocumentCard = ({ documentId }: { documentId: string }) => {
	const { data: document } = useGetPatientDocumentByIdQuery(documentId);

	const documentTypes: { [key: string]: string } = {
		PRESCRIPTION: 'green.500',
		CERTIFICATE: 'blue.700',
		XRAY: 'green.300',
		OTHER: 'blue.200',
	};

	return (
		<Skeleton isLoaded={document !== undefined} w="100%" borderRadius="8px">
			{document && (
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
						<Box
							bg={
								documentTypes[
									Object.keys(documentTypes).filter((key) => key === document.documentType)[0]
								]
							}
							h="42px"
							minW="4px"
							borderRadius="4px"
						/>
						<VStack w="100%" align="start" spacing="0">
							<Text
								size="boldLg"
								maxW={{ base: '100%', md: '200px', '3xl': '400px', '4xl': '600px' }}
								whiteSpace="nowrap"
								overflow="hidden"
								textOverflow="ellipsis"
							>
								{document.name}
							</Text>
						</VStack>
					</HStack>
					<Button
						w={{ base: '100%', md: 'auto' }}
						size="customSm"
						onClick={() => window.open(document.downloadUrl, '_blank')}
					>
						Télécharger
					</Button>
				</Stack>
			)}
		</Skeleton>
	);
};

export default PatientDocumentCard;
