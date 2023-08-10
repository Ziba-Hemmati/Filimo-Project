export const searchByFaName = (movies, searchTerm) => {
  const searchTermLowerCase = searchTerm.toLowerCase();
  return movies.filter((item) =>
    item.faName.toLowerCase().includes(searchTermLowerCase) ||
    item.enName.toLowerCase().includes(searchTermLowerCase)
  );
};
