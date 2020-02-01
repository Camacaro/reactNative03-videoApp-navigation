import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

function SuggestionListLayout(props) {
  return (
    <View style={style.container}>
      <Text style={style.title}> {props.title} </Text>
      {props.children}
    </View> 
  );
}

const style = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1, // esto es para tener todo el espacio disponible
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
export default SuggestionListLayout;
