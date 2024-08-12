import { SimpleGrid, Skeleton, Text, VStack } from '@chakra-ui/react';

const BackupCodes = ({ backupCodes }: { backupCodes: string[] }): JSX.Element => (
	<VStack spacing="12px">
		<Text textAlign="center">
			Ces codes sont très importants, vous ne pourrez les lire qu’une seule fois.
			<br /> Nous vous recommandons de les stocker dans un lieu sûr:
		</Text>
		<SimpleGrid columns={2} spacingX="24px" spacingY="8px">
			{backupCodes.map((backupCode) => (
				<Skeleton isLoaded={backupCode !== 'XXXX XXXX'}>
					<Text size="lg">{backupCode}</Text>
				</Skeleton>
			))}
		</SimpleGrid>
	</VStack>
);

export default BackupCodes;
