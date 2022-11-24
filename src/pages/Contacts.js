import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import { Grid, GridItem, Spinner } from '@chakra-ui/react';
import { Filter } from '../components/Filter/Filter'


export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

 

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Grid templateColumns='repeat(2, 2fr)' gap={6}>
        
        <GridItem w='100%'><ContactForm /> <div>{isLoading && <Spinner mt='4' color='teal' />}</div></GridItem> 
        
        <GridItem w='100%'>
          <Filter />
          <ContactList />
        </GridItem>

        </Grid>
    </>
  );
}

