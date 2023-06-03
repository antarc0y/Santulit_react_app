import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import KitchenScreen from './KitchenScreen';
import ProfileScreen from './ProfileScreen';
import SchoolScreen from './SchoolScreen';
import HealthScreen from './HealthScreen';
import GymScreen from './GymScreen';

//Screen names
const kitchenName = "Kitchen";
const profileName = "Profile";
const schoolName = "School";
const healthName = "Health";
const gymName = "Gym";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      // style the top nav bar that displays name of current tab
        initialRouteName={schoolName}
        screenOptions={({ route }) => ({
          headerStyle: {backgroundColor:'#E4CD05'},
          headerTintColor: 'white',
          headerTitleStyle: { fontWeight: 'normal', textTransform: 'uppercase', fontSize:30  },
          headerTitleAlign: 'center',
          headerShown: true,
          tabBarIcon: ({ focused, color, size }) => {
            
            // switch icons based on whether the current tab is in focus
            let iconName;
            let rn = route.name;

            if (rn === kitchenName) {
              iconName = focused ? 'restaurant' : 'restaurant-outline';

            } else if (rn === profileName) {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
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
        // style the bottom tab bar
        tabBarOptions={{
          activeTintColor: '#E4CD05',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 5, fontSize: 10 },
          tabStyle: { justifyContent: 'center', alignItems: 'center' },
          style: { padding: 5, height: 70, backgroundColor: 'yellow'}
        }}>

        <Tab.Screen name={schoolName} component={SchoolScreen} />
        <Tab.Screen name={gymName} component={GymScreen} />
        <Tab.Screen name={kitchenName} component={KitchenScreen} />
        <Tab.Screen name={healthName} component={HealthScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
        

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;