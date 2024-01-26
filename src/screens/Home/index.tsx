import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from './styles'

export function Home() {
    function handleParticipantAdd(){
      console.log('Voce Chegou aqui')
    }
  return (
    <View style={ styles.container }>
      <Text style={ styles.eventName }>
          Nome do evento
      </Text>
      <Text style={ styles.eventData }>
          Quinta-feira, 18 de janeiro de 2024 
      </Text>

      <View style={styles.form}>
        <TextInput
        style={styles.input}
        placeholder="Nome do Participante"
        placeholderTextColor='#6B6B6B'
        keyboardType="default"
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleParticipantAdd}
        >
          <Text 
            style={styles.buttonText}
          >
            +
          </Text>
        </TouchableOpacity>
          
      </View>


    </View>
  )
}