import { Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {
  const participants = [
    'Weliton',
    'Luiz',
    'Edilene',
    'Laisa',
    'Gil',
    'karinen',
    'Karol',
    'Bruno',
    'Luis',
    'Joyce',
    'Leide',
    'Bruna',
    'Fabiana',
    'Fatima',
    'Alice'
  ]

    function handleParticipantAdd(){
      console.log('Voce Chegou aqui')
    }

    function handleParticipantRemove(name: string){
      console.log(`Voce deletou o participante ${name}`)
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

      <ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map(participant =>(
          <Participant
            key={participant}
            name={participant}
            onRemove={ () => handleParticipantRemove('Weliton')  } />
        ))
      }
      </ScrollView>

    </View>
  )
}