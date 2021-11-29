import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { FaRegTrashAlt } from "react-icons/fa";

export default function DeleteButton({ onPress }){
    return(
        <TouchableOpacity onPress= {onPress}>
            <View style={styles.button}>
                <Text style={styles.text}><FaRegTrashAlt/></Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#FFC107',
        width: 15,
        height: 10,
        marginBottom: 15
    },
    text:{
        color: 'black',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign:'center'
    }
})