import { SimpleGrid, Skeleton, Text, VStack } from '@chakra-ui/react';

const splitBackupCode = (code: string): string => {
	const middle = Math.floor(code.length / 2);
	return `${code.slice(0, middle)} ${code.slice(middle)}`;
};

const BackupCodes = ({ backupCodes }: { backupCodes: string[] }): JSX.Element => (
	<VStack spacing="12px">
		<Text textAlign="center">
			Ces codes sont très importants, vous ne pourrez les lire qu’une seule fois.
			<br /> Nous vous recommandons de les stocker dans un lieu sûr:
		</Text>
		<SimpleGrid columns={2} spacingX="24px" spacingY="8px">
			{backupCodes.map((backupCode) => (
				<Skeleton isLoaded={backupCode !== 'XXXX XXXX'} key={backupCode}>
					<Text size="lg" fontFamily="Roboto Mono">
						{splitBackupCode(backupCode)}
					</Text>
				</Skeleton>
			))}
		</SimpleGrid>
	</VStack>
);

export default BackupCodes;
