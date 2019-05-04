import React, { Component } from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import methodCardData from '../../data/methodCardData';
import { MyContext } from '../../Context/ContextComponent';
// import {
//   ShortTermDiv,
//   MediumTermDiv,
//   LongTermDiv,
//   CardContainerDiv,
//   SubtitlePriority,
//   SubtitleTime,
// } from '../Timeline/index.style';

// Create styles
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

class PdfSummary extends Component {
  state = { finalCardInfo: [] };

  componentDidMount() {
    console.log(111111111);
    const { selectedCards, selectedPriority, selectedTime } = this.props;
    console.log('selectedCards:', selectedCards)
  
    const idArray = selectedCards.map(ele => ele.id);

    const prioritizedCards = methodCardData.filter(card =>
      idArray.includes(card.id)
    );

    const finalCardInfo = prioritizedCards.map((ele, ind) => {
      const newObj = ele;
      newObj.priority = selectedPriority[ind].priority;
      newObj.time = selectedTime[ind].time;
      return newObj;
    });
    this.setState({ finalCardInfo });
  }

  renderElements = (priorityArg, timeArg) => {
    const { finalCardInfo } = this.state;
    return finalCardInfo.map(ele => {
      if (ele.priority === priorityArg && ele.time === timeArg) {
        return <Text key={ele.id}>{ele.cardTitle}</Text>;
      }
      return null;
    });
  };

  render() {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Short-Term</Text>

            <Text>Low priority</Text>
            {this.renderElements('low', 'short')}

            {this.renderElements('medium', 'short')}

            <Text>High priority</Text>
            {this.renderElements('high', 'short')}
          </View>
          <View style={styles.section}>
            <Text>Med-Term</Text>

            {this.renderElements('low', 'mid')}

            {this.renderElements('medium', 'mid')}

            {this.renderElements('high', 'mid')}
          </View>
          <View style={styles.section}>
            <Text>Long-Term</Text>

            {this.renderElements('low', 'long')}

            {this.renderElements('medium', 'long')}

            {this.renderElements('high', 'long')}
          </View>
        </Page>
      </Document>
    );
  }
}

PdfSummary.contextType = MyContext;

export default PdfSummary;
