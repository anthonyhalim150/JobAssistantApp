import React from 'react';
import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native';
import styles from './styles/GlobalStyles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Slot />
    </SafeAreaView>
  );
}