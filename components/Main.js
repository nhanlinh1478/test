import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import FeedScreen from './main/Feed';
import SettingsScreen from './main/'
const Tab = createBottomTabNavigator();
export class Main extends Component{
    render(){
        return(
            <Tab.Navigator>
                <Tab.Screen name = "Feed" component ={FeedScreen}/>
                 
            </Tab.Navigator>
        )
    }
}
