import PropTypes from 'prop-types';

const LogoMini = (props) => {
  const { width, height, color } = props;
  return (
    <div
      style={{
        transform: "scale(1)",
      }}
    >
      <svg
        width={width}
        height={height}
        className="css-1j8o68f"
        viewBox="0 0 450 253"
        {...props}
      >
        <path
          xmlns="http://www.w3.org/2000/svg"
          fill={color}
          fillRule="evenodd"
          d="M0 0h450v253H0zm2 2h446v249H2zm4 4h438v241H6zm2 2h434v237H6h2z"
        />
        <path
          fill={color}
          d="M126.45 202.695c-10.248 0-20.291-2.05-29.72-5.944a77.717 77.717 0 0 1-24.184-16.396c-7.174-6.969-12.708-15.167-16.397-24.39-4.1-9.429-6.149-19.267-6.149-29.72C50 84.228 84.433 50 126.45 50c11.888 0 23.775 2.87 34.228 8.198 10.453 5.124 19.882 13.118 26.85 22.546l3.28 4.1-21.931 16.191-3.075-4.1c-9.223-12.502-23.57-19.675-39.352-19.675-27.055 0-49.19 21.93-49.19 48.985 0 27.26 22.135 49.396 49.19 49.396 15.577 0 29.924-7.174 39.352-19.677l3.075-3.894 21.726 15.987-3.28 4.1c-7.173 9.632-16.192 17.216-26.85 22.545-10.453 5.329-22.135 7.993-34.023 7.993zm232.763-2.254h-25.21l-36.893-64.768-36.893 64.768h-25.21L194.22 54.509h28.695l29.104 105.145 32.588-56.98h25.21l32.384 56.98 29.31-105.145H400z"
        />
      </svg>
    </div>
  );
}
export default LogoMini;

LogoMini.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string,
};

