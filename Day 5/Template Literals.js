/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
const sides = (literals, ...expressions) =>
	(function(squareRoot, a) {
		return [(a - squareRoot) / 4, (a + squareRoot) / 4];
	})(Math.sqrt(expressions[1] ** 2 - 16 * expressions[0]), expressions[1]);

