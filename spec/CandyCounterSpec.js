// the function below gets the amount of Jellybeans removed from the bin




describe('When someone removes 20 Jelly beans candies from a candy bin of 510 Jelly beans', function() {
	it('should automatically decrease by 20', function() {
		// game.roll(20, 0);
		getJellyBeans(20);
		expect(getJellyBeans(20)).toEqual(490);
	});
});

describe('When an employee adds 600 Lollipops candies to a candy bin of 4 Lollipops', function() {
	it('should automatically increase by 600', function() {
		// test
		getLollipops(600);
		expect(getLollipops(600)).toEqual(604);
	});
});

describe('Removing candies of one type', function() {
	it("Doesn't change the quantity of the other candy type", function() {
		// test
		getJellyBeans(20);
		expect(Lollipops).toEqual(4)
    });
    it("Doesn't change the quantity of the other candy type", function() {
		// test
		removeLollipops(60);
		expect(Jellybeans).toEqual(510)
	});
});
