export function flatten(array) {
	return array.reduce((accumulator, value) => {
		return accumulator.concat(Array.isArray(value) ? flatten(value) : value);
	}, []);
}

export function range(start, end, step = 1) {
	return Array.apply(0, Array(Math.ceil((end - start) / step))).map((empty, index) => index * step + start);
}