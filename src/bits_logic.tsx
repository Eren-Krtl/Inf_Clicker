export function Random_Bits_Generation(limit:number){
	let generated_number:String = new String("");
	for (let i = 0; i < limit; i++) {
		let to_add = Math.round(Math.random())
		generated_number = generated_number.concat(to_add.toString())
	}
	return generated_number
}

export function Bits_Into_Values(value:string){
	let finalNumber = 0
	let revValue = value.split('').reverse().join('')
	for (let i = 0; i < revValue.length; i++){
		let numberStr = +revValue[i]
		finalNumber += ((2**i) * numberStr)
	}
	return finalNumber
}
