export const getTargetData = (eachCategory, movies) => {
  return movies.filter(({ category }) => category === eachCategory);
};

export const getSortedMovies = (type, targetMovies) => {
  switch (type) {
    case "imdbRate":
      return targetMovies.sort((a, b) => b.rate - a.rate);
    case "newest":
      return targetMovies.sort((a, b) => b.year - a.year);
    case "oldest":
      return targetMovies.sort((a, b) => a.year - b.year);
    default:
      return targetMovies.sort((a, b) => a.id - b.id);
  }
};

// return movies.sort((a, b) => b.rate - a.rate);
// export const getNewestSorted = (movies) => {
//   return movies.sort((a, b) => b.year - a.year);
// };
//
// export const getOldestSorted = (movies) => {
//   return movies.sort((a, b) => a.year - b.year);
// };
