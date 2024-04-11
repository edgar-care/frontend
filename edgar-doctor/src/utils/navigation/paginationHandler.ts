const paginationHandler = <Type>(data: Type[], pageIndex: number, numberOfElementsPerPage: number): Type[] =>
	data.slice((pageIndex - 1) * numberOfElementsPerPage, pageIndex * numberOfElementsPerPage);

export default paginationHandler;
