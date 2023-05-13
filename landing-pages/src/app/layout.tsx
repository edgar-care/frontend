import { Metadata } from 'next';

import ChakraProviders from './ChakraProviders';

export const metadata: Metadata = {
	title: 'edgar',
	description: "Gagne du temps avec l'assistant virtuel du pré-diagnostic",
	viewport: 'width=device-width, initial-scale=1.0',
	icons: '/assets/edgar-logo-tabs.svg',
};

const RootLayout = ({ children }: { children: JSX.Element }): JSX.Element => (
	<html lang="fr">
		<body>
			<ChakraProviders>{children}</ChakraProviders>
		</body>
	</html>
);

export default RootLayout;
