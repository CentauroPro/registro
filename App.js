import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  TextInput,
  View,
} from "react-native";

export default function App() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("./assets/image/policia.png")}
    >
      <Text style={styles.textpolicia}>POLICIA NACIONAL DEL ECUADOR </Text>

      <TouchableOpacity style={styles.ima}>
        <Image
          source={require("./assets/image/placa-de-policia.png")}
          style={styles.ima}
        />
      </TouchableOpacity>
      <Text></Text>
      <Text></Text>
      <View style={styles.conta}>
        <TextInput placeholder="Nombre" style={styles.input} />

        <TextInput placeholder="correo" style={styles.input1} />

        <TextInput placeholder="Password" style={styles.input2} />
        <TextInput placeholder="******" style={styles.input3} />
      </View>

      <TouchableOpacity style={styles.btn}>
        <Text style={{ color: "with" }}> Registrarse </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  conta: {
    borderWidth: 1,
    flex: 1,
    backgroundColor: "rgba(105, 105, 105, 0.5)",
    marginBottom: 30,
    width: "80%",
    
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "#00d0ffde",
  },

  textpolicia: {
    fontSize: 38,
    textAlign: "center",
    color: "#f2e8e8",
    marginBottom: 50,
  },
  ima: {
    height: 100,
    width: 100,
  },
  input: {
    borderWidth: 1,
    height: 40,
    width: "80%",
    paddingHorizontal: 20,
    borderRadius: 20,
    borderColor: "#00d0ffde",
    backgroundColor: "#d7daf0",
    marginBottom: 20,
  },

  input1: {
    borderWidth: 1,
    height: 40,
    width: "80%",
    paddingHorizontal: 20,
    borderRadius: 15,
    borderColor: "#00d0ffde",
    backgroundColor: "#d7daf0",
    marginBottom: 20,
  },
  input2: {
    borderWidth: 1,
    height: 40,
    width: "80%",
    paddingHorizontal: 20,
    borderRadius: 15,
    borderColor: "#00d0ffde",
    backgroundColor: "#d7daf0",
    marginBottom: 20,
  },
  input3: {
    borderWidth: 1,
    height: 40,
    width: "80%",
    paddingHorizontal: 20,
    borderRadius: 15,
    borderColor: "#00d0ffde",
    backgroundColor: "#d7daf0",
    marginBottom: 20,
  },

  btn: {
    backgroundColor: "#00d0ffde",
    height: 50,
    width: 120,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 20,
  },
  btn1: {
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",

    marginBottom: 20,
    flexDirection: 20,
  },

  Ima: {
    width: 40,
    height: 20,
  },
  ima1: {
    flexDirection: "row",
    height: 40,
    width: 20,
  },
});
