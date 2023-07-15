import PropTypes from 'prop-types';
import Button from '../Button';


function Card({ className, children = null, datas = null, handleEdit, handleDelete }) {
  const textDummy = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis non, mollitia incidunt eos veniam natus ea recusandae, aliquid pariatur ducimus veritatis exercitationem praesentium animi magnam impedit esse blanditiis iste neque!';

  return (
    <div className={`border rounded-md shadow-lg p-5 ${className}`}>
      {
        (datas != null && datas.length > 0) ? datas.map((contact) => {
          return (
            <div className="flex align-middle ms-auto mb-2 border rounded-sm p-2" key={contact.id}>
              <span className='inline-block align-middle'>
                {contact.name}
              </span>
              <div className='ml-1 text-xs'>
                {contact.phone}
              </div>
              <div className="flex ms-auto" key={contact.id}>
                <div className="grid grid-cols-2 gap-1">
                  <Button className={'p-1 bg-green-400 hover:bg-green-300 rounded-md'} onClick={() => handleEdit(contact.id)}>Edit</Button>
                  <Button className={'px-2 bg-red-400 hover:bg-red-300 rounded-md'} onClick={() => handleDelete(contact.id)}>Delete</Button>
                </div>
              </div>
            </div>
          )
        }) : children || textDummy
      }
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  props: PropTypes.array,
  datas: PropTypes.array,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
}

export default Card;