import Login2FAPageContent from 'app/login-2fa/content';
import Login2faMobileProvider from 'app/login-2fa/Login2faMobileProvider';

const Login2FAPage = (): JSX.Element => (
	<Login2faMobileProvider>
		<Login2FAPageContent />
	</Login2faMobileProvider>
);

export default Login2FAPage;
