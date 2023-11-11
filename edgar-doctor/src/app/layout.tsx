import { Metadata } from 'next';

import Providers from 'app/Providers';

export const metadata: Metadata = {
	title: 'edgar',
	description: "Gagne du temps avec l'assistant virtuel du pré-diagnostic",
	viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
	icons: '/assets/logo/edgar-logo-tabs.svg',
};

const RootLayout = ({ children }: { children: JSX.Element }): JSX.Element => (
	<html lang="fr">
		<body>
			<Providers>{children}</Providers>
		</body>
	</html>
);

export default RootLayout;
