const profile = {
	name: 'Dima',
	age: 24,
	coords: {
		lat: 15,
		lng: 20,
	},
	setAge(age: number): void {
		this.age = age;
	},
};

// Default types are what you need
// const { age, coords, setAge } = profile;

// If you need to give types
const {
	age,
	coords: { lat, lng },
	setAge,
}: {
	age: number;
	coords: { lat: number; lng: number };
	setAge: (age: number) => void;
} = profile;

console.log(setAge);
