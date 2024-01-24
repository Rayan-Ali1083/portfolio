import React from 'react';

const Sidebar = (props) => {

  const handleOptionClick = (option) => {

    props.setSelectedOption(option);

};

  return (
    <div className="text-white text-sm w-1/6 h-fit p-3">
      <ul>
        <li
          className={`flex items-center mb-4 cursor-pointer ${
            props.selectedOption === 'healthcare' ? 'text-[#64ffda] bg-black bg-opacity-10 p-2' : 'p-2'
          }`}
          onClick={() => handleOptionClick('healthcare')}
        >
          Healthcare - FYP
        </li>

        <li
          className={`flex items-center mb-4 cursor-pointer ${
            props.selectedOption === 'anime' ? 'text-[#64ffda] bg-black bg-opacity-10 p-2' : 'p-2'
          }`}
          onClick={() => handleOptionClick('anime')}
        >
          Anime Recommender System
        </li>

        <li
          className={`flex items-center mb-4 cursor-pointer ${
            props.selectedOption === 'crop' ? 'text-[#64ffda] bg-black bg-opacity-10 p-2' : 'p-2'
          }`}
          onClick={() => handleOptionClick('crop')}
        >
          Crop Health Detection
        </li>

        <li
          className={`flex items-center mb-4 cursor-pointer ${
            props.selectedOption === 'iot' ? 'text-[#64ffda] bg-black bg-opacity-10 p-2' : 'p-2'
          }`}
          onClick={() => handleOptionClick('iot')}
        >
          IoT Device Attack Classification
        </li>

        <li
          className={`flex items-center mb-4 cursor-pointer ${
            props.selectedOption === 'dis' ? 'text-[#64ffda] bg-black bg-opacity-10 p-2' : 'p-2'
          }`}
          onClick={() => handleOptionClick('dis')}
        >
          Disaster Relief Management
        </li>

        <li
          className={`flex items-center mb-4 cursor-pointer ${
            props.selectedOption === 'BI' ? 'text-[#64ffda] bg-black bg-opacity-10 p-2' : 'p-2'
          }`}
          onClick={() => handleOptionClick('BI')}
        >
          Power BI Dashboards
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
