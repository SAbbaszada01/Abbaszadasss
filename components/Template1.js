import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 30 },
  section: { marginBottom: 10 }
});

const Template1 = ({ name, experience }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Ad: {name}</Text>
      </View>
      <View style={styles.section}>
        <Text>Təcrübə: {experience}</Text>
      </View>
    </Page>
  </Document>
);

export default Template1;