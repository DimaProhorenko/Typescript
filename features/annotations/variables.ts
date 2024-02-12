let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let nope: undefined = undefined;

// Built-in objects
const now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 23, 12, 4, 99];

// Object literals
let point: { x: number; y: number } = {
	x: 10,
	y: 20,
};

// Functions
const logNumber: (i: number) => void = (i) => {
	console.log(i);
};

// When to use annotations
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

// When we declare a variable on one line and initialize it later
const words = ['red', 'green', 'purple'];
let foundWord: boolean;

words.forEach((item) => {
	if (item === 'blue') {
		foundWord = true;
	}
});

const nums = [-10, -9, -34, 24, -3];
let positive: undefined | number;

positive = nums.find((item) => item > 0);

console.log(positive);
