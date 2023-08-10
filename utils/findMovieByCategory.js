export function findMovieByCategory(movies, mark) {
  return movies.find((item) => {
    return item.id === Number(mark);
  });
}
