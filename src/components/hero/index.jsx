import PropTypes from "prop-types";
import { useState } from "react";

export const Hero = ({ name, title, data }) => {
  const [selectedUrl, setSelectedUrl] = useState(data[0].url);

  const getUlr = (name) => {
    const selectedItem = data.find(item => item.name === name);
    setSelectedUrl(selectedItem.url);
  }

  return (
    <section id={name} className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-6 md:py-24 md:flex-row flex-col
      items-center curs">
        <div className="lg:flex-grow w-full md:w-1/3 lg:pr-24 md:pr-16 flex flex-col
        md:items-start md:text-left mb-4 md:mb-0">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900
          md:py-8">
            {title}
          </h1>
          {
            data.map((item, index) => (
              <div key={index} onClick={() => getUlr(item.name)} className="flex
                gap-4 justify-start pb-8 cursor-pointer hover:px-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500
                inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="5" r="3" />
                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                  </svg>
                </div>
                <h2 className="font-medium title-font text-sm text-gray-900
                hover:text-gray-400 tracking-wider py-2">
                  {item.name}
                </h2>
              </div>
            ))
          }
        </div>
        <div className="md:w-2/3 w-full">
          <object data={selectedUrl} width="100%" height="500px">
          </object>
        </div>
      </div >
    </section >
  )
}
Hero.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.array,
};
