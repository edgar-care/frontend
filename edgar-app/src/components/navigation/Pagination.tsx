import { Dispatch, SetStateAction } from 'react';
import { Button, HStack, Icon, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const Pagination = ({
	pageIndex,
	maxPageNumbers,
	setPageIndex,
	variant = 'primary',
	size = 'big',
}: {
	pageIndex: number;
	maxPageNumbers: number;
	setPageIndex: Dispatch<SetStateAction<number>>;
	variant?: 'primary' | 'secondary';
	size?: 'big' | 'small';
}): JSX.Element => (
	<HStack
		spacing="24px"
		w="100%"
		p={size === 'big' ? '16px 32px' : '8px 16px'}
		borderRadius="16px"
		bg={variant === 'primary' ? 'blue.700' : 'white'}
		border={variant === 'primary' ? 'none' : '2px solid'}
		borderColor="blue.200"
		justify="center"
	>
		<Button variant="unstyled" onClick={() => setPageIndex((prev) => (prev - 1 < 1 ? 1 : prev - 1))}>
			<Icon as={ChevronLeftIcon} w="16px" h="16px" color={variant === 'primary' ? 'white' : 'black'} />
		</Button>
		<HStack spacing="16px">
			{Array.from(Array(maxPageNumbers + 1).keys())
				.slice(
					pageIndex === 1 ? 1 : pageIndex === maxPageNumbers ? pageIndex - 2 : pageIndex - 1,
					(pageIndex < 2 ? 1 : pageIndex - 1) + 3,
				)
				.map((value) => (
					<Button variant="unstyled" key={value} onClick={() => setPageIndex(value)}>
						<Text
							size="lg"
							color={
								variant === 'primary'
									? pageIndex === value
										? 'green.400'
										: 'white'
									: pageIndex === value
										? 'blue.700'
										: 'black'
							}
						>
							{value}
						</Text>
					</Button>
				))}
		</HStack>
		<Button
			variant="unstyled"
			onClick={() => setPageIndex((prev) => (prev + 1 > maxPageNumbers ? maxPageNumbers : prev + 1))}
		>
			<Icon as={ChevronRightIcon} w="16px" h="16px" color={variant === 'primary' ? 'white' : 'black'} />
		</Button>
	</HStack>
);

export default Pagination;

/**
 * How to use it
 *
 * const PaginationUse = () => {
 *  const data = []
 * 	const [pageIndex, setPageIndex] = useState(1);
 *
 * 	return (
 * 	    <>
 * 	        {paginationHandler(data, pageIndex, 10).map((item, index) => (<>...</>))}
 * 		    <Pagination
 * 		    	pageIndex={pageIndex}
 * 		    	pageNumbers={countMaxNumberPage(data, 10)}
 * 		    	setPageIndex={setPageIndex}
 * 		    />
 *   	</>
 * }
 */
