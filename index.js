//Import a library to creat a component
import React from 'react';
import { AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList'

//Creat a component
const App = () => (
  <View style={{ flex: 1 }}>
     <Header headerText={'Albums'} />
     <AlbumList />
  </View>
);


//Render it to a device

AppRegistry.registerComponent('Test', () => App);
