import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform } from 'react-native';

const { height, width} =Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Text style={styles.title}>Kawai To Do</Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder={"New To Do"}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 30,
    marginTop: 40,
    marginBottom: 20,
    fontWeight: "300"
  },
  card:{
    backgroundColor: "#ffffff",
    width: width - 50,
    height: height - 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50, 50, 50)",
        shadowOpacity: 0.5,
        shadowOffset:{
          height:-1,
          width:0
        }
      },
      android: {
        elevation: 3
      }
    })  
  }
});
