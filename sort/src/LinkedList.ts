import Sorter from './Sorter';

class SimpleNode {
	next: SimpleNode | null = null;

	constructor(public data: number) {}
}

class LinkedList extends Sorter {
	head: SimpleNode | null = null;
	length = 0;

	add(data: number): void {
		const nextNode = new SimpleNode(data);

		if (!this.head) {
			this.head = nextNode;
			return;
		}

		let tail = this.head;

		while (tail.next) {
			tail = tail.next;
		}

		tail.next = nextNode;
		this.length++;
	}

	at(index: number): SimpleNode | null {
		if (!this.head || this.length < index + 1) {
			throw new Error('Index out of bounds');
		}

		let node: SimpleNode | null = this.head;
		let counter = 0;

		while (node) {
			if (counter === index) {
				return node;
			}

			counter++;
			node = node.next;
		}

		throw new Error('Index out of bounds');
	}

	compare(index: number): boolean {
		if (!this.head || index + 1 > this.length) {
			throw new Error('List is empty');
		}
		const leftNode = this.at(index);
		const rightNode = this.at(index + 1);

		if (!leftNode || !rightNode) {
			return false;
		}

		return leftNode.data > rightNode.data;
	}

	swap(index: number): void {
		const leftNode = this.at(index);
		const rightNode = this.at(index + 1);

		if (leftNode && rightNode) {
			const leftNodeData = leftNode.data;
			leftNode.data = rightNode.data;
			rightNode.data = leftNodeData;
		}
	}

	print(): void {
		if (!this.head) {
			console.log('[]');
			return;
		}

		let tail: SimpleNode | null = this.head;
		console.log('[');
		for (let i = 0; i < this.length; i++) {
			if (tail) {
				console.log(tail?.data);
				tail = tail?.next || null;
			} else {
				break;
			}
		}
		console.log(']');
	}
}

export default LinkedList;
