import CategoryItem from "@/components/category/categories/CategoriesItem";

const CategoryPoster = ({ data }) => {
  return (
    <ul
      className={
        "flex w-max justify-around relative pb-8 pt-4 lg2:w-full lg2:px-2"
      }
    >
      {data.map(({ id, poster, faName, rate, genre, year, country }) => (
        <CategoryItem
          key={id}
          id={id}
          poster={poster}
          faName={faName}
          rate={rate}
          genre={genre}
          year={year}
          country={country}
        />
      ))}
    </ul>
  );
};

export default CategoryPoster;
