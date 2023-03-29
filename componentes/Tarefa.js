import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Tarefa = (props) => {
    return (
        <View style={estilos.item}>
            <View style={estilos.alinhamento}>
                <TouchableOpacity style={estilos.quadrado}></TouchableOpacity>
                <Text style={estilos.texto}>{props.texto}</Text>
            </View>

            <View></View>
        </View>
    );
}

const estilos = StyleSheet.create({
    item:{
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 3,
        marginBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    quadrado: {
        width: 20,
        height: 20,
        backgroundColor: "#00A7FF",
        opacity: 0.4,
        borderRadius: 2
    },
    alinhamento: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    texto: {
        marginStart: 10
    }
});

export default Tarefa;