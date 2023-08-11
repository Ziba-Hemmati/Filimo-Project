import Title from "@/components/Title";

const EachMovieStory = ({ faName, story }) => {
  return (
    <div className="text-white relative overflow-hidden w-full md:w-1/2 max-w-screen-xl md:pr-5">
      <div className={"mb-5"}>
        <Title className={"text-sm mb-2"}>داستان فیلم {faName}</Title>
        <p
          className={
            "text-gray-250 font-iran-sans-medium text-[10px] leading-5"
          }
        >
          {story}
        </p>
      </div>
      <div className={"mb-5"}>
        <Title className={"text-sm mb-2"}>داستان فیلم {faName}</Title>
        <p
          className={
            "text-gray-250 font-iran-sans-medium text-[10px] leading-5"
          }
        >
          {story}
        </p>
      </div>
    </div>
  );
};

export default EachMovieStory;
