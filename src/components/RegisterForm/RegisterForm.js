import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormLabel, Input, Button, Container} from '@chakra-ui/react'


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <Container>
    <form onSubmit={handleSubmit}>
      <FormLabel >
        Username
        <Input type="text" name="name" />
      </FormLabel>
      <FormLabel >
        Email
        <Input type="email" name="email" />
      </FormLabel>
      <FormLabel >
        Password
        <Input type="password" name="password" />
      </FormLabel>
      <Button type="submit">Register</Button>
      </form>
      </Container>
  );
};
