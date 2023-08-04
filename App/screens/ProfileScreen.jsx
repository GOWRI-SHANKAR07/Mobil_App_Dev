import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'


const ProfileScreen = () => {
    return(
        <View>
            <Text>ProfileScreen</Text>
        </View>
    )
}

const DrawerScreen = () => {

    const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
        <Drawer.Screen name='Profile' component={ProfileScreen} />
    </Drawer.Navigator>
  )
}

export default DrawerScreen;