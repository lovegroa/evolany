// Task 1. All permutations of a list of number
// Notes: the purpose of this question is to check your algorithm understanding, so don't use official modules such like itertools

// - Input : a list of numbers (1,2,3 e.g.)
// - Output : print all permutations of these numbers
//   - 123/132/213/231/312/321
// - Conditions :
//   - We do not know the size of the list, it can be any
//   - No duplicated number in the list
//   - Fewer steps and less code is better

export const listAllPermutationOfANumber = (number: number): number[] => {
	const result: number[] = [];
	const numberArray = number.toString().split('');

	const permute = (numberArray: string[], resultString: string) => {
		if (!numberArray.length) {
			result.push(Number(resultString));
			return;
		}
		const numbersUsed: string[] = [];
		numberArray.forEach((number, index) => {
			if (numbersUsed.includes(number)) return;
			numbersUsed.push(number);
			const tempResultString = resultString + number;
			permute(
				numberArray.filter((_, index2) => index2 !== index),
				tempResultString
			);
		});
	};

	permute(numberArray, '');
	return result;
};

// Task 2. Declare a class of SortedArray
// - Input : a list of numbers
// - Output :
//   - Declare a class which has a constructor that accepts a list of numbers as arguments
//   - Sort the list automatically
//   - Provides 2 member functions to use
//     - sorted() : get sorted array
//     - reversed() : get a reversed array without changing the sorted list.
// - Condition :
//   - WITHOUT using any official functions like sort() assort() reverse()...
//   - Use OOP to declare a class with member functions
//   - The size of the list could be millions of elements
//   - Fewer steps and less code is better
// - Checkpoints
//   -  sorting algorithm

export class SortedArray {
	public numbersList: number[];

	constructor(numbers: number[]) {
		this.numbersList = numbers;
		this.numbersList = this.sorted();
	}

	public sorted() {
		for (let i = 0; i < this.numbersList.length; i++) {
			for (let j = 0; j < this.numbersList.length; j++) {
				if (this.numbersList[j] > this.numbersList[j + 1]) {
					let temp = this.numbersList[j];
					this.numbersList[j] = this.numbersList[j + 1];
					this.numbersList[j + 1] = temp;
				}
			}
		}
		return this.numbersList;
	}
	public reversed() {
		const result: number[] = [];
		for (let i = this.numbersList.length - 1; i >= 0; i--) {
			result.push(this.numbersList[i]);
		}
		return result;
	}
}

// 3.  Generate a file
// Notes: the purpose of this question is to generate and download a file from your browser, not your backend

// - Input : specify the number of megabytes to be generated
// - Output : A file of the specified size
// - Condition :
//   - Sequenced hex number only
//   - Example of decimal to hex: if decimal range is 1-1,000,000 Then the hex range is 00000001-000F4240
//   - every hex number takes 8bytes
//   - 1GB =1024 * 1024 bytes
//   - if you are using js in browser, let user download that file after generating

export const generateFile = (size: number) => {
	const fileSizeInBytes = ((1024 * 1024) / 8) * size; //added the divide by 8 as each character is 8 bits
	let fileContent = '';
	for (let i = 1; i <= fileSizeInBytes; i++) {
		const hexNumber = i.toString(16).toUpperCase().padStart(8, '0');
		fileContent += hexNumber;
	}
	const file = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
	const fileUrl = URL.createObjectURL(file);
	const link = document.createElement('a');
	link.href = fileUrl;
	link.setAttribute('download', `${size}MB File.txt`);
	document.body.appendChild(link);
	link.click();
	URL.revokeObjectURL(fileUrl);
};

// function MyComponent() {
// 	return <button onClick={generateFile}>Generate file</button>;
// }
