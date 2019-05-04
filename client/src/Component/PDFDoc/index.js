import React, { Component } from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import methodCardData from '../../data/methodCardData';
import styles from './index.style';

class PdfSummary extends Component {
  state = {
    finalCardInfo: [],
  };

  componentDidMount() {
    const { selectedCards, selectedPriority, selectedTime } = this.props;

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
        return (
          <Text key={ele.id} style={styles.name}>
            {ele.cardTitle}
          </Text>
        );
      }
      return null;
    });
  };

  render() {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.commons}>
            <Text>Commons</Text>
          </View>
          <View style={styles.title}>
            <Text>Your Action Plan</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.subTitle}>
              Short-Term/ <Text style={styles.span}>Low</Text> Priority
            </Text>
            {this.renderElements('low', 'short')}
            <Text style={styles.subTitle}>
              Short-Term/ <Text style={styles.span}>Medium</Text> Priority
            </Text>
            {this.renderElements('medium', 'short')}
            <Text style={styles.subTitle}>
              Short-Term/ <Text style={styles.span}>High</Text> Priority
            </Text>
            {this.renderElements('high', 'short')}
          </View>
          <View style={styles.section}>
            <Text style={styles.subTitle}>
              Mid-Term/ <Text style={styles.span}>Low</Text> Priority
            </Text>
            {this.renderElements('low', 'mid')}
            <Text style={styles.subTitle}>
              Mid-Term/ <Text style={styles.span}>Medium</Text> Priority
            </Text>
            {this.renderElements('medium', 'mid')}
            <Text style={styles.subTitle}>
              Mid-Term/ <Text style={styles.span}>High</Text> Priority
            </Text>
            {this.renderElements('high', 'mid')}
          </View>
          <View style={styles.section}>
            <Text style={styles.subTitle}>
              Long-Term/ <Text style={styles.span}>Low</Text> Priority
            </Text>
            {this.renderElements('low', 'long')}
            <Text style={styles.subTitle}>
              Long-Term/ <Text style={styles.span}>Medium</Text> Priority
            </Text>
            {this.renderElements('medium', 'long')}
            <Text style={styles.subTitle}>
              Long-Term/ <Text style={styles.span}>High</Text> Priority
            </Text>
            {this.renderElements('high', 'long')}
          </View>
        </Page>
      </Document>
    );
  }
}

export default PdfSummary;
