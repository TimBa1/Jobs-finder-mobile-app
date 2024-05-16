import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { TextInput } from 'react-native-gesture-handler'
import { icons } from '../../../constants'

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Timilehin</Text>
        <Text style={styles.welcomeMessage}>Find your perfect Job</Text>
      </View>
      
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
            value=''
            onChange={() => { }}
            placeholder='What are you looking for?'
          />
        </View>
        <TouchableOpacity>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
<View  style={styles.tabContainer}>
<Flatlist/>
</View>
    </View>
  )
}

export default Welcome