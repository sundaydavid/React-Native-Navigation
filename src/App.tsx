import React from 'react';

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList = {
  Home:undefined;
  Details:{product: Product}
}

const Stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home'
        component={Home}
        options={{
          title:"Trending Products"
        }}/>
        <Stack.Screen name='Details'
        component={Details}
        options={{
          title:"Products details"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
