// import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { Input,FormLabel} from '@chakra-ui/react'
export const Filter = () => {

  const dispatch = useDispatch();

  const onChange = event => {
    const query = event.target.value.toLowerCase();
    dispatch(setFilter(query));
  };

  return (<FormLabel>
    Find
    <Input type="text" onChange={onChange} />
  </FormLabel>)
};

