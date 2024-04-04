const countMaxNumberPage = (data: unknown[], numberElementsPerPage: number): number =>
    Math.ceil(data.length / numberElementsPerPage) || 1;

export default countMaxNumberPage;