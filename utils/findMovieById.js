export function findMovieById(mark, movies) {
  return movies.find((item) => {
    return item.id === Number(mark);
  });
}
