import * as React from 'react';

import {  DataProvider } from "recyclerlistview";
export const useDataprovider=()=>{
  const [dataDataProvider,SetData]=React.useState(new DataProvider((r1, r2) => {
    return r1 !== r2;
  }).cloneWithRows([{id:0}]))

  function SetDataProvder(data){
    SetData((new DataProvider((r1, r2) => {
      return r1 !== r2;
    }).cloneWithRows(data)))
  }
  return [dataDataProvider,SetDataProvder]
}
