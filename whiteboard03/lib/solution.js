'use strict';

exports.traverse = function train(engine){
  let tot = 0;

  if (!engine ) return null;
  if (typeof engine !== 'object') return null;

  for (let tmp = engine; tmp; tmp = tmp.next) {
    let keys = Object.keys(tmp);
    if (!keys.includes('value') || !keys.includes('next')) return null;
    if (typeof tmp.value !== 'number') return null;
    tot += tmp.value;
  }
  return tot;
};