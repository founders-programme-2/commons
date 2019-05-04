import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { MyContext } from '../../Context/ContextComponent';

class Test extends Component {
  state = {};

  render() {
    console.log('this.context:ffffffffffffff', this.context);
    const styles = StyleSheet.create({
      page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
      },
      section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
      },
    });
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Short-Term</Text>
            <Text>Fuck context</Text>
          </View>
        </Page>
      </Document>
    );
  }
}

Test.contextType = MyContext;

export default Test;
