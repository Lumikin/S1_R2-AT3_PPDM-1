import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Contato() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.Text} > Telefone:  </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef3e4",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 5
  },
  Text:{

  }
});
