import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import WriteStory from './Screens/WriteStory';
import ReadStory from './Screens/ReadStory';

const UselessTextInput = () => {
  const [value, onChangeText] = React.useState('Story and author name');

  return (
    <TextInput
      style={{ height: 100, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
    />
  );
}
export default UselessTextInput;
const TabNavigator = createBottomTabNavigator({
  Write: {screen: WriteStory},
  Read: {screen: ReadStory},
}, 
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Write"){
        //return(
          //<Image
          //source={require("write.png")}
         //style={{width:40, height:40}}
        ///>
        //)
        
      }
      else if(routeName === "Read"){
        //return(
          //<Image
          //source={require("read.png")}
          //style={{width:40, height:40}}
        ///>)
        
      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});