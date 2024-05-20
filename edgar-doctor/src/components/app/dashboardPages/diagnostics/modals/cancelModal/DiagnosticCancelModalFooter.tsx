import { Button, HStack } from '@chakra-ui/react';

const DiagnosticCancelModalFooter = ({
	onClose,
	onSubmit,
}: {
	onClose: () => void;
	onSubmit: () => void;
}): JSX.Element => (
	<HStack w="100%" spacing="12px">
		<Button variant="secondary" w="100%" onClick={onClose}>
			Non, je veux revenir en arrière
		</Button>
		<Button variant="delete" w="100%" onClick={onSubmit}>
			Oui, je suis sûr
		</Button>
	</HStack>
);

export default DiagnosticCancelModalFooter;
