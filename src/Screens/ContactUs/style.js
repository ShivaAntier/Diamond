import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  view: {
    flex: 2,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  View: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  concactUsTag: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 30,
  },

  warpper: {
    width: '80%',
  },

  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    width: '80%',
    padding: 10,
  },
  link: {
    color: 'blue',
  },
});
