import { StyleSheet, Text, View } from "react-native";
import Tarefa from './componentes/Tarefa';

export default function App() {
    return (
        <View style={estilos.container}>

            <View style={estilos.listaTarefas}>
                <Text style={estilos.titulo}>Minhas tarefas</Text>

                {/* Lista de Tarefas */}
                <View style={estilos.itens}>
                    <Tarefa texto={'Limpar Chão'}/>
                    <Tarefa texto={'Lavar Roupa'}/>
                    <Tarefa texto={'Beber Vinho'}/>
                    <Tarefa texto={'Cozinhar'}/>
                    <Tarefa texto={'Jogar'}/>
                </View>
            </View>

        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00A7FF",
    },
    listaTarefas: {
        backgroundColor: "#00A7FF",
        paddingTop: 80,
        paddingHorizontal: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FFF",
    },
    itens: {},
});
