const inputArray = [
  7,
  {
    a: [1, 2, 3, "text"],
    b: 20,
    c: {
      d: [1, 2, 3],
    },
  },
  [[1, 2, 3, { a: [1, 2, 3, "text"] }]],
  [2, 4, 5, null, undefined, "ritesh"],
  15,
  null,
  undefined,
  true,
  false,
  NaN,
];

function flatNumbers(input) {
  let results = [];
  for (let i = 0; i < input.length; i++) {
    const currentElem = input[i];

    //Handle for falsy case
    if (
      currentElem === undefined ||
      currentElem === null ||
      currentElem === false
    ) {
      continue;
    }

    if (typeof currentElem === "number" && !isNaN(currentElem)) {
      results.push(currentElem);
      continue;
    }

    // Check Current element is holding an array
    if (Array.isArray(currentElem)) {
      const result = flatNumbers(currentElem);
      results = [...results, ...result];
      continue;
    }

    // Handle for objects
    if (typeof currentElem === "object") {
      const result = flatNumbers(Object.values(currentElem));
      results = [...results, ...result];
      continue;
    }
  }

  return results;
}

const flatArray = flatNumbers(inputArray);

console.log("flatArray:", flatArray);
