import PropTypes from 'prop-types';

export default function Button(props) {
  const defaultClass = 'rounded-lg px-3 py-1 bg-orange-200 hover:bg-orange-300';
  const { className = defaultClass, children } = props;

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log('submit data');
  // }

  // console.log({ ...props });

  return (
    <button {...props} className={`${className} hover:text-white`} >{children}</button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
}