import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

const App = () => {
    const [display, setDisplay] = useState('0');

    const handlePress = (value) => {
        if (display === '0') {
            setDisplay(value);
        } else {
            setDisplay(display + value);
        }
    };

    const handleClear = () => {
        setDisplay('0');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.displayText}>{display}</Text>
            </View>
            <View style={styles.buttons}>
                {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '00'].map((num) => (
                    <TouchableOpacity
                        key={num}
                        style={styles.button}
                        onPress={() => handlePress(num)}
                    >
                        <Text style={styles.buttonText}>{num}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity style={styles.button} onPress={handleClear}>
                    <Text style={styles.buttonText}>Clear</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    display: {
        width: '90%',
        backgroundColor: '#000',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    displayText: {
        color: '#fff',
        fontSize: 40,
        textAlign: 'right',
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    button: {
        width: '30%',
        margin: '1%',
        padding: 20,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 30,
    },
});

export default App;
