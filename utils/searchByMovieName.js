export const searchByMovieName = (movies, searchTerm) => {
  return movies.filter((item) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return (
      item.faName.includes(searchTerm) ||
      item.enName.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });
};
