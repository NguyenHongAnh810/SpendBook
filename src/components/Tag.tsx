import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

type TagProps = {
  title: string;
  onPress: (value: string) => void;
  valueActive: string;
};

export default function Tag({title, onPress, valueActive}: TagProps) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {borderColor: valueActive == title ? 'orange' : 'silver'},
      ]}
      onPress={() => onPress(title)}>
      <Text
        style={[
          styles.title,
          {color: valueActive == title ? 'orange' : 'dimgrey'},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  title: {
    fontSize: 16,
    color: 'dimgrey',
  },
});
