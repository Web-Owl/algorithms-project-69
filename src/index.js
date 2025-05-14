export default (docs, str) => {
  if (docs.length == 0) {
    return [];
  }
  let result = [];

  for (let doc of docs) {
    let list = doc.text.split(" ");
    for (let word of list) {
      if (word === str) {
        result.push(doc.id);
        break;
      }
    }
  }

  return result;
}
