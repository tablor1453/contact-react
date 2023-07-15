import PropTypes from 'prop-types';

function Container(props) {
  const { className, children } = props;

  return (
    <div className={`container mx-auto p-3 lg:px-20 ${className}`}>
      {children}
    </ div >
  )
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any.isRequired
};

export default Container;