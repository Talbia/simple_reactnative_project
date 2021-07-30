// The main App.js for Todo App - used for all Todo_App_Parts


import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, Keyboard, TouchableWithoutFeedback, TouchableWithoutFeedbackBase} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import Sandbox from './components/sandbox';

export default function App() {
// Creating a To-Do list
  const [todos, setTodos] = useState([
    { text: 'Drink coffee', key: '1'},
    { text: 'Practice coding', key: '2'},
    { text: 'Learn React Native', key: '3'},
    { text: 'Create an app', key: '4'},
    { text: 'Play on the switch', key: '5'},
  ]);

    // The Todo option will be removed once you press the key
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }
// This will submit the new option and add a random key number 
  const submitHandler = (text) => {

    // Text length must be more than 3 chars.
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          // this will add new todo text item and key value
          {text: text, key: Math.random().toString() },
          ...prevTodos
        ];
      });
    }
    // If length is less than 4, an alert will pop up
    else {
      Alert.alert('Oops!', 'Todos must be atleast 4 characters long', [
        {text: 'Got it', onPress: () => console.log('alert closed')}
      ]);
    }

  }

  return (
    //  <Sandbox />
    // Keyboard will dismiss once you press elsewhere other than the typing area
    
    <TouchableWithoutFeedback onPress = {() => {
      Keyboard.dismiss();
      console.log('Dismissed Keyboard');
    }}>
    <View style = {styles.container}>
      
      <Header />
      {/* Header part */}
      <View style = {styles.content}>
        <AddTodo submitHandler = {submitHandler} />
        {/* Add new todo part */}
        
        {/* to view as a form */}
        <View style = {styles.list}>
          <FlatList 
          data = {todos}
          renderItem = {({ item }) => (
            
            //TodoItem listing part
            <TodoItem item = {item} pressHandler = {pressHandler}/>
          )} 
          />
        </View>
      </View>

    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content: {
    padding: 40,
    backgroundColor: 'powderblue',
    flex: 1,


  },
  list: {
    flex: 1,
    marginTop: 40,
    padding: 10,
    backgroundColor: 'lightpink',
  }
   

});
