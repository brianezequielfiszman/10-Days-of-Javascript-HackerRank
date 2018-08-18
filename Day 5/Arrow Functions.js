/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
const modifyArray = nums =>	nums.map(elem => (elem % 2 ? elem * 3 : elem * 2));
