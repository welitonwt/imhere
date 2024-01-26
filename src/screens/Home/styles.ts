import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',

  },

  eventName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15
  },

  eventData: {
    color: '#C4C2C2',
    fontSize: 14,
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42,
 },

  input:{
    flex: 1,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#1f1e25',
    color: '#fff',
    padding: 6,
    fontSize: 16,
    marginRight: 12
  },

  buttonContainer:{
    backgroundColor: '#115515',
    width: 56,
    height: 56,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 24
  }
})