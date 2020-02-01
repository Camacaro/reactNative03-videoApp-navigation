import React from 'react';

import {View, Text, StyleSheet, ImageBackground} from 'react-native';

function CategoryListLayout(props) {
  	return (
		<ImageBackground  
		  source={ require('../../../assets/backgronund.png') } 
		  style={style.container}
		>
			<Text style={style.title}> {props.title} </Text>
			{props.children}
			 
	  	</ImageBackground>
  	);
}

const style = StyleSheet.create({
  container: {
	paddingVertical: 30,
	paddingHorizontal: 10
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold'
  },
});
export default CategoryListLayout;
