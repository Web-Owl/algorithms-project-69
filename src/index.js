export default (docs, str) => {
  if (docs.length == 0) {
    return [];
  }

  const searchTerms = normalizeText(str);
  let result = [];

  for (let doc of docs) {
    const docTerms = normalizeText(doc.text);
    for (let term of searchTerms) {
      const relevance = docTerms.filter((t) => term === t).length;
      if (docTerms.includes(term)) {
        result.push({
          id: doc.id,
          relevance
        });
        break;
      }
    }
  }

  result.sort((a,b) => b.relevance - a.relevance);

  return result.map(({ id }) => id);
}