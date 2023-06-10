import { useState } from 'react';
import { Button, FormControl, FormLabel, Input, Stack, Text, Textarea, useToast, VStack } from '@chakra-ui/react';

import sendContactForm from 'utils/sendContactForm';

const ContactFormSection = (): JSX.Element => {
	const [contactName, setContactName] = useState('');
	const [contactEmail, setContactEmail] = useState('');
	const [contactMessage, setContactMessage] = useState('');

	const toast = useToast({ duration: 3000, isClosable: true });

	return (
		<VStack w="100%" spacing="32px" align="start" id="form">
			<VStack spacing="32px" w="100%" align="start">
				<Text size={{ base: 'bold2xl', lg: '3xl' }} id="edgar-contactPage-formTitle-text">
					Une question ? Besoin d’aide ?
				</Text>
				<Text size={{ base: 'boldLg', lg: 'bold2xl' }} maxW="550px" id="edgar-contactPage-formSubtitle-text">
					Contactez-nous via le formulaire ci-dessous
				</Text>
			</VStack>
			<VStack spacing="16px" align="start" w={{ base: '100%', lg: '900px' }}>
				<Stack direction={{ base: 'column', lg: 'row' }} spacing={{ base: '16px', lg: '64px' }} w="100%">
					<VStack w="100%" align="start">
						<FormControl isRequired>
							<FormLabel size="boldLg" id="edgar-contactPage-formName-text">
								Votre prénom & nom
							</FormLabel>
							<Input
								type="text"
								w="100%"
								maxLength={50}
								value={contactName}
								placeholder="Edgar L’assistant-numérique"
								border="2px solid"
								borderColor="blue.500"
								borderRadius="12px"
								_placeholder={{
									color: 'gray.400',
								}}
								_hover={{
									borderColor: 'blue.500',
								}}
								onChange={(e) => setContactName(e.target.value)}
								id="edgar-contactPage-formName-input"
							/>
						</FormControl>
					</VStack>
					<VStack w="100%" align="start">
						<FormControl isRequired>
							<FormLabel id="edgar-contactPage-formEmail-text" size="boldLg">
								Votre adresse mail
							</FormLabel>
							<Input
								type="text"
								w="100%"
								maxLength={50}
								value={contactEmail}
								placeholder="prenom.nom@gmail.com"
								border="2px solid"
								borderColor="blue.500"
								borderRadius="12px"
								_placeholder={{
									color: 'gray.400',
								}}
								_hover={{
									borderColor: 'blue.500',
								}}
								onChange={(e) => setContactEmail(e.target.value)}
								id="edgar-contactPage-formEmail-input"
							/>
						</FormControl>
					</VStack>
				</Stack>
				<Textarea
					maxW="100%"
					h="150px"
					value={contactMessage}
					maxLength={1000}
					placeholder="Votre message"
					border="2px solid"
					borderColor="blue.500"
					borderRadius="12px"
					_placeholder={{
						color: 'gray.400',
					}}
					_hover={{
						borderColor: 'blue.500',
					}}
					onChange={(e) => setContactMessage(e.target.value)}
					id="edgar-contactPage-formMessage-input"
				/>
				<Button
					w={{ base: '100%', sm: 'auto' }}
					variant="validate"
					onClick={() => {
						sendContactForm(contactEmail, contactName, contactMessage).then((res) => {
							toast(res);
							if (res.status !== 'error') {
								setContactEmail('');
								setContactName('');
								setContactMessage('');
							}
						});
					}}
					id="edgar-contactPage-formSubmit-button"
				>
					Envoyer mon message
				</Button>
			</VStack>
		</VStack>
	);
};

export default ContactFormSection;
