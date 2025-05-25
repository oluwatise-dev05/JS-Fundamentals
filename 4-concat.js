const args = ['c', 'cool'];

const arg1 = args[0];
const arg2 = args[1];
console.log(`${arg1 || 'undefined'} is ${arg2 || 'undefined'}`);


const args2 = ['c'];
const arg1_2 = args2[0];
const arg2_2 = args2[1];
console.log(`${arg1_2 || 'undefined'} is ${arg2_2 || 'undefined'}`);

const args3 = [];
const arg1_3 = args3[0];
const arg2_3 = args3[1];
console.log(`${arg1_3 || 'undefined'} is ${arg2_3 || 'undefined'}`);
