import { expect } from '@jest/globals';
import search from '../src/index';

describe("Search module", () => {
  it("docs is empty", () => {
    expect(search([], 'shoot')).toEqual([]);
  });

  it("returns doc1 and doc2 when only they contain the word, excluding doc3", () => {
    const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
    const doc2 = { id: 'doc2', text: "Don't shoot shoot shoot that thing at me." };
    const doc3 = { id: 'doc3', text: "I'm your shooter." };
    const docs = [doc1, doc2, doc3];

    expect(search(docs, 'shoot')).toEqual(['doc1', 'doc2']);
  });

  it("should ignore punctuation when searching text", () => {
    const doc1 = { id: 'doc1', text: "I can't shoot straight unless I've had a pint!" };
    const docs = [doc1];

    expect(search(docs, 'pint')).toEqual(['doc1']);
    expect(search(docs, 'pint!')).toEqual(['doc1']);
  })
});