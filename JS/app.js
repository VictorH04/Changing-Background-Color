// ! The color-array
const colors = [
	'#0048BA',
	'#7CB9E8',
	'#B0BF1A',
	'#B284BE',
	'#C46210',
	'#F0F8FF',
	'#E52B50',
	'#9F2B68',
	'#D3212D',
	'#3B7A57',
	'#FFBF00',
	'#9966CC',
	'#A4C639',
	'#665D1E',
	'#841B2D',
	'#7FFFD4',
	'#00FFFF',
	'#007FFF',
	'#FF9966',
	'#FF91AF',
	'#F4C2C2',
	'#DA1884',
	'#2E5894',
	'#967117',
	'#000000',
	'#3D0C02',
	'#BFAFB2',
	'#A57164',
	'#318CE7',
	'#66FF00',
	'#006A4E',
	'#FFAA1D',
	'#7BB661',
	'#FFEF00',
	'#FFF600',
	'#E4D00A',
	'#CE2029',
	'#00FF40',
	'#CC474B',
	'#BF00FF'
];

// ! Getting the button
const btn = document.getElementById('btn');
let lastValue;

btn.addEventListener('click', generateNum);

function generateNum() {
	// ! Making the colors randomized when button is clicked.
	let random = Math.floor(Math.random() * colors.length);

	// ! Compare random to lastValue, if it equals generate again.
	if (random === lastValue) {
		return generateNum();
	}
	console.log(random);
	lastValue = random;

	// ! Selecting the body
	const body = document.body;
	// ! Changing the body-color with the application :)
	body.style.backgroundColor = colors[random];
}
