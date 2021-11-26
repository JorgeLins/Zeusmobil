import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Button({ text, onPress }){
    return(
        <TouchableOpacity onPress= {onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#707070',
        width: 200,
        marginTop: 20
    },
    text:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign:'center'
    }
})