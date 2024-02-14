import fs from 'fs';

abstract class CsvFileReader<T> {
	fileName: string;
	data: T[] = [];

	constructor(fileName: string) {
		this.fileName = fileName;
	}

	abstract mapRow(row: string[]): T;

	read(): void {
		this.data = fs
			.readFileSync(this.fileName, {
				encoding: 'utf-8',
			})
			.split('\n')
			.map((line): string[] => {
				return line.split(',');
			})
			.map(this.mapRow);
	}
}

export default CsvFileReader;
