import React, {useState} from "react";

interface InputReturn {
	value: string,
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	setValue: (value: string) => void
}

export const useInput = (initialValue = ''): InputReturn => {
	const [value, setValue] = useState(initialValue)

	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		setValue(e.target.value)
	}

	return {
		value,
		onChange,
		setValue
	}
}
