function Random_Byte_Generation(limit:number){
	var generated_number:String = new String("");
	for (let i = 0; i < limit; i++) {
		var to_add = Math.round(Math.random())
		generated_number = generated_number.concat(to_add.toString())
	}
	return generated_number
}

export default Random_Byte_Generation
