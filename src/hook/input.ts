import React, {useState} from "react";

interface InputReturn {
	value: string,
	onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void
}

export const useInput = (initialValue = ''): InputReturn => {
	const [value, setValue] = useState(initialValue)

	function onChange(e:React.ChangeEvent<HTMLInputElement>) {
		//console.log(e.target.value)
		setValue(e.target.value)
	}
	return {
		value,
		onChange
	}
}
