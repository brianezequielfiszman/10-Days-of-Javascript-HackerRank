const getLetter = s =>
	s.match(/^[aeiou]/)
		? "A"
		: s.match(/^[bcdfg]/)
			? "B"
			: s.match(/^[hjklm]/)
				? "C"
				: "D";

