import "./main.css"
import Random_Byte_Generation from "./byte_logic.tsx"
import { useState } from 'react' ;

function Main() {
	const [Bytes, setBytes] = useState(0);
	const [Value, setValue] = useState(new String("0"))
	const [ByteNumbers, setByteNumbers] = useState(1);
	function ButtonClicked() {
		var click_value = Random_Byte_Generation(ByteNumbers)
		setValue(click_value)
		setBytes(Bytes => Bytes + +click_value); {/ + before the Value makes the string a integer*/}
	}
	return (
		<>
			<h1>Infinite Clicker</h1>
			<div id="MainMenu">
				<div id="ClickDiv">
					<p id="ByteCounter">{Bytes}</p>
					<p id="RandomByte">{Value}</p>
					<button id="ClickButton" onClick={ButtonClicked}>Click to generate a byte</button>
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
