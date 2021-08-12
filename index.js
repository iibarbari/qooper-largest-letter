function solution(s) {
  /* Split string to array  */
  const lettersArr = s.split("");

  /* Filter lowercase letters */
  /* Filter uppercase letters which do not have lowercase version */
  const filteredLetters = lettersArr.filter(
    (s) => lettersArr.includes(s.toLowerCase()) && s.toLowerCase() !== s
  );

  /* Remove the duplicates*/
  /* Sort letters */
  const sortedLetters = Array.from(new Set(filteredLetters)).sort();

  /* Count of possible answers */
  const possibleAnswerCount = sortedLetters.length;

  /* Return 'NO' if no possible answers */
  /* Return "largest" letter if there are possible answers */
  return possibleAnswerCount === 0
    ? "NO"
    : sortedLetters[possibleAnswerCount - 1];
}

function test() {
  const examples = [
    {
      s: "aaBabcDaA",
      r: "B"
    },
    {
      s: "Qooper",
      r: "NO"
    },
    {
      s: "WeTestCodErs",
      r: "T"
    }
  ];

  const tests = examples.filter(({ r, s }) => solution(s) !== r);

  if (tests.length === 0) {
    return "Tests passed 🎉";
  }

  return tests.map(({ r, s }) => {
    return `${s} should output ${r} instead of ${solution(s)}`;
  });
}

test();
