export function findMovieByCategory(target, movies) {
  movies.find((item) => {
    return item.id === target.id;
  });
}
