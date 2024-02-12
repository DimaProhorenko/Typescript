// const carMakers: string[] = [];
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const cars: string[][] = [];

const carLetterCount = carMakers
	.map((item: string): number => item.length)
	.reduce((prevValue: number, item: number): number => prevValue + item, 0);

// Mixed types

// const importantDate: (Date | string)[] = [new Date(), '2023/02/01'];
const importantDate = [new Date(), '2023/02/01'];
