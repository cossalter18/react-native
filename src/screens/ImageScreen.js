import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
//import component to show several times
import ImageDetail from '../Components/ImageDetail'


const ImageScreen = () =>{
    return <View>
        {/* we can choose any prop name that we want, we used "title" */}
        <ImageDetail title="Forest"/>
        <ImageDetail title="Beach"/>
        <ImageDetail title="Mountain"/>
    </View>
}

const styles = StyleSheet.create({});

export default ImageScreen;