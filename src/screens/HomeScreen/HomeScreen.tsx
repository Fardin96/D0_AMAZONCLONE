import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

function HomeScreen(): React.JSX.Element {
  return (
    <View style={styles.root}>
      <Text style={styles.txt}>{'HomeScreen'}</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt: {
    color: 'white',
  },
});
