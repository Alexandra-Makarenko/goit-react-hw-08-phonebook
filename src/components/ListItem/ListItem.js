import PropTypes from 'prop-types';
import {deleteContact } from "redux/operations";
import { useDispatch } from "react-redux";
import { Text, Button } from '@chakra-ui/react'


export const ContactItem = ({ contact: { name, number,id } }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(id));

  
  return (
    <div>
       <Text as='samp'>{name} {number}</Text>      
      <Button  ml='2' colorScheme='teal' size='xs'
          type="button"
          onClick={onDeleteContact}
        >Delete</Button>
    </div>
  );
};

ContactItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
      }).isRequired
}