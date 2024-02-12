import LinkedList from './LinkedList';
import NumberCollection from './NumberCollection';
import Sorter from './Sorter';
import Str from './Str';

const ll = new LinkedList();
ll.add(5);
ll.add(10);
ll.add(3);
ll.add(-5);
ll.add(345);
ll.add(-32);
const arr = new NumberCollection([5, 2, 23, 14, 1, 4, -4]);
const simpleString = new Str('Xaayb');
const sorter = new Sorter(ll);

sorter.sort();

ll.print();
