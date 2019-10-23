const Jellybeans = 510;
function getJellyBeans(remove) {
	let newJellybeans = Jellybeans - remove;
	return newJellybeans;
}
getJellyBeans(20);
// the function below gets the amount of Lollopops added to the bin
const Lollipops = 4;
function getLollipops(add) {
	let newLollipops = Lollipops + add;
	return newLollipops;
}
getLollipops(600);
// the function below gets the amount of Lollipops remaining when a particular quantity is removed
function removeLollipops(remove) {
	let newLollipops = Lollipops - remove;
	return newLollipops;
}
removeLollipops(60);