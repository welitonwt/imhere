import { Text, View } from 'react-native'
import { styles } from './styles'

export function Home() {
  return (
    <View style={ styles.container }>
      <Text key='1' style={ styles.eventName }>
          Hello
      </Text>
      <Text key='2' style={ styles.eventName }>
        Word
      </Text>
    </View>
  )
}