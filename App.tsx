import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableWithoutFeedback, Animated, Text, View, Image, ImageBackground } from 'react-native';
import React, {Component, useRef, useEffect } from 'react';

export default function App() {
  const image = { uri: "https://as1.ftcdn.net/v2/jpg/03/33/33/74/1000_F_333337495_gtyzNpNk0Z63NVV5ENCyMBeumvCr9LQf.jpg" };

  
  return (
    <View style={styles.container}>
    
       
      

   {/* <ImageBackground source={image} resizeMode="contain" style={styles.image}>
    <Text style={styles.text}>Inside</Text>
    </ImageBackground>*/}
     <Text>Welcome to Bristol Bike Buddy</Text>
      <Text>Home of Cycling</Text>
      <Image source={{ uri: "https://as1.ftcdn.net/v2/jpg/03/33/33/74/1000_F_333337495_gtyzNpNk0Z63NVV5ENCyMBeumvCr9LQf.jpg" }} style={{ margin: 20, width: 305*.5, height: 159*.5 }} />
      <StatusBar style="auto" />
  </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});