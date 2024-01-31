const paginationHandler = (data: never[], pageIndex: number, numberOfElementsPerPage: number): never[] =>
	data.slice((pageIndex - 1) * numberOfElementsPerPage, pageIndex * numberOfElementsPerPage);

export default paginationHandler;
