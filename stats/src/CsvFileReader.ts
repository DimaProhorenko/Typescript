import fs from 'fs';

class CsvFileReader {
	fileName: string;
	data: string[][] = [];

	constructor(fileName: string) {
		this.fileName = fileName;
	}

	read(): void {
		this.data = fs
			.readFileSync(this.fileName, {
				encoding: 'utf-8',
			})
			.split('\n')
			.map((line): string[] => {
				return line.split(',');
			});
	}
}

export default CsvFileReader;
