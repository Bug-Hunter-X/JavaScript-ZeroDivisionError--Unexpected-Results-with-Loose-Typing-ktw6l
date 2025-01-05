# JavaScript ZeroDivisionError: Unexpected Results with Loose Typing

This repository demonstrates a common JavaScript error related to zero division and loose typing.  While the code appears to correctly handle zero division, the lack of explicit error handling and type checking leads to unexpected results.

## The Bug
The `foo` function attempts to handle zero division by returning 0 if either input is 0. However, while this works for 0/0, it doesn't correctly handle other division-by-zero scenarios, which should ideally throw an error. The function silently returns Infinity instead of alerting to the problematic division by zero.

## The Solution
The solution involves adding explicit checks for division by zero and throwing an error if detected. This approach provides clearer error handling, preventing unexpected results.