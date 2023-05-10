import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Const from '../shared/constants';
import Colors from '../constant/Colors';

type ComboBoxProps = {
  placeHolder?: string;
  value?: string;
  iconLeft?: string;
  iconRight?: string;
  onPress?: Function;
};

export default function ComboBox({
  placeHolder,
  value,
  iconLeft,
  iconRight,
  onPress = () => {},
}: ComboBoxProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {borderColor: value ? Colors.border : Colors.border},
      ]}
      onPress={() => onPress()}>
      <Entypo name={iconLeft ?? 'calendar'} size={Const.sizeIcon.larger} />
      <Text style={value ? styles.title : styles.placeHolder}>
        {value ?? placeHolder}
      </Text>
      <Entypo
        name={iconRight ?? 'chevron-right'}
        size={Const.sizeIcon.larger}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderWidth: 1,
    justifyContent: 'space-between',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    color: 'gray',
    marginHorizontal: 8,
  },
  placeHolder: {
    flex: 1,
    color: 'silver',
    marginHorizontal: 8,
  },
});
