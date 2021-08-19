import React from 'react'
import DrawerNavigation from './components/navigation/DrawerNavigation'
import {LogBox } from 'react-native';


// To ignore the warning Reanimated 2 (we don't need it)
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return(
    <DrawerNavigation />
  )
}

export default App