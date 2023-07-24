import PropTypes from 'prop-types';

export const Cards = ({ data }) => {
  return (
    <section className="text-gray-600 body-font pt-16">
      <h2 className="title-font sm:text-4xl text-3xl font-medium text-gray-900
        text-center my-4">
        Compromisos Mensuales
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 px-4 gap-4">
        {
          data.map((item, index) => (
            <div key={index} className="3xl:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 p-8 rounded-lg overflow-hidden text-center relative">
                <img src={item.image} alt={item.type} className='m-auto' />
                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                  {item.type}
                </h2>
                <p className="leading-relaxed mb-3">
                  {item.description}
                </p>
                <a href={item.url} target="_blank"
                  className="text-blue-500 inline-flex items-center cursor-pointer" rel="noreferrer">
                  Pagar en línea aquí
                </a>
              </div>
            </div>

          ))
        }
      </div>
    </section>
  )
}

Cards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};