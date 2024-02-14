export const dateStringToDate = (
	dateString: string,
	separator: string = '/'
): Date => {
	const [day, month, year] = dateString
		.split(separator)
		.map((item: string): number => +item);
	return new Date(year, month - 1, day);
};
