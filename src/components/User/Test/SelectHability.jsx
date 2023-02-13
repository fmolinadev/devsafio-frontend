import React, { useState, useEffect } from 'react';
import apiCliente from '../../../services/api.service';
import { AiFillStar } from 'react-icons/ai';
import CardTest from '../Test/CardsTest'; 

export const SelectHability = () => {
  const [skills, setSkills] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await apiCliente.get('/users/skills');
      setSkills(res.data);
    };

    fetchData();
  }, []);

  const handleClick = id => {
    let newSelectedSkills = [...selectedSkills];
    if (newSelectedSkills.includes(id)) {
      newSelectedSkills = newSelectedSkills.filter(skillId => skillId !== id);
    } else {
      newSelectedSkills.push(id);
    }
    setSelectedSkills(newSelectedSkills);
  };

  if (!skills) return <div>Cargando datos...</div>;

  return (
  <div>
    <div className="flex flex-wrap justify-arround">
      {Object.keys(skills).map(key =>
        skills[key].map(item => (
          <div key={item.name}>
            <input
              type="checkbox"
              id={item.id}
              onClick={() => handleClick(item.name)}
              value={item.name}
              className="checkshow hidden"
            />
            <label
              htmlFor={item.id}
              className={
                selectedSkills.includes(item.name)
                  ? 'btn btn-sm bg-mid-light-blue text-white m-2 hover:bg-mid-light-blue'
                  : 'btn btn-outline border-mid-light-blue btn-sm hover:bg-mid-light-blue m-2 focus:bg-mid-light-blue'
              }
            >
              {item.name}
              {item.level === 3 && (
                <AiFillStar className="fill-yellow-400 text-md mx-1 inline" />
              )}
            </label>
          </div>
        ))
      )}
    </div>
    <div className='grid gap-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-4  ml-10'>
    <CardTest selectedSkills={selectedSkills}/>
    </div>
    </div>
  );
};
