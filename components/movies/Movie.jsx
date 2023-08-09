import PosterMovie from "@/components/movies/PosterMovie";

const Movie = ({ data }) => {
  const movie = data.movies;
  return (
    <div className="mb-20">
      <h3 className="text-white my-6 px-[10px] lg:px-[30px]">فیلم</h3>

      <div className="grid grid-cols-2 gap-3 md:gap-2 lg:gap-3 gap-y- sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 text-white p-[14px] text-[.7rem] lg:px-[30px]">
        {movie.map(
          ({
            poster,
            id,
            faName,
            genre,
            year,
            country,
            isDub,
            rate,
            isSub,
          }) => {
            return (
              <PosterMovie
                id={id}
                poster={poster}
                faName={faName}
                genre={genre}
                year={year}
                country={country}
                isDub={isDub}
                rate={rate}
                isSub={isSub}
                key={id}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default Movie;
