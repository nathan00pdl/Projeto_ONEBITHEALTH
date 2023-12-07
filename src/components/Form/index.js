import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultIMC from "./ResultIMC/"

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
        <View>
            <View>

                <Text>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />

                <Text>Peso</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 75.365"
                    keyboardType="numeric"
                />

                <Button
                    onPress={() => validationIMC}
                    Title={textButton}
                />

            </View>

            <ResultIMC messageResultIMC={messageResultIMC} ResultIMC={imc} />

        </View>
    );
}