import React from "react";
import {Text,Image, View, StyleSheet} from "react-native";
import logo from '../../../assets/logo.png';
import { carregaTopo } from "../../../servicos/carregaDados";

class Topo extends React.Component {
    state = {
        topo: {
            boasVindas: 'Olá',
            legenda: 'legenda'
        }
    }

    atualizaTopo(){
        const retorno = carregaTopo();
        this.setState({ topo : retorno });
    }

    componentDidMount(){
        this.atualizaTopo();
    }

    render(){
        return <View style={estilos.topo}>
            <Image style={estilos.imagem} source={logo} />
            <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
            <Text>{this.state.topo.legenda}s</Text>
        </View>
    }
}

const estilos = StyleSheet.create({
    topo:{
        backgroundColor: "#f6f6f6",
        padding: 16,
    },
    imagem:{
        width: 70,
        height: 28
    },
    boasVindas:{
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color: "#464646"
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26,
        color: "#a3a3a3"
    }
});

export default Topo;