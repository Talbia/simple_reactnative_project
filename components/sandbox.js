// FLEXBOX - used to help a page to scroll down

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox(){
    return (
        <View style = {styles.container} >
            <Text style = {styles.boxOne}>One</Text>
            <Text style = {styles.boxTwo}>Two</Text>
            <Text style = {styles.boxThree}>Three</Text>
            <Text style = {styles.boxFour}>Four</Text>
            <Text style = {styles.boxFive}>Five</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        // flex: 1,
        // Flex provides a consistent layout on diff screen sizes.
        
        // As default flexDirection is column, changing it to row
         flexDirection: 'row', 
        paddingTop: 40,
        backgroundColor: '#ddd',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    boxOne: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10,
    },
    boxTwo: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 20,
    },
    boxThree: {
        flex: 1,
        backgroundColor: 'coral',
        padding: 30,
    },
    boxFour: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 10,
    },
    boxFive: {
        flex: 1,
        backgroundColor: 'green',
        padding: 10,
    },


});