/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SCREEN_WIDTH} from './src/assets/dimensions';

function App(): React.JSX.Element {
  return (
    <View style={styles.root}>
      <Text style={{color: 'white'}}>{'AMAZON-CLONE'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    justifyContent: 'center',

    // borderWidth: 1,
    // borderColor: 'red',
  },
});

export default App;
