import * as Ix from '../Ix';
import * as test from 'tape-async';
const { expand } = Ix.iterable;
const { range } = Ix.iterable;
const { sequenceEqual } = Ix.iterable;
const { take } = Ix.iterable;

test('Iterable#expand with single return behavior', t => {
  const res = take(expand([0], x => [x + 1]), 10);
  t.true(sequenceEqual(res, range(0, 10)));
  t.end();
});

test('Iterable#expand with range return behavior', t => {
  const res = expand([3], x => range(0, x));
  const exp = [
    3,
    0, 1, 2,
    0,
    0, 1,
    0
  ];

  t.true(sequenceEqual(res, exp));
  t.end();
});
