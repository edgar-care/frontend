import { HStack, Icon, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { BsDashSquare, BsPlusSquare } from 'react-icons/bs';

import { type FAQQuestionType } from 'types/homePage/FAQQuestionType';

const QAQuestionCard = ({ question }: { question: FAQQuestionType }): JSX.Element => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<VStack
			w="100%"
			borderBottom="1px solid"
			borderColor="grey.200"
			p={{ base: '16px 0px', xl: '16px' }}
			spacing="24px"
		>
			<HStack w="100%" justify="space-between">
				<Text
					size="xl"
					cursor="pointer"
					onClick={() => onToggle()}
					id={`edgar-homePage-QATitle-${question.id}-text`}
				>
					{question.title}
				</Text>
				{isOpen ? (
					<Icon
						as={BsDashSquare}
						w="32px"
						h="32px"
						cursor="pointer"
						onClick={() => onToggle()}
						id={`edgar-homePage-QAOpenButton-${question.id}-svg`}
					/>
				) : (
					<Icon
						as={BsPlusSquare}
						w="32px"
						h="32px"
						cursor="pointer"
						onClick={() => onToggle()}
						id={`edgar-homePage-QACloseButton-${question.id}-svg`}
					/>
				)}
			</HStack>
			{isOpen && (
				<VStack w="100%" align="start">
					<Text size="lg" w="100%" id={`edgar-homePage-QADescription-${question.id}-text`}>
						{question.description}
					</Text>
				</VStack>
			)}
		</VStack>
	);
};

export default QAQuestionCard;
