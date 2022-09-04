import * as React from 'react';

export const usePaging=(SetLoadMore)=>{

  const [FetchMore,SetFetchMore]=React.useState(false)

  const [Paging,SetPaging]=React.useState(0)
  const [SubStoryLength,SetSubStoryLength]=React.useState(0)
  const handleListEnd=()=>{
    console.log("HandleEnd")
  if(SubStoryLength > 0 && !FetchMore){
  SetFetchMore(true)

    SetPaging(SubStoryLength)
  }
  }
  React.useEffect(()=>{
    if(Paging > 0){
      setTimeout(()=>{

SetLoadMore(Paging)
       }, 300);

    }
  },[Paging])

return [Paging,handleListEnd,SetSubStoryLength,SetFetchMore]
}
