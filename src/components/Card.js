import React from 'react';
import {  View } from 'react-native';

const Card = (props) => {
    return (
      <View style={styles.containerStyle}>
         {props.children}
      </View>
    ); 
  };

 const styles = {
   containerStyle: {
     borderWidth: 7,
     borderRadius: 2,
     borderColor: '#ddd',
     borderBottomWidth: 2,
     shadowColor: 'white',
     shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.1,
     shadowRadius: 2,
     elevation: 1,
     MarginTop: 10,
     MarginLeft: 5,
     marginRight: 5     
   }  
 }; 
  
  export default Card;