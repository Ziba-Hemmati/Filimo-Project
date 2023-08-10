export const searchByFaName = (movies, searchTerm) => {
  return movies.filter((item) => item.faName.includes(searchTerm));
};
