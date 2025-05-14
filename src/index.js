export default function search (docs, str) {
  if (docs.length == 0) {
    return [];
  }

  const searchTerms = normalizeText(str);
  let result = [];

  for (let doc of docs) {
    const docTerms = normalizeText(doc.text);
    for (let term of searchTerms) {
      if (docTerms.includes(term)) {
        result.push(doc.id);
        break;
      }
    }
  }

  return result;
}

const normalizeText = (text) => {
  const re = /\w+/g;
  return text.match(re);
}