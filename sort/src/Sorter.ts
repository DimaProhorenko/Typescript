export interface Sortable {
	length: number;
	compare: (j: number) => boolean;
	swap: (j: number) => void;
}

abstract class Sorter {
	abstract compare(index: number): boolean;

	abstract swap(index: number): void;

	abstract length: number;

	sort(): void {
		const { length } = this;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.compare(j)) {
					this.swap(j);
				}
			}
		}
	}
}

export default Sorter;
