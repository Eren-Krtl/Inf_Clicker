export function RandomBitsGeneration(limit:number){
	let generatedNumber:String = new String("");
	for (let i = 0; i < limit; i++) {
		let to_add = Math.round(Math.random())
		generatedNumber = generatedNumber.concat(to_add.toString())
	}
	return generatedNumber
}

export function BitsIntoValues(value:string){
	let finalNumber = 0
	let revValue = value.split('').reverse().join('')
	for (let i = 0; i < revValue.length; i++){
		let numberStr = +revValue[i]
		finalNumber += ((2**i) * numberStr)
	}
	return finalNumber
}

export function AddToValue(value:number, toAdd:number, multiplier:number){
	value = (value+toAdd)*multiplier
	return value
}
