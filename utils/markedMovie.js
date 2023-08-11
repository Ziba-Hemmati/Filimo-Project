export function markedMovie(marked, target) {
  return marked.find((item) => {
    return item.id === target.id;
  });
}
