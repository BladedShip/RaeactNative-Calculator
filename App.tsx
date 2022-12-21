import React from 'react';
import {Text, View, StyleSheet, Switch, StatusBar} from 'react-native';
import {ThemeContext} from './src/context/ThemeContext';
import {useState} from 'react';
import {colors} from './src/styles/Colors';
import Button from './src/components/Button';
import Keyboard from './src/components/Keyboard';

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <View
        style={
          theme === 'light'? styles.container : [styles.container, {backgroundColor: '#000'}]
        }>
        <StatusBar />
        <Switch
          style={styles.toggle}
          value={theme === 'light'}
          onValueChange={() =>
            setTheme(theme === 'light' ? 'dark' : 'light')
          }></Switch>
          <Keyboard/>
      </View>
    </ThemeContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  toggle:{
    position:'absolute',
    top:12,
    right:12,
  }
});
export default App;
