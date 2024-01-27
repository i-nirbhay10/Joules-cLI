import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native'
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fp,
} from 'react-native-responsive-dimensions'
import Quesheader from './Quesheader'

const QuesLive = ({ navigation }) => {
  const [houseSelected, SethouseSelected] = useState(false)
  const [apartmentSelected, SetapartmentSelected] = useState(false)

  const homeSelection = () => {
    Alert.alert('house clicked')
    if (!houseSelected) {
      SethouseSelected(true)
    } else {
      SethouseSelected(false)
    }
  }

  const apartmentSelection = () => {
    Alert.alert('apartment clicked')
    if (!apartmentSelected) {
      SetapartmentSelected(true)
    } else {
      SetapartmentSelected(false)
    }
  }

  return (
    <View style={styles.container}>
      <Quesheader navigation={navigation} />
      <View style={styles.detailscontainer}>
        <View>
          <View style={styles.QuestiontextContainer}>
            <Text
              style={{
                fontSize: fp(2),
              }}
            >
              Question{' '}
              <Text
                style={{
                  color: 'green',
                }}
              >
                2/4
              </Text>
            </Text>
          </View>
          <View>
            <Text style={styles.text}>Where Do You Live ?</Text>
            <View style={styles.ImageView}>
              <View
                style={{
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity
                  style={[
                    styles.imageContainer,
                    { borderColor: `${houseSelected ? 'green' : 'white'}` },
                  ]}
                  onPress={() => homeSelection()}
                >
                  <Image
                    source={require('../assets/housetwo.png')}
                    style={styles.image}
                  />
                </TouchableOpacity>

                <Text>Individual House</Text>
              </View>
              <View
                style={{
                  alignItems: 'center',
                }}
              >
                <TouchableOpacity
                  style={[
                    styles.imageContainer,
                    { borderColor: `${apartmentSelected ? 'green' : 'white'}` },
                  ]}
                  onPress={() => apartmentSelection()}
                >
                  <Image
                    source={require('../assets/apartment.png')}
                    style={styles.image}
                  />
                </TouchableOpacity>
                <Text>Apartment</Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('QuesAddVhicle')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // borderColor: 'white',
    // borderColor: '#DAE0E2',
  },
  detailscontainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#DAE0E2',
    elevation: 3,
    margin: 20,
    borderRadius: 20,
  },
  QuestiontextContainer: {
    // backgroundColor: 'pink',
    padding: 10,
    alignItems: 'flex-end',
  },
  text: {
    padding: 10,
    fontSize: fp(2.5),
  },
  ImageView: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 14,
  },

  imageContainer: {
    width: wp(36),
    height: hp(20),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#fff',
    elevation: 4,
  },
  image: {
    resizeMode: 'contain',
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'green',
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: fp(2.7),
    textAlign: 'center',
  },
})

export default QuesLive
