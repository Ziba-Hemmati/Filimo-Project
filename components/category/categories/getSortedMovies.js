export const getTargetData = (eachCategory, movies) => {
  return movies.filter(({ category }) => category === eachCategory);
};
export const getSortedMovies = (type, targetMovies) => {
  console.log("type: ", type);
  switch (type) {
    case "imdbRate":
      console.log("1");
      return targetMovies.sort((a, b) => b.rate - a.rate);
    case "newest":
      console.log("2");
      return targetMovies.sort((a, b) => b.year - a.year);
    case "oldest":
      console.log("3");
      return targetMovies.sort((a, b) => a.year - b.year);
    default:
      console.log("4");
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
