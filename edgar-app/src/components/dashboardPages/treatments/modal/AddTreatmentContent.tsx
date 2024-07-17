import { VStack, chakra } from '@chakra-ui/react';

const AddTreatmentContent = ({}: {}): JSX.Element => (
	<VStack w="100%" spacing="24px">
		<chakra.form onSubmit={} w="100%" h="100%">
			<VStack
				w="100%"
				spacing="16px"
				h="100%"
				sx={{
					'::-webkit-scrollbar': {
						width: '6px',
					},
					'::-webkit-scrollbar-track': {
						background: 'grey.100',
						borderRadius: '8px',
						marginTop: '64px',
						marginBottom: '64px',
					},
					'::-webkit-scrollbar-thumb': {
						background: 'grey.200',
						borderRadius: '8px',
					},
					'::-webkit-scrollbar-thumb:hover': {
						background: 'grey.300',
					},
				}}
			>
				<VStack>
					<VStack w="100%" spacing="24px"></VStack>
				</VStack>
			</VStack>
		</chakra.form>
	</VStack>
);

export default AddTreatmentContent;
