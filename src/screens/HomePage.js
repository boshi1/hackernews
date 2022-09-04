import * as React from 'react';
import {View, Image,Animated, TouchableOpacity, Text, FlatList, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {GetStoriesId,GetAllsories} from '../action/Actions.js'
import { RecyclerListView } from "recyclerlistview";
import Header from '../helper/Header.js'
const SubStory = 'item/'
import {useLayoutProvider} from '../Hooks/ListProvider.js'
import {useDataprovider} from  '../Hooks/DataProvider.js'
import {usePaging} from  '../Hooks/Paging.js'
import RowRenderer from '../components/RowRender.js'
import {RenderFooter} from '../components/FooterRender.js'
import {Colors} from '../utils/Colors.js';

function HomeScreen(props) {
  console.log(Colors.Orange)
  const [layoutProvider] = useLayoutProvider(100)
  const [dataDataProvider,SetDataProvder]=useDataprovider()
  const [Paging,handleListEnd,SetSubStoryLength,SetFetchMore]= usePaging((value)=>{LoadingMore()})
React.useEffect(()=>{props.GetStoriesId()},[])
React.useEffect(()=>{if(props.NewsStories.length > 0){LoadingMore(props.NewsStories)}},[props.NewsStories])
React.useEffect(()=>{SetDataProvder(props.SubStories)},[props.SubStories])
React.useEffect(()=>{if(props.SubStories.length > 0){SetDataProvder(props.SubStories);SetSubStoryLength(props.SubStories.length);SetFetchMore(false);}},[props.SubStories])

async function LoadingMore(){
    props.GetAllsories(props.NewsStories,Paging)
}

    return (
        <View style={{flex: 1}}>
<Header  HeaderText={'New stories'} />
{props.NewsStoriesLoader  ? <ActivityIndicator size="large" color={Colors.Orange} />:null}
<RecyclerListView
  rowRenderer={(type, data, index)=> <RowRenderer navigation={props.navigation} type={type} data={data} index={index}/>}
  dataProvider={dataDataProvider}
  layoutProvider={layoutProvider}
  onEndReached={handleListEnd}
  renderFooter={()=> <RenderFooter FooterLoading={props.SubStoriesLoader}/>}
/>
        </View>
    );
}


function mapStateToProps(state) {
  let {NewsStories,SubStories,NewsStoriesLoader,SubStoriesLoader} =state.AppReducers
    return {NewsStories:NewsStories
      ,SubStories:SubStories,
      NewsStoriesLoader: NewsStoriesLoader,
      SubStoriesLoader:SubStoriesLoader};
}


const mapDispatchToProps = {GetStoriesId,GetAllsories}
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);
