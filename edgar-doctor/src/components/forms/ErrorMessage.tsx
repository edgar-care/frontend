import { Text, TextProps } from '@chakra-ui/react';

type ErrorFieldMessageType = { warning?: boolean };

const ErrorMessageM = ({ warning, ...rest }: ErrorFieldMessageType & TextProps): JSX.Element => (
	<Text color={warning ? 'orange' : '#f87a79'} size="md" {...rest} />
);

export default ErrorMessageM;
