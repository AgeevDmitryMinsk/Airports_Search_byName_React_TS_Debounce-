import {useEffect, useState} from "react";

export function useDebounce(value: string, delay = 300): string {
	const [debounced, setDebounced] = useState(value)
	useEffect(()=>{
		const handler = setTimeout(()=> setDebounced(value), delay)

		//чтобы setTimeout не отрабатывал каждый раз при изменении value буду его очищать:
		return ()=> clearTimeout(handler)
	}, [value, delay])
	return debounced
}
