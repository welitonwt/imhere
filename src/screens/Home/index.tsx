import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'
import React, { useState } from 'react'

export function Home() {
  const [participants, setParticipants] = useState(['Davi'])
  
    function handleParticipantAdd(){
      if(participants.includes('Weliton')) {
      return Alert.alert(
          'Participante Existe',
          'Ja existe um participante na lista com esse nome')
      }

      setParticipants( state => [...state, 'Karine'])
    }

    function handleParticipantRemove(name: string){
      Alert.alert('Remover',`Remover o participante ${name}?`, [
        {
          text: 'Sim',
          onPress: () => {Alert.alert(`${name} deletado com sucesso!`)}
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ])
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

      <FlatList 
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={item => item}
        renderItem={({item})=> (
          <Participant
          key={item}
          name={item}
          onRemove={ () => handleParticipantRemove( item )  } />
        )} 
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento ainda? Adicione participantes a sua
            lista de presença.
          </Text>
        )}      
      />

      {/* <ScrollView showsVerticalScrollIndicator={false}>
      {
        participants.map(participant =>(
          <Participant
            key={participant}
            name={participant}
            onRemove={ () => handleParticipantRemove('Weliton')  } />
        ))
      }
      </ScrollView> */}

    </View>
  )
}