import { Text, View, TextInput } from 'react-native'
import { styles } from './styles'

export function Home() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.eventName }>
          Nome do evento
      </Text>
      <Text style={ styles.eventData }>
          Quinta-feira, 18 de janeiro de 2024 
      </Text>

      <TextInput
       style={styles.input}
       placeholder="Nome do Participante"
       placeholderTextColor='#6B6B6B'
       keyboardType="default"
      />
    </View>
  )
}