import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import Const from '../../shared/constants';

export default function Other() {
  return (
    <View style={styles.container}>
      <Feather name={'mail'} size={Const.sizeIcon.larger} />
      <Text style = {styles.text}>honganh08102000@gmail.com</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'cornsilk',
    alignItems: 'center',
    paddingTop: 20,
    flex: 1,
    gap: 24,
    paddingHorizontal: 12,
  },
  text: {

  }
});