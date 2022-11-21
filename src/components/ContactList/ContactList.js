// import PropTypes from 'prop-types';
import { ContactItem } from '../ListItem/ListItem';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";
import { visibleContacts } from "redux/selectors";
import { ListItem,UnorderedList} from '@chakra-ui/react'


export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(visibleContacts);
  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
        <UnorderedList p='4'>{contacts.map((contact) => (
                <ListItem key={contact.id}> {
                  <ContactItem contact={contact}/>}
                </ListItem>
              ))
            }
      </UnorderedList>  
        );
    
}
