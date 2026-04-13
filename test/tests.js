import {
  syntax,
  syntaxFlat,
  complexTypeMap,
  aliasMap,
  matchesMap,
  matchesAliasMap,
  literalMap,
  attrMap,
  attrMapInverse,
  primitiveOnlyAttributes,
  eitherAttributes
} from '../index.js';

import { strictEqual as equal, ok as assert } from 'node:assert';

const { keys } = Object;

describe('tests', () => {
  it('syntax', () => {
    equal('object', typeof syntax);
    assert(keys(syntax).length > 0);

    for (const category of Object.values(syntax)) {
      equal('object', typeof category);
      assert(keys(category).length > 0);

      for (const node of Object.values(category)) {
        equal('object', typeof node);
      }
    }
  });

  it('syntax-flat', () => {
    equal('object', typeof syntaxFlat);
    assert(keys(syntaxFlat).length > 0);

    for (const node of Object.values(syntaxFlat)) {
      equal('object', typeof node);
    }
  });

  it('complex-type-map', () => {
    equal('object', typeof complexTypeMap);
    assert(keys(complexTypeMap).length > 0);
  });

  it('alias-map', () => {
    equal('object', typeof aliasMap);
    assert(keys(aliasMap).length > 0);
  });

  it('matches-map', () => {
    equal('object', typeof matchesMap);
    assert(keys(matchesMap).length > 0);

    for (const value of Object.values(matchesMap)) {
      equal('object', typeof value);
      assert(value.length > 0);
    }
  });

  it('matches-alias-map', () => {
    equal('object', typeof matchesAliasMap);
    assert(keys(matchesAliasMap).length > 0);
  });

  it('literal-map', () => {
    equal('object', typeof literalMap);
    assert(keys(literalMap).length > 0);
  });

  it('attr-map', () => {
    equal('object', typeof attrMap);
    assert(keys(attrMap).length > 0);
  });

  it('attr-map-inverse', () => {
    equal('object', typeof attrMapInverse);
    assert(keys(attrMap).length > 0);
  });

  it('primitive-only-attributes', () => {
    equal('object', typeof primitiveOnlyAttributes);
    assert(primitiveOnlyAttributes.length > 0);
  });

  it('either-attributes', () => {
    equal('object', typeof eitherAttributes);
    assert(eitherAttributes.length > 0);
  });
});