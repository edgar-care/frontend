import { extendTheme } from '@chakra-ui/react';

// Foundation overrides
import radius from 'theme/foundations/borderRadius';
import colors from 'theme/foundations/colors';
import fonts from 'theme/foundations/fonts';
import shadows from 'theme/foundations/shadows';

import Button from 'theme/components/button';
import Drawer from 'theme/components/drawer';
import FormLabel from 'theme/components/formLabel';
import Input from 'theme/components/input';
import Link from 'theme/components/link';
import Select from 'theme/components/select';
import Text from 'theme/components/text';
import UnorderedList from 'theme/components/unorderedList';

const breakpoints = {
	xs: '320px',
	ssm: '350px',
	ssm2: '415px',
	sm: '480px',
	sm2: '600px',
	smd: '700px',
	md: '768px',
	md2: '850px',
	md3: '960px',
	lg: '1024px',
	xl: '1280px',
	'2xl': '1440px',
	'3xl': '1600px',
	'4xl': '1920px',
	'5xl': '2560px',
};

const overrides = {
	shadows,
	fonts,
	radius,
	colors,
	breakpoints,
	components: {
		Button,
		Drawer,
		FormLabel,
		Input,
		Link,
		Select,
		Text,
		UnorderedList,
	},
};

export default extendTheme(overrides);
