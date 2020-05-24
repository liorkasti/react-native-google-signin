import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { GoogleLogin } from "../RNgooglesignin/android/RN_src/GoogleLogin"

const App = () => {
  return (
    <View style={styles.container}>
      <GoogleLogin />
    </View>

    // <View style={styles.container}>
    //   <StatusBar barStyle="dark-content" />
    //   <SafeAreaView>
    //     <Text>app</Text>
    //     <GoogleLogin />
    //   </SafeAreaView>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: "center",
    margin: 100,
  }
});

export default App;
