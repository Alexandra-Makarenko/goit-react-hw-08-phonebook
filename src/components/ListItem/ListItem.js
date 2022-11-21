import PropTypes from 'prop-types';
import {deleteContact } from "redux/operations";
import { useDispatch } from "react-redux";
import { Button } from '../ContactList/ContactList.styled';


export const ListItem = ({ contact: { name, number,id } }) => {
  const dispatch = useDispatch();
  const onDeleteContact = () => dispatch(deleteContact(id));

  
  return (
    <div>{name} {number} {id}
      <Button
          type="button"
          onClick={onDeleteContact}
        >Удалить</Button>
    </div>
  );
};

ListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number:PropTypes.string.isRequired,
      }).isRequired
}