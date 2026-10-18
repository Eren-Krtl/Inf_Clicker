import "./main.css";
import { RandomBitsGeneration, BitsIntoValues, AddToValue } from './bits_logic.tsx';
import { useEffect, useState } from 'react' ;

function Main() {
	const [Bits, setBits] = useState(0);
	const [Value, setValue] = useState(new String("0"))
	const [Trophies, setTrophies] = useState(1)
	const [Rebirth, setRebirth] = useState(0)
	const [AllRebirth, setAllRebirth] = useState(0)
	const [CurrentRebirth, setCurrentRebirth] = useState(0)
	const [BitNumbers, setBitNumbers] = useState(1);
	const [ExtraBits, setExtraBits] = useState(1)
	const [ChanceToDouble, setChanceToDouble] = useState(0)
	const [CurrentBitsEarned, setCurrentBitsEarned] = useState(new String("0"))
	function BitButtonClicked() {
		let clickBits = RandomBitsGeneration(BitNumbers)
		setValue(clickBits)
		let clickValue = +BitsIntoValues(clickBits.toString())
		let clickValueExtra = clickValue + (ExtraBits-1)
		if(Math.random() <= ChanceToDouble/10){
			clickValueExtra *= 2
		}
		setCurrentBitsEarned(clickValueExtra.toString())
		setBits(AddToValue(Bits, clickValueExtra, Trophies)); {/ + before the Value makes the string a integer*/}
	}
	function RebirthButtonPressed() {
		if(Rebirth < 1){
			return
		}
		setBits(0)
		setValue("0")
		setBitNumbers(1)
		setExtraBits(1)
		setChanceToDouble(0)
		setCurrentBitsEarned("0")
		setCurrentRebirth(0)
		setTrophies((AllRebirth + 1))
	}
	function IfBitsIsEnough(neededValue:number, variable:number, toAdd:number) {
		if (Bits >= neededValue) {
			setBits(Bits => Bits - neededValue)
			return AddToValue(variable, toAdd, Trophies)
		}
		return variable
	}
	useEffect(() => {
		let NeededValue = 15**(AllRebirth+1) + 10*AllRebirth
		console.log(NeededValue);
		if(Bits >= NeededValue){
			setAllRebirth(AddToValue(AllRebirth, 1, 1))
			setRebirth(AddToValue(Rebirth, 1, 1))
			setCurrentRebirth(AddToValue(CurrentRebirth, 1, 1))
		}
	}, [Bits])
	return (
		<div id="Body">
			<h1 id="Title">Infinite Clicker</h1>
			<div id="MainMenu">
				<div id="ClickDiv">
					<p id="BitCounter">Bits: {Bits}</p>
					<p id="RandomBit">{Value}</p>
					<p id="CurrentlyEarned">Currently Earned: {CurrentBitsEarned}. Current multiplier: {Trophies}</p>
					<button id="ClickButton" onClick={BitButtonClicked}>Click to generate a bit string</button>
				</div>
				<div id="UpgradeDiv">
					<table id="UpgradeTable">
						<tr className="UpgradeRow">
							<td><button className="UpgradeButton" onClick={() => {setBitNumbers(IfBitsIsEnough(10**BitNumbers, BitNumbers, 1))}}>Upgrade: {10**BitNumbers}</button></td>
							<td className="Description">+1 Bit per roll: {BitNumbers-1}</td>
						</tr>
						<tr className="UpgradeRow">
							<td><button className="UpgradeButton" onClick={() => {setExtraBits(IfBitsIsEnough(5**ExtraBits, ExtraBits, 1))}}>Upgrade: {5**ExtraBits}</button></td>
							<td className="Description">+1 Bit gain per roll: {ExtraBits-1}</td>
						</tr>
						<tr className="UpgradeRow">
							<td><button className="UpgradeButton" onClick={() => {setChanceToDouble(IfBitsIsEnough(25**ChanceToDouble+1, ChanceToDouble, 1))}}>Upgrade: {25**ChanceToDouble}</button></td>
							<td className="Description">Chance to Double: {ChanceToDouble*10}%</td>
						</tr>
					</table>
					<div id="RebirthDiv">
						<button id="RebirthButton" onClick={() => RebirthButtonPressed()}>
							<span id="RebirthTitle">Rebirth: {Rebirth}</span>
							<br />
							<span id="RebirthDesc">You will get {CurrentRebirth} rebirth points. Rebirthing will reset your data. Next rebirth at {(15**(AllRebirth+1) + 10*AllRebirth)}</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Main
