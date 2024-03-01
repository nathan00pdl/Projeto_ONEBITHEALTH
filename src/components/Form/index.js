import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultIMC from "./ResultIMC/"
import styles from "./style";

export default function Form() {

    //Declaração de estados das constantes
    const [height, setHeight] = useState(nul)
    const [weight, setWeight] = useState(nul)
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e a altura")
    const [IMC, setIMC] = useState(nul)
    const [textButton, setTextButton] = useState("Calcular")

    //Função para calcular o IMC
    function IMCCalculator() {
        return setIMC((weight / (height * height)).toFixed(2))
    }

    //Validação de dados para o cálculo do IMC
    function validationIMC() {
        if (weight != null && height != null) {
            IMCCalculator()
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu IMC é: ")
            setTextButton("Calcular novamente")
            return
        } else {
            setIMC(null)
            setTextButton("Calcular")
            setMessageIMC("Preencha o peso e a altura")
        }
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>

                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
                />

                <TouchableOpacity
                    style={styles.ButtonCalculator}
                    onPress={() => {
                        validationIMC()
                    }}
                >
                    <Text style={styles.textButtonCalculator}></Text>
                </TouchableOpacity>

            </View>

            <ResultIMC messageResultIMC={messageResultIMC} ResultIMC={IMC} />

        </View>
    );
}