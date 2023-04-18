import { useState } from 'react';
import './App.css';
import { generateFile, listAllPermutationOfANumber, SortedArray } from './functions';

function App() {
	const arrayToString = (array: number[]) => {
		return array.reduce((acc, curr, index) => {
			if (index === 0) return curr.toString();
			return acc + ', ' + curr.toString();
		}, '');
	};

	//task 1
	const [inputNumber, setInputNumber] = useState<string | undefined>();
	const [permutations, setPermutations] = useState<number[] | undefined>([]);
	const inputNumberChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputNumber(event.target.value);
	};
	const createPermutations = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!inputNumber) {
			setPermutations(undefined);
			return;
		}
		setPermutations(listAllPermutationOfANumber(Number(inputNumber)));
	};

	//task 2
	const [numberListInput, setNumberListInput] = useState<string | undefined>();
	const [numberList, setNumberList] = useState<number[]>([]);
	const numberListInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setNumberListInput(event.target.value);
	};

	const addNumber = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!numberListInput) return;
		setNumberList([...numberList, Number(numberListInput)]);
		setNumberListInput('');
	};

	const clearNumberList = () => {
		setNumberList([]);
	};

	const sorted = new SortedArray(numberList);

	//task 3
	const [inputFileSize, setInputFileSize] = useState<string | undefined>();

	const inputFileSizeChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputFileSize(event.target.value);
	};

	const createFile = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!inputFileSize) return;
		generateFile(Number(inputFileSize));
	};

	return (
		<div className='main'>
			<h1>Evolany Coding Test</h1>
			<a href=''>View the code by clicking here</a>
			<div className='App'>
				<div className='container'>
					<form onSubmit={createPermutations}>
						<label>Enter a number</label>
						<input type='number' value={inputNumber} onChange={inputNumberChangeHandler}></input>
						<button>Create Permutations</button>
					</form>
					{permutations?.map((permutation) => (
						<p>{permutation}</p>
					))}
				</div>
				<div className='container'>
					<form onSubmit={addNumber}>
						<label>Add a number</label>
						<input type='number' value={numberListInput} onChange={numberListInputChangeHandler}></input>
						<button>Add number</button>
						<button type='button' onClick={clearNumberList}>
							Clear list
						</button>
					</form>
					<table>
						<tbody>
							<tr>
								<td>Automatically sorted</td>
								<td>{arrayToString(sorted.numbersList)}</td>
							</tr>
							<tr>
								<td>Reversed</td>
								<td>{arrayToString(sorted.reversed())}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className='container'>
					<form onSubmit={createFile}>
						<label>Chose the file size of your file (MB)</label>
						<input type='number' value={inputFileSize} onChange={inputFileSizeChangeHandler}></input>
						<button>Create File</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default App;
