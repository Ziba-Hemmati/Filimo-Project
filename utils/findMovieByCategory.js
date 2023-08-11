export function findMovieByCategory(movies, categories) {
  return movies.filter((item) => item.category === categories);
}
