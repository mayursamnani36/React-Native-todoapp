import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function TodoItem({ item, pressHandler }) {
    return (
        <TouchableOpacity onPress={() => { pressHandler(item.key) }}>
            <View style={styles.text}>
                <MaterialIcons name="delete" size={18} color='#364f6b' />
                <Text style={styles.itemText}>{item.todo}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        flexDirection: "row",
        padding: 16,
        marginTop: 16,
        borderColor: "#fc5185",
        borderWidth: 2,
        borderStyle: "dashed",
        borderRadius: 10,
        color: "#364f6b",
    },
    itemText: {
        marginLeft: 10,
    }
})