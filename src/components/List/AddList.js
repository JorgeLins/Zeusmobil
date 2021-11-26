import React, { useState } from 'react';
import { TextInput, StyleSheet, View, 
Text} from 'react-native';
import { Wrapper, Input } from "../../assets/Styles/styles.js"
import api from '../../services/api';


import Button from '../button/button';





export default function Lista(){
    const [text, setText] = useState('');

    const refreshPage = ()=>{
        window.location.reload();  }

    function newData() {
        return{
           name:'',
           price: 0,
           quantity:0
  
        }
     }
  
     const [data, setData] = useState(newData)
  
     function post() {
        api.post("/spending", data)
        .then((response) => {
           setData(response.data.spendings)
           console.log(response.data)
           refreshPage()
        })
        .catch(error => {console.log(error)})

     }

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <Wrapper>
            <Text style={styles.label} >Nome da ração</Text>
            <TextInput 
                style={styles.input}
                placeholder='Digite o nome da ração'
                keyboardType = 'default'
                onChangeText={changeHandler} 
                onChange= {(event)=>{
                    setData({...data, name: event.target.value})
                 }}
            />
            <Text style={styles.label} >Preço(R$)</Text>
            <TextInput 
                style={styles.input}
                placeholder='Digite o preço em reais'
                keyboardType = 'numeric'
                onChangeText={changeHandler} 
                onChange= {(event)=>{
                    setData({...data, price: event.target.value})
                 }}
            />
            <Text style={styles.label} >Quantidade(KG)</Text>
            <TextInput 
                style={styles.input}
                placeholder='Digite a quantidade em quilos'
                keyboardType = 'numeric'
                onChangeText={changeHandler} 
                onChange= {(event)=>{
                    setData({...data, quantity: event.target.value})
                 }}
            />
            <View style={styles.column}>
                <Button color="#707070"  text='Adicionar' onPress={post}></Button>
            </View>
        </Wrapper>
    )
}

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 20,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 3,
    },
    label:{
        marginTop: 5,
        marginHorizontal: 13,
        paddingHorizontal: 8,
        paddingVertical: 6,
    },
    column:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    button:{
        backgroundColor: "Green",
    }
})