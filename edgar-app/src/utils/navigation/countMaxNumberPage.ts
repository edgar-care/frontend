const countMaxNumberPage = (data: never[], numberElementsPerPage: number): number =>
	Math.ceil(data.length / numberElementsPerPage) || 1;

export default countMaxNumberPage;
