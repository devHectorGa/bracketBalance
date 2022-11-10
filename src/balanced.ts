import {
  CLOSE_BRACKETS,
  OPEN_BRACKETS,
  RELATIONAL_BRACKETS,
} from "./constants";

export function balanced(text: string): boolean {
  const stack = [];
  const arrText = text.split("");
  arrText.forEach((char) => {
    if (OPEN_BRACKETS.includes(char)) {
      stack.push(char);
    } else if (CLOSE_BRACKETS.includes(char)) {
      if (!stack.length) return false;

      if (stack[stack.length - 1] === RELATIONAL_BRACKETS[char]) {
        stack.pop();
      } else {
        return false;
      }
    }
  });

  return !stack.length;
}
