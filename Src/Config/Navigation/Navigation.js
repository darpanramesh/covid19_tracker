import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Country, Splash,CountryTable} from './../../Screen/index';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from 'native-base';
import Sidebar from './../.././Component/Sidebar/Sidebar';
const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          name="welcome"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={DraweNavigation}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Country"
          component={Country}
          options={{
            drawerLabel: 'Country',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CountryTable"
          component={CountryTable}
          options={{
            drawerLabel: 'CountryTable',
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();

function DraweNavigation() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <Sidebar {...props} />}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({color}) => <Icon name="home" size={24} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default StackNavigation;
