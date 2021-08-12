import solution from './solution';

type Test = {
  r: string,
  s: string,
};

export default function test(examples: Test[]): Array<string> | string {
  const tests = examples.filter(({ r, s }) => solution(s) !== r);

  if (tests.length === 0) {
    return 'Tests passed 🎉';
  }

  return tests.map(({ r, s }) => {
    return `${s} should output ${r} instead of ${solution(s)}`;
  });
}

