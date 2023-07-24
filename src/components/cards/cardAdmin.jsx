import PropTypes from 'prop-types';

export const CardAdmin = ({ data }) => {
  return (
    <section className="text-gray-600 body-font pt-4">
      <div className="flex flex-col sm:flex-row px-4 gap-4">
        <div className='lg:w-1/2'>
          <h2 className="title-font sm:text-4xl text-3xl font-medium text-gray-900
            text-center my-4">
            Cuota de Administración:
          </h2>
          <p>Nuestro conjunto se mantiene en perfecto estado con tu contribución mensual, por favor cancela antes del 10 de cada mes para obtener el descuento de pronto pago.</p>
        </div>
        {
          data.map((item, index) => (
            <div key={index} className="lg:w-1/2">
              <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                <img
                  alt={item.title}
                  className="flex-shrink-0 rounded-full w-48 h-48 sm:mb-0 mb-4 bg-blue-700
                  p-2 object-contain"
                  src={item.image}
                />
                <div className="flex-grow sm:pl-8">
                  <a href={item.url} target="_blank"
                    className="text-white bg-blue-500 inline-flex items-center
                    cursor-pointer text-xl py-2 px-4 rounded-md" rel="noreferrer">
                    Pagar en línea aquí
                  </a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

CardAdmin.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      enlace: PropTypes.bool,
    })
  ).isRequired,
};