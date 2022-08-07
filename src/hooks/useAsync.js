import { useEffect, useReducer } from "react"

function reducer(state, action) {
  switch(action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case 'APPEND':
      //기존의 state값에 NewTodo에서 전달된 todo object 추가해서 반환..
      const newTodo = action.data
      return {
        loading: false,
        data: [newTodo, ...state.data],
        error: null
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`unknown type ${action.type}`);
  }
}

const useAsync = (callback, deps = []) => {

  const [state, dispatch] = useReducer(reducer, {
    data: null,
    loading: false,
    error: null
  });

  const fetchData = async () => {
    dispatch({type: 'LOADING'});
    try{
      const data = await callback();
      dispatch({type: 'SUCCESS', data});
    }catch (e) {
      dispatch({type: 'ERROR'});
    }
    
  };

  useEffect(() => {
    fetchData();
  }, deps);

  return [state, fetchData];
}

export default useAsync;