import { type Dispatch, type SetStateAction } from 'react';
import { Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';

import SearchIcon from 'assets/icons/SearchIcon';

const SearchBar = ({
	placeholder,
	id,
	setSearchTerm,
}: {
	placeholder: string;
	id: string;
	setSearchTerm: Dispatch<SetStateAction<string>>;
}): JSX.Element => (
	<InputGroup w="100%">
		<Input placeholder={placeholder} onChange={(e) => setSearchTerm(e.target.value)} id={id} />
		<InputRightElement>
			<Icon as={SearchIcon} w="16px" h="16px" />
		</InputRightElement>
	</InputGroup>
);

export default SearchBar;
