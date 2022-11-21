import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { Flex, Box, Heading,Spacer,Button } from '@chakra-ui/react'

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
      <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box  p='2'>
          <Heading as='h3' size='md'>Welcome, {user.name}</Heading>
          </Box>
      <Spacer />      
      <Button colorScheme='teal' type="button" onClick={() => dispatch(logOut())} variant='outline'>
        Logout
        </Button >
    </Flex>
  );
};
