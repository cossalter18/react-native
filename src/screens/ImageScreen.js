import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import component to show several times
import ImageDetail from '../Components/ImageDetail'


const ImageScreen = () => {
    return <View>
        {/* we can choose any prop name that we want, we used "title" */}
        {/* we added another prop that WE NAMED, imageSource*/}
        <ImageDetail title="Forest" score={9} imageSource={require('../../assets/forest.jpg')} />
        <ImageDetail title="Beach" score={7} imageSource={require('../../assets/beach.jpg')} />
        <ImageDetail title="Mountain" score={10} imageSource={require('../../assets/mountain.jpg')} />
    </View>
}

const styles = StyleSheet.create({});

export default ImageScreen;