import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <TextInput
                placeholder="Enter Todo Here"
                onChangeText={(val) => changeHandler(val)}
                style={styles.input}
                value={text}
            />
            <Button title="Add Todo" color="#43dde6" onPress={() => { submitHandler(text), setText('') }} />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#fc5185",
    }
})