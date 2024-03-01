import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    resultIMC: {
        flex: 1,
        marginTop: 15,
        paddingTop: 60,
        borderRadius: 50,
        alignItems: "center",
        width: "100%"
    },
    numberIMC: {
        fontSize: 48,
        color: "#FF0043",
        fontWeight: "bold"
    },
    information: {
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold"
    },
    boxShareButton: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10
    },
    shared: {
        backgroundColor: "#1877f2",
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5
    },
    sharedText: {
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30
    }
})

export default styles