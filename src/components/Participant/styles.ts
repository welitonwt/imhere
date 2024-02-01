import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,    
    backgroundColor: '#1F1E25',
    borderRadius: 5,
  },
  
  name: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 24,
    marginLeft: 16
  },

  buttonContainer:{
    backgroundColor: '#E23C44',
    width: 50,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },

  buttonText: {
    color: '#fff',
    fontSize: 32
  }
})