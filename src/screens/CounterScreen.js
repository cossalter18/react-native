import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'


const CounterScreen = () => {


    //arrary destructuring
    const [counter, setCounter] = useState(0)


    return <View>
        <Button title="Increase" onPress={() => {
            // dont do this
            //counter ++
            //do this
            setCounter(counter + 1);
        }} />
        <Button title="Decrease" onPress={() => {
            setCounter(counter - 1);
        }} />
        <Text>Current Count: {counter}</Text>
    </View>
};


const styles = StyleSheet.create({})


export default CounterScreen;