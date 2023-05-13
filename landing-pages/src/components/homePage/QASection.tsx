import { Text, VStack } from '@chakra-ui/react';

import questions from 'config/homePage/QAQuestions';

import QAQuestionCard from './QAQuestionCard';

const QASection = (): JSX.Element => (
	<VStack p={{ base: '32px 32px', md: '32px 64px', xl: '96px 128px' }} w="100%">
		<VStack w="100%" spacing="96px" align="start">
			<Text size={{ base: '3xl', xl: '6xl' }}>QUESTIONS FRÉQUEMMENT POSÉES</Text>
			<VStack w="100%" spacing="24px">
				{questions.map((question) => (
					<QAQuestionCard question={question} key={question.title} />
				))}
			</VStack>
		</VStack>
	</VStack>
);

export default QASection;
