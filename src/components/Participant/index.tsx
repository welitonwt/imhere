import { View, Text, TouchableOpacity} from 'react-native'

import { styles } from './styles'

type Props = {
  name: string,
  idade: string
  onRemove: () => void
}

export function Participant( {name, idade, onRemove} : Props ) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        { name }
      </Text>
      <Text style={styles.name}>
        Idade &nbsp;
        { idade }
      </Text>
      <TouchableOpacity
          style={styles.buttonContainer} onPress={onRemove}
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