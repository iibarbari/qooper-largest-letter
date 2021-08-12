import solution from './solution';
import test from './test';

const testResult = test([
  { s: 'aaBabcDaA', r: 'B' },
  { s: 'Qooper', r: 'NO' },
  { s: 'WeTestCodErs', r: 'T' },
]);

const exampleResult = solution('start of SOMETHING new');

console.log({ testResult, exampleResult });
