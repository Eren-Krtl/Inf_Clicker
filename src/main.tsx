import "./main.css";
import { RandomBitsGeneration, BitsIntoValues, AddToValue } from './bits_logic.tsx';
import { useState } from 'react' ;

function Main() {
	const [Bits, setBits] = useState(0);
	const [Value, setValue] = useState(new String("0"))
	const [Trophies, setTrophies] = useState(1)
	const [BitNumbers, setBitNumbers] = useState(1);
	function BitButtonClicked() {
		let click_bits = RandomBitsGeneration(BitNumbers)
		setValue(click_bits)
		let click_value = BitsIntoValues(click_bits)
		setBits(AddToValue(Bits, +click_value, 1)); {/ + before the Value makes the string a integer*/}
	}
	function IfBitsIsEnough(neededValue:number, variable:number, toAdd:number) {
		if (Bits >= neededValue) {
			setBits(Bits => Bits - neededValue)
			return AddToValue(variable, toAdd, Trophies)
		}
		return variable
	}
	return (
		<div id="Body">
			<h1 id="Title">Infinite Clicker</h1>
			<div id="MainMenu">
				<div id="ClickDiv">
					<p id="BitCounter">{Bits}</p>
					<p id="RandomBit">{Value}</p>
					<button id="ClickButton" onClick={BitButtonClicked}>Click to generate a bit string</button>
				</div>
				<table id="UpgradeTable">
					<tr>
						<td>Upgrade Description</td>
						<td>Upgrade Button</td>
					</tr>
					<tr className="UpgradeRow">
						<td><button className="UpgradeButton" onClick={() => {setBitNumbers(IfBitsIsEnough(10, BitNumbers, 1))}}>Upgrade</button></td>
						<td className="Description">+1 Bit per roll</td>
					</tr>
					<tr className="UpgradeRow">
						<td><button className="UpgradeButton">Upgrade</button></td>
						<td className="Description">+1 Bit gain per roll</td>
					</tr>
				</table>
			</div>
		</div>
	);
}

export default Main
