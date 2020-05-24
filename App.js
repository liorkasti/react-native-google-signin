import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// import { GoogleLogin } from "../RNgooglesignin/android/RN_src/GoogleLogin"
import { GoogleLogin } from "./android/RN_src/GoogleLogin"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>app</Text>
      {/* <GoogleLogin /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    margin: 100,
  }
});