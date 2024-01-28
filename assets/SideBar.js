import React from 'react';

const Sidebar = (props) => {

  const handleOptionClick = (option) => {

    props.setSelectedOption(option);

  };

  const dropdownhandleOptionClick = (e) => {

    props.setSelectedOption(e.target.value);

  };

  return (
    <>

      <select name="sidebar" id="sidebar" defaultValue={'iot'} className='py-5 px-2 flex outline-none mb-auto lg:hidden bg-transparent text-[#64ffda] mr-auto border-2 border-[#64ffda] rounded-md w-full' onChange={dropdownhandleOptionClick}>


        <option className='text-black' value="iot">IoT Device Attack Classification</option>

        <option className='text-black' value="crop">Crop Health Detection</option>

        <option className='text-black' value="anime">Anime Recommender System</option>

        <option className='text-black' value="BI">Power BI Dashboards</option>

        <option className='text-black' value="healthcare">Remote Healthcare</option>


        <option className='text-black' value="dis">Disaster Relief Management</option>



      </select>

      <div className="hidden lg:static lg:flex text-white text-sm w-fit h-full p-3 items-center">
        <ul>

          <li
            className={`flex items-center mb-4 cursor-pointer ${props.selectedOption === 'iot' ? 'text-[#64ffda] bg-black bg-opacity-10 p-2' : 'p-2 hover:text-[#64ffda] hover:bg-black hover:bg-opacity-10 text-[#8892B0]'
              }`}
            onClick={() => handleOptionClick('iot')}
          >
            IoT Device Attack Classification
          </li>

          <li
            className={`flex items-center mb-4 cursor-pointer ${props.selectedOption === 'crop' ? 'text-[#64ffda] bg-black bg-opacity-10 p-2' : 'p-2 hover:text-[#64ffda] hover:bg-black hover:bg-opacity-10 text-[#8892B0]'
              }`}
            onClick={() => handleOptionClick('crop')}
          >
            Crop Health Detection
          </li>

          <li
            className={`flex items-center mb-4 cursor-pointer ${props.selectedOption === 'anime' ? 'text-[#64ffda] bg-black bg-opacity-10 p-2' : 'p-2 hover:text-[#64ffda] hover:bg-black hover:bg-opacity-10 text-[#8892B0]'
              }`}
            onClick={() => handleOptionClick('anime')}
          >
            Anime Recommender System
          </li>

          <li
            className={`flex items-center mb-4 cursor-pointer ${props.selectedOption === 'BI' ? 'text-[#64ffda] bg-black bg-opacity-10 p-2' : 'p-2 hover:text-[#64ffda] hover:bg-black hover:bg-opacity-10 text-[#8892B0]'
              }`}
            onClick={() => handleOptionClick('BI')}
          >
            Power BI Dashboards
          </li>

          <li
            className={`flex items-center mb-4 cursor-pointer ${props.selectedOption === 'healthcare' ? 'text-[#64ffda] bg-black bg-opacity-10 p-2' : 'p-2 hover:text-[#64ffda] hover:bg-black hover:bg-opacity-10 text-[#8892B0]'
              }`}
            onClick={() => handleOptionClick('healthcare')}
          >
            Remote Healthcare
          </li>

          <li
            className={`flex items-center mb-4 cursor-pointer ${props.selectedOption === 'dis' ? 'text-[#64ffda] bg-black bg-opacity-10 p-2' : 'p-2 hover:text-[#64ffda] hover:bg-black hover:bg-opacity-10 text-[#8892B0]'
              }`}
            onClick={() => handleOptionClick('dis')}
          >
            Disaster Relief Management
          </li>



        </ul>
      </div>

    </>
  );
};

export default Sidebar;
