/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
const getSecondLargest = nums =>
	nums.length > 1
		? (function secondLargest(sortedNums, n) {
				return sortedNums[n] !== sortedNums[n - 1] || n === 1
					? sortedNums[n - 1]
					: secondLargest(sortedNums, --n);
		  })(nums.map(Number).sort((a, b) => a - b), nums.length - 1)
		: nums[0];

