import { StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 5,
    padding: 5,
  },
  commons: {
    fontSize: 40,
    marginTop: 30,
    marginBottom: 1,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 3,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 20,
    margin: 15,
    marginLeft: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
    marginLeft: 20,
    color: 'red',
  },
  span: {
    fontWeight: 'bolder',
    textDecoration: 'underline',
  },
});

export default styles;
