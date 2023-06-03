import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import DetailsScreen from './DetailsScreen';
import SettingsScreen from './SettingsScreen';
import SchoolScreen from './SchoolScreen';
import HealthScreen from './HealthScreen';
import GymScreen from './GymScreen';

//Screen names
const detailsName = "Details";
const settingsName = "Settings";
const schoolName = "School";
const healthName = "Health";
const gymName = "Gym";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={schoolName}
        screenOptions={({ route }) => ({
          headerStyle: {backgroundColor:'#E4CD05'},
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'normal', textTransform: 'capitalize' },
          headerTitleAlign: 'center',
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => {
            
            let iconName;
            let rn = route.name;

            if (rn === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
             
            else if (rn === schoolName) {
              iconName = focused ? 'home' : 'home-outline';
            }

            else if (rn === healthName) {
              iconName = focused ? 'heart' : 'heart-outline';
            }

            else if (rn === gymName) {
              iconName = focused ? 'bicycle' : 'bicycle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#E4CD05',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 5, fontSize: 10 },
          tabStyle: { justifyContent: 'center', alignItems: 'center' },
          style: { padding: 5, height: 70, backgroundColor: 'yellow'}
        }}>

        <Tab.Screen name={schoolName} component={SchoolScreen} />
        <Tab.Screen name={gymName} component={GymScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={healthName} component={HealthScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;