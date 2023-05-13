import { HStack, Icon, Text, useBreakpointValue, VStack, Wrap, WrapItem } from '@chakra-ui/react';
import { BsEnvelopeAtFill, BsHeartFill, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { Image, Link } from '@chakra-ui/next-js';

import NewsletterSection from './NewsletterSection';
import HealthSection from './HealthSection';
import ProjectSection from './ProjectSection';
import CustomerServiceSection from './CustomerServiceSection';

const Footer = (): JSX.Element => {
	const desktopFooter = useBreakpointValue({ base: false, '2xl': true });
	const mobileFooter = useBreakpointValue({ base: true, lg: false });

	return (
		<VStack
			bg="blue.700"
			spacing="64px"
			p={{ base: '32px 32px 0px 32px', xl: '64px 64px 0px 64px' }}
			w="100%"
			borderRadius={{ base: '32px 32px 0px 0px', xl: '48px 48px 0px 0px' }}
		>
			{desktopFooter ? (
				<HStack spacing="128px" align="start">
					<NewsletterSection />
					<HealthSection />
					<ProjectSection />
					<CustomerServiceSection />
				</HStack>
			) : (
				<VStack spacing={{ base: '64px', xl: '128px' }}>
					<NewsletterSection />
					<Wrap w="100%" spacing={{ base: '64px', xl: '128px' }} justify={{ base: 'start', sm: 'center' }}>
						<WrapItem>
							<HealthSection />
						</WrapItem>
						<WrapItem>
							<ProjectSection />
						</WrapItem>
						<WrapItem>
							<CustomerServiceSection />
						</WrapItem>
					</Wrap>
				</VStack>
			)}
			{mobileFooter ? (
				<VStack w="100%" justify="space-between" py="16px" spacing="24px">
					<Image src="/assets/logo/white-edgar-logo.svg" alt="edgar-logo" height={75} width={150} />
					<HStack w="100%" spacing="24px" justify="center">
						{/* TODO: update link */}
						<Link href="mailto:">
							<Icon as={BsEnvelopeAtFill} w="24px" h="auto" color="white" />
						</Link>
						<Link href="">
							<Icon as={BsLinkedin} w="24px" h="24px" color="white" />
						</Link>
						<Link href="">
							<Icon as={BsInstagram} w="24px" h="24px" color="white" />
						</Link>
					</HStack>
					<HStack justify="center" borderTop="1px solid" borderColor="white" p="8px 0px">
						<Text size="lg" color="white">
							Fait à Lyon & Mulhouse avec
						</Text>
						<Icon as={BsHeartFill} color="white" h="20px" w="auto" />
					</HStack>
				</VStack>
			) : (
				<HStack w="100%" justify="space-between" py="16px">
					<HStack w="325px">
						<Text size="xl" color="white">
							Fait à Lyon & Mulhouse avec
						</Text>
						<Icon as={BsHeartFill} color="white" h="20px" w="auto" />
					</HStack>
					<Image src="/assets/logo/white-edgar-logo.svg" alt="edgar-logo" height={75} width={150} />
					<HStack w="325px" spacing="24px" justify="end">
						{/* TODO: update link */}
						<Link href="mailto:">
							<Icon as={BsEnvelopeAtFill} w="32px" h="auto" color="white" />
						</Link>
						<Link href="">
							<Icon as={BsLinkedin} w="32px" h="32px" color="white" />
						</Link>
						<Link href="">
							<Icon as={BsInstagram} w="32px" h="32px" color="white" />
						</Link>
					</HStack>
				</HStack>
			)}
		</VStack>
	);
};

export default Footer;
