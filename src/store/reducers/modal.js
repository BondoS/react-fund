import { MODAL_SHOW, MODAL_HIDE } from '../actions/actions';

const initialState = {
  show: false,
  name: '',
  total: 0,
  id: 0,
  spent: 0
};

const modalShow = (state, action) => {
  return {
    ...state,
    show: action.show,
    id: action.id,
    name: action.name,
    total: action.total,
    spent: action.spent
  };
};

const modalHide = () => {
  return initialState;
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      return modalShow(state, action);
    case MODAL_HIDE:
      return modalHide(state, action);
    default:
      return state;
  }
};

export default reducer;
