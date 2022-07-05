import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps{
  title: string
}

export function Button({ title, ...rest }: ButtonProps ) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.4}
      {...rest}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 11,
    borderRadius: 7,
    alignItems: 'center',
    marginVertical: 10
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',

  },


});
