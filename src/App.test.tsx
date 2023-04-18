import { listAllPermutationOfANumber, SortedArray } from './functions';

it('Lists all permutations of a number', () => {
	expect(listAllPermutationOfANumber(123)).toEqual([123, 132, 213, 231, 312, 321]);
	expect(listAllPermutationOfANumber(112)).toEqual([112, 121, 211]);
});

describe('SortedArray class', () => {
	const test = new SortedArray([1, 2, 3, 6, 9, 2, 7, 1, 9, 10]);
	it('sorts the array automatically', () => {
		expect(test.numbersList).toEqual([1, 1, 2, 2, 3, 6, 7, 9, 9, 10]);
	});
	it('reverses the array', () => {
		expect(test.reversed()).toEqual([10, 9, 9, 7, 6, 3, 2, 2, 1, 1]);
		expect(test.numbersList).toEqual([1, 1, 2, 2, 3, 6, 7, 9, 9, 10]);
	});
});
