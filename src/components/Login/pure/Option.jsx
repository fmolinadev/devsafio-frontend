import React from 'react';

const Option = ({ info }) => {
  return (
    <span
      key={info.id}
      className={`flex px-2.5 py-2 border-2 border-solid mx-auto 
            md:border-slate-700 border-slate-100
            rounded-xl text-center items-center justify-center ${info.color}`}
    >
      <div className="px-3">{info.icon}</div>

      <p className="text-lg md:text-base">{info.title}</p>
    </span>
  );
};

export default Option;
