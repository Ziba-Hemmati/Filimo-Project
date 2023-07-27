import FreeMoviesPosterItem from "@/components/mainPage/freeMovies/FreeMoviesItem"

const FreeMoviesPoster = ({ data }) => {
  
    return (
      <ul
        className={"flex w-max justify-around relative pb-8 pt-4 lg2:w-full lg2:px-2"}
      >
        {data.map(({ id, poster, faName }) => (
          <FreeMoviesPosterItem
            key={id}
            id={id}
            poster={poster}
            faName={faName}
          />
        ))}
      </ul>
    );
  };
  
  export default FreeMoviesPoster;