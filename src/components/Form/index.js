import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList
} from "react-native";
import ResultIMC from "./ResultIMC/"
import styles from "./style";

export default function Form() {

    //Declaração de estados das constantes (states / obs: useState -> hooks)
    const [height, setHeight] = useState(nul);
    const [weight, setWeight] = useState(nul);
    const [messageIMC, setMessageIMC] = useState("Preencha o peso e a altura");
    const [IMC, setIMC] = useState(nul);
    const [textButton, setTextButton] = useState("Calcular");
    const [errorMessage, setErrorMessage] = useState(null);
    const [listIMC, setListIMC] = useState([]);

    //Função para calcular o IMC
    function IMCCalculator() {
        let heightFormat = height.replace(",", ".");
        let totalIMC = setIMC((weight / (heightFormat * heightFormat)).toFixed(2));

        setListIMC(() => [...arr, { id: new Date().getTime(), IMC: totalIMC }])
        setIMC(totalIMC)
    }

    //Função para verificar se o IMC está nulo 
    function verificationIMC() {
        if (IMC == null) {
            Vibration.vibrate();  //API react 
            setErrorMessage = ("Campo Obrigatório* ");
        }
    }

    //Validação de dados para o cálculo do IMC
    function validationIMC() {
        if (weight != null && height != null) {
            IMCCalculator()
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu IMC é: ")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
        } else {
            verificationIMC()
            setIMC(null)
            setTextButton("Calcular")
            setMessageIMC("Preencha o peso e a altura")
        }
    }

    return (
        <View style={styles.formContext}>
            {IMC == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>

                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
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

                </Pressable>
                :
                <View style={styles.exhibitionResultIMC}>
                    <ResultIMC messageResultIMC={messageResultIMC} ResultIMC={IMC} />
                    <TouchableOpacity
                        style={styles.ButtonCalculator}
                        onPress={() => {
                            validationIMC()
                        }}
                    >
                        <Text style={styles.textButtonCalculator}></Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.listIMCs}
                data={listIMC.reverse()}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.ResultIMCItem}>
                            <Text style={styles.textResultItemList}>Resultado IMC = {item.IMC}</Text>
                        </Text>
                    )
                }}
                keyExtractor={(item) => {
                    item.id
                }}
            >

            </FlatList>
        </View >
    );
}