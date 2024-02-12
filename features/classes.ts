class Car {
	drive(): void {
		console.log('Driving');
	}
}

class SportCar extends Car {}

const honda = new Car();
const porshe = new SportCar();
porshe.drive();
