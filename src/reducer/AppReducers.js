import {
  Get_Question,
  UpdateAnswer,
  Error_Filled,
  Start_fetching,
  Error_Dissmissed,
} from '../action/actionTypes';

const INTIAL_STATE = {
  error:false,
  NewsStoriesLoader:false,
  SubStoriesLoader:false,
  NewsStories:[],
  SubStories:[],
  errorMessage:"",

};

function InseartAnswer(NewItem,StateArray){

StateArray.push(NewItem)
return StateArray

}
const reducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case Start_fetching:
      return {...state, [action.state]: action.payload};
    case Get_Question:
     return {...state, [action.state]: action.AddBoolean === false ? action.payload : state.SubStories.concat(action.payload),};
     case Error_Filled:
    return {...state, error:true,errorMessage: action.payload};
      case Error_Dissmissed:
    return {...state, error:false,errorMessage:""};
  default:
      return state;
  }
};
export const Isfetching = (bool, State) => {
  //Set loading to true or false based on bool
  return {
    type: Start_fetching,
    state: State,
    payload: bool,
  };
};
export const fetchData = (data, State,AddBoolean) => {
  //Fetch question array array
  return {
    type: Get_Question,
    state: State,
    AddBoolean:AddBoolean,
    payload: data,
    Loading:false,
  };
};
export const ErrorFullfilled = (data, State) => {

  //Return error message while setting error to true
  return {
    type: Error_Filled,
    payload: data,
    loading: false,
  };
};
export const DissmisError=(data, State)=>{

    //Set error in state to false
  return {
    type: Error_Dissmissed,
  };
}

export default reducer;
