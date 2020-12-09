import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
  },

  listContainer: {
    marginTop: 230,
    justifyContent: 'center',
    width: '100%',
    maxWidth: 1120,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 100,
  },

  item: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    borderRadius: 5,
    width: '40%',
    maxWidth: 200,
    backgroundColor: '#fff',
    marginTop: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
  },

  textItem: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
});
