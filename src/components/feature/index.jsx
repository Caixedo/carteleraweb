import PropTypes from "prop-types";
import { useOpenShut } from "../hook/useOpenShut";
import { Success } from "../alerts/success";
import { Closed } from "../alerts/closed";

export const Feature = ({ name, title, reverse, image, data, extraData }) => {
  const isOpen = useOpenShut();

  return (
    <section id={name} className="text-gray-600 body-font py-4">
      <div className={`container px-5 mx-auto flex flex-wrap ${reverse}`}>
        <div className="lg:w-1/2 w-full mb-5 lg:mb-0 overflow-hidden">
          <img
            alt={title}
            className="object-cover object-center max-h-[600px] m-auto rounded-xl"
            src={image}
          />
        </div>
        <div
          className="flex flex-col flex-wrap lg:w-1/2 lg:pl-12 lg:text-left
        text-center mx-auto "
        >
          <h2 className="title-font sm:text-4xl text-3xl font-medium text-gray-900
          text-center my-4">
            {title}
          </h2>
          <p className="mb-3">{isOpen ? <Success /> : <Closed />}</p>
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col mb-3 md:mb-8 lg:items-start items-center"
            >
              <div
                className="w-12 h-12 inline-flex items-center justify-center rounded-full mb-3
             bg-blue-500 text-white"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  {item.title}
                </h2>
                <p className="leading-relaxed text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex relative py-5 sm:items-center md:w-full mx-auto">
          <div className="flex-grow md:pl-0 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-blue-100 text-blue-500 rounded-full inline-flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-12 h-12"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="flex-grow sm:pl-8 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                {extraData?.title}
              </h2>
              <ul className="leading-relaxed list-disc">
                {extraData?.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="leading-relaxed text-base font-semibold">
                {extraData?.note}
              </p>
              <p className="text-gray-400 text-center">{extraData?.rule}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Feature.propTypes = {
  name: PropTypes.string.isRequired,
  reverse: PropTypes.string,
  image: PropTypes.string,
  data: PropTypes.array,
  extraData: PropTypes.object,
  title: PropTypes.string.isRequired,
};
