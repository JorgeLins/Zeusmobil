import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, FlatList,Alert } from 'react-native';
import Lista from '../components/List/AddList';
import api from '../services/api';
import Header from '../components/header/index'
import { Box, Container, Label, DeleteButtons} from "../assets/Styles/styles"
import { FaRegTrashAlt } from "react-icons/fa";

export default function Menu() {
    const [todos, setTodos] = useState([]);
    const [selectedPrice, setSelectedPrice] = useState([]);

    const refreshPage = ()=>{
      window.location.reload();  }


    useEffect(() => {
      get()
    }, []);

    const get = () => {
      api.get('/spending/').then((response) => {
        setTodos(response.data.spendings)
      })
      console.log(todos.price)
    }



  
    const pressHandler = (key) => {
      setTodos(prevTodos => {
        return prevTodos.filter(todo => todo.key != key);
      });
    };

    function deleteSpending(id){
      api.delete(`/spending/${id}`)
      refreshPage()

  }       
  

    // const submitHandler = (text) => {
    //     setTodos((prevTodos) => {
    //         return [
    //             { text: `${text}`, key: Math.random().toString()},
    //             ...prevTodos
    //         ]
    //     })

    // }
  
    return (
      <View style={styles.container}>
        <Header headerTitle='Desafio Zeus'></Header>
        <View style={styles.content}>
          <Lista/>
          <Container>
            <Label>Historico de compras</Label>
            <FlatList 
              data={todos}
              renderItem={({ item }) => (
                <Box>
                  <Text>{item.name}</Text>
                  <Text>R${item.price}</Text>
                  <DeleteButtons onPress={() => deleteSpending(item?._id)} text='a'></DeleteButtons>
              </Box>
              )}  
            />
          </Container>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      overflow: "hidden"
    },
    content: {
      padding: 40,
    },
    list: {
      marginTop: 20,
      maxHeight: 300,
    }
  });

