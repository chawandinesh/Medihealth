import React from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {AddDetailsScreen,CategoriesScreen,DetailsScreen, HomeScreen,ShowDetails,ViewAllDetails} from '../screens'

const Stack = createStackNavigator()
export default function navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                <Stack.Screen name="CategoriesScreen" component={CategoriesScreen}/>
                <Stack.Screen name="DetailsScreen" component={DetailsScreen}/>
                <Stack.Screen name="AddDetailsScreen" component={AddDetailsScreen}/>
                <Stack.Screen name="ViewAllDetails" component={ViewAllDetails}/>
                <Stack.Screen name="ShowDetails" component={ShowDetails}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
