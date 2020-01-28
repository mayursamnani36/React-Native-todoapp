import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import TodoItem from './components/TodoItem'
import Header from './components/Header'
import AddTodo from './components/AddTodo';

export default function App() {
  const [todos, setTodos] = useState([
  ]);

  const pressHandler = (key) => { setTodos((prevTodos) => { return (prevTodos.filter(todo => todo.key != key)) }) }
  const submitHandler = (todo) => { if (todo.length > 3) { setTodos((prevTodos) => { return [{ todo: todo, key: Math.random().toString() }, ...prevTodos,] }) } else { Alert.alert('OOPS', 'Todos must be over 3 chars long', [{ text: "Understood" }]) } }

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={todos}
              renderItem={({ item }) => (<TodoItem item={item} pressHandler={pressHandler} />)}
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
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});
