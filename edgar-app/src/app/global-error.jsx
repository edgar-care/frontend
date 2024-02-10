'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';
import Error from 'next/error';

const GlobalError = ({ error }) => {
	useEffect(() => {
		Sentry.captureException(error);
	}, [error]);

	return (
		<html>
			<body>
				<Error statusCode={500} />
			</body>
		</html>
	);
};

export default GlobalError;
