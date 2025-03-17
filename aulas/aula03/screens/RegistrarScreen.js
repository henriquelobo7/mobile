import  { View, Text, TextInput, Button ,StyleSheet } from "react-native"

function RegistrarScreen() {
    return (
        <View style = {styles.container}>
            <View style = {styles.appBar}>
                <Text style = {styles.appTitle}>Criar Conta</Text>
            </View>
            <View>
                <TextInput placeholder="Nome"/>
                <TextInput placeholder="E-mail" keyboardType="email-adress"/>
                <TextInput placeholder="Senha" secureTextEntry/>
                <Button title="Registrar"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {flex: 1},
    appBar: {
        height: 64,
        backgroundColor: "blue",
        padding: 16,
        justifyContent: "center",
        elevation: 3,
        marginBottom: 8,
    },
    appTitle: {
        fontSize: 24,
        color: "white"
    }
})

export default RegistrarScreen