import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../styles';

export default class TutorSettingsScreen extends React.Component {
  render() {
    return <SafeAreaView style={styles.container} />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});
