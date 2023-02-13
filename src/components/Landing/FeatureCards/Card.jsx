const Card = (props) => {
  return (
    <div className="rounded-lg my-4 text-center py-5 px-6 shadow-lg md:shadow-none bg-white md:bg-transparent w-fit md:w-4/12">
      <div className="flex justify-center">
        <img src={props.pic} alt="feature images" />
      </div>
      <header className="p-6 font-sans text-2xl pt-4 font-semibold text-dark-purple">
        {props.head}
      </header>
      <div className="text-base">{props.text}</div>
    </div>
  );
};

export default Card;
