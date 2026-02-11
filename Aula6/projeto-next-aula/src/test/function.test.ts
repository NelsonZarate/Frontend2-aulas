import getEvenOrOdd from "./function";

test ("should return if a number is Even or Odd ", () => {
	expect(getEvenOrOdd(2)).toBe("Even");
});