import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

const CalculatorBasic = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  const addNumbers = () => {
    const first = parseFloat(num1) || 0;
    const second = parseFloat(num2) || 0;
    setResult(first + second);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}> 🤓 Well yet another calculator 🤓 </Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Number 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Number 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <Text style={styles.result}>Result: {result}</Text>
      <TouchableOpacity style={styles.button} onPress={addNumbers}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
    fontFamily: "Comic Sans MS",
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dbea9d",
  },
  input: {
    width: "100%",
    borderWidth: 3,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  result: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});


export default CalculatorBasic;