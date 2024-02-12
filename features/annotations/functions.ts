const add = (a: number, b: number): number => {
	return a + b;
};

function subtract(a: number, b: number): number {
	return a - b;
}

const divide = function (a: number, b: number): number {
	return a / b;
};

const forecast = {
	date: new Date(),
	weather: 'sunny',
};

const logWeather = ({
	date,
	weather,
}: {
	date: Date;
	weather: string;
}): void => {
	console.log(`${date} - ${weather}`);
};

logWeather(forecast);
