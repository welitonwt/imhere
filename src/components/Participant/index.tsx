import { View, Text, TouchableOpacity} from 'react-native'

import { styles } from './styles'

type Props = {
  name: string,
  idade: string
}

export function Participant( props : Props ) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        { props.name }
      </Text>
      <Text style={styles.name}>
        Idade &nbsp;
        { props.idade }
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