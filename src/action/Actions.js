import {
  fetchData,AddAnswer,Isfetching,ErrorFullfilled,DissmisError
} from '../reducer/AppReducers';
const fetchApi = 'https://hacker-news.firebaseio.com/v0/'
const KeyArry = [
'time',
'title',
'by',
'url',
'type',
'score']
export const GetStoriesId = (EndPoint='newstories.json') => {

  return async (dispatch) => {
    try {

       dispatch(Isfetching(true,'NewsStoriesLoader'))
      const response =   await  fetch('https://hacker-news.firebaseio.com/v0/newstories.json')

  if(response.status != 200){
    throw ('Error Sending request')
  }
      const ResponseArray = await response.json();

        dispatch(fetchData(ResponseArray, 'NewsStories',false));
        dispatch(Isfetching(false,'NewsStoriesLoader'))


    } catch (err) {

     dispatch(Isfetching(false,'NewsStoriesLoader'))
     dispatch(ErrorFullfilled("An error occurred 300", 'NewsStories'));


    }
  };
};
const GetStories = async (StoryId) => {
      try{
      const response = await fetch(fetchApi + `item/${StoryId}.json`);
      const Posts = await response.json();
      const hasAllKeys = KeyArry.every(item => Posts.hasOwnProperty(item));
if(hasAllKeys === true){

     return Promise.resolve(Posts)
}else{

   return Promise.reject({error:'not valid'})}

  } catch (err) {
 return Promise.reject({error:'not valid'})
};

}
export const GetAllsories= (StoryIds,Paging)=> {

  return async (dispatch) => {
    try {
         dispatch(Isfetching(true,'SubStoriesLoader'))

         const slicedArray = StoryIds.slice(Paging, Paging+20);

         let data = await Promise.all(slicedArray.map(async (StoryId)=>{
                    const Stories =  await GetStories(StoryId).catch(e=>{
                    return null
         })
return Stories
       }))

let FiltredData = data.filter( el => el !== null)
                 dispatch(fetchData(FiltredData, 'SubStories',true));

    } catch (err) {
           dispatch(Isfetching(false,'SubStoriesLoader'))
           dispatch(ErrorFullfilled("An error occurred 300", 'SubStories'));

    }
  };
};





export const Dissmis_Error = (data) => {

  return async (dispatch) => {

  try {
      //TODO: Access Token should be change.

//Set error to false
       dispatch(DissmisError())

    } catch (err) {
 dispatch(DissmisError())

    }
  };
};
