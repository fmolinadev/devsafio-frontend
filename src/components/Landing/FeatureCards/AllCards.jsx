import Card from './Card';
import { featuresData } from '../../../common/featuresData';

const AllCards = () => {
  return (
    <div className="flex flex-col md:flex-row md:m-auto md:items-center justify-center md:w-9/12">
      {featuresData.map((ele) => (
        <Card
          head={ele.title}
          pic={ele.cover}
          text={ele.content}
          key={ele.id}
          id={ele.id}
        />
      ))}
    </div>
  );
};

export default AllCards;
