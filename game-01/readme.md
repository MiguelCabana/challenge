# Game 01

Find Two Numbers That Sum to a Target (found_N)
This PHP script implements a function called found_N, which searches for two numbers in an array that sum up to a given target number.

How It Works
The found_N function takes two parameters:

$M: An array of numbers.
$N: An integer representing the target sum.
The function iterates through the array and looks for two numbers that, when added, equal $N.

If a valid pair is found, it returns an array containing those two numbers. If no pair is found, it returns an empty array.

The script prints the result to the console.

Usage
Define the array of numbers ($M) and the target sum ($N):

php
$M = [10, 5, 4, 3];
$N = 15;
Call the found_N function:

php
$result = found_N($M, $N);
The script will check if a valid pair is found:

If found, it will print the pair in the format [x, y].
If not found, it will display a message stating that no pair sums to $N.
Execution Example
With the values:

php
$M = [10, 5, 4, 3];
$N = 15;
The output will be:

makefile

Result: [10,5]
Requirements
PHP 7.0 or higher.
Notes
If the array contains multiple pairs that sum to $N, the function will return the first pair it finds.
The script does not handle duplicate values in the array specially, so they are considered valid if they form part of a pair that meets the condition.