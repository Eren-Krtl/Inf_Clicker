import "./main.css";
import { Random_Bits_Generation, Bits_Into_Values } from './bits_logic.tsx';
import { useState } from 'react' ;

function Main() {
	const [Bytes, setBytes] = useState(0);
	const [Value, setValue] = useState(new String("0"))
	const [ByteNumbers, setByteNumbers] = useState(3);
	function ButtonClicked() {
		let click_bits = Random_Bits_Generation(ByteNumbers)
		setValue(click_bits)
		let click_value = Bits_Into_Values(click_bits)
		setBytes(Bytes => Bytes + +click_value); {/ + before the Value makes the string a integer*/}
	}
	return (
		<>
			<h1>Infinite Clicker</h1>
			<div id="MainMenu">
				<div id="ClickDiv">
					<p id="BitCounter">{Bytes}</p>
					<p id="RandomBit">{Value}</p>
					<button id="ClickButton" onClick={ButtonClicked}>Click to generate a bit string</button>
				</div>
				<div id="UpgradeDiv">
					<div>
						<button className="UpgradeButton">Get a byte</button>
						<p className="Description">Get +1 bytes per click</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Main
