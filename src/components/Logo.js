import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/jouls.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 70,
    marginBottom: 8,
  },
})
