import j from '../index.js';
import { strictEqual as equal, ok as assert } from 'node:assert';

const { keys } = Object;

describe('tests', () => {
  it('syntax', () => {
    equal('object', typeof j.syntax);
    assert(keys(j.syntax).length > 0);

    for (const category of Object.values(j.syntax)) {
      equal('object', typeof category);
      assert(keys(category).length > 0);

      for (const node of Object.values(category)) {
        equal('object', typeof node);
      }
    }
  });

  it('syntax-flat', () => {
    equal('object', typeof j.syntaxFlat);
    assert(keys(j.syntaxFlat).length > 0);

    for (const node of Object.values(j.syntaxFlat)) {
      equal('object', typeof node);
    }
  });

  it('complex-type-map', () => {
    equal('object', typeof j.complexTypeMap);
    assert(keys(j.complexTypeMap).length > 0);
  });

  it('alias-map', () => {
    equal('object', typeof j.aliasMap);
    assert(keys(j.aliasMap).length > 0);
  });

  it('matches-map', () => {
    equal('object', typeof j.matchesMap);
    assert(keys(j.matchesMap).length > 0);

    for (const value of Object.values(j.matchesMap)) {
      equal('object', typeof value);
      assert(value.length > 0);
    }
  });

  it('matches-alias-map', () => {
    equal('object', typeof j.matchesAliasMap);
    assert(keys(j.matchesAliasMap).length > 0);
  });

  it('literal-map', () => {
    equal('object', typeof j.literalMap);
    assert(keys(j.literalMap).length > 0);
  });

  it('attr-map', () => {
    equal('object', typeof j.attrMap);
    assert(keys(j.attrMap).length > 0);
  });

  it('attr-map-inverse', () => {
    equal('object', typeof j.attrMapInverse);
    assert(keys(j.attrMap).length > 0);
  });

  it('primitive-only-attributes', () => {
    equal('object', typeof j.primitiveOnlyAttributes);
    assert(j.primitiveOnlyAttributes.length > 0);
  });

  it('either-attributes', () => {
    equal('object', typeof j.eitherAttributes);
    assert(j.eitherAttributes.length > 0);
  });
});