import CustomMap from './CustomMap';
import User from './User';
import Company from './Company';

const user = new User();
const company = new Company();

// console.log(user);
// console.log(company);

const map = new CustomMap('map-container');

map.addMarker(user);
map.addMarker(company);
