/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
const vowelsAndConsonants = s =>
	console.log(
		`${s.match(/[aeiou]/gi).join("\n")}\n${s
			.match(/[^aeiou0-9_\W]/gi)
			.join("\n")}`
	);

