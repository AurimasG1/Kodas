console.log('Welcome to magic world of async programming!');

// setTimeout(_ => {
// 	console.log('Hi from setTimeout');
// }, 1000);

console.log('end of the script');

const buyCheeseBurger = _ => {
	return new Promise((resolve, reject) => {
		setTimeout(_ => {
			console.log('Cheeseburger is ready');
			// resolve('Cheeseburger');
			reject('No Cheeseburger');
		}, 2000);
	});
};

buyCheeseBurger()
	.then(food => {
		console.log('I got my', food);
	})
	.catch(err => {
		console.log('She said:', err);
	})
	.finally(_ => {
		console.log('I go home now');
	});
