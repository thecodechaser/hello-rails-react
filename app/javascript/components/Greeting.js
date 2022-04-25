import React, { useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetingApi } from '../redux/greetings/greetings';
import PropTypes from "prop-types"

const Greeting =() => {
  const greeting = useSelector((state) => state.greetingsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchGreetingApi());
  }, [dispatch]);
    return (
        <div>
        {
          greeting
        }
      </div>
    );
}

export default Greeting
