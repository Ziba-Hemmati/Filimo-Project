import Link from 'next/link'

const FreeMoviesPosterItem = ({ id, poster, faName }) => {
    
    return (
    <li key={id}
    className={"opacity-80 hover:opacity-100 mx-2.5 lg2:m-2"}
    >
      <Link href={`/${faName}`}>
         <img
           className={"w-[130px] h-[175px] rounded-md md:w-[165px] md:h-[220px]"}
           src={poster}
           alt={faName}
           width={200}
           height={200}
         />
         <p className={"text-white w-[160px] text-[0.7rem] mt-1.5"}>انیمیشن - {faName}</p>
      </Link>
    </li>
  );
};

export default FreeMoviesPosterItem;