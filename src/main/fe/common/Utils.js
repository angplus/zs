

export function getDate(stamp) {
	const date = new Date(stamp * 1000);
	return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

export function formateNumber(number, decimal) {
	return number && number.toFixed(decimal || 2);
}
