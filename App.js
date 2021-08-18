import React from 'react'
import StackNavigation from './components/navigation/StackNavigation'
import {LogBox } from 'react-native';


// To ignore the warning Reanimated 2 (we don't need it)
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return(
    <StackNavigation/>
  )
}

export default App