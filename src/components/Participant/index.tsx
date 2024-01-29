import { View, Text, TouchableOpacity} from 'react-native'

import { styles } from './styles'

export function Participant() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        Weliton Souza Duarte
      </Text>
      <TouchableOpacity
          style={styles.buttonContainer}
        >
          <Text 
            style={styles.buttonText}
          >
            -
          </Text>
        </TouchableOpacity>
    </View>
  )
}