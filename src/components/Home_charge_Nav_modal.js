import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Alert,
    Image,
  } from 'react-native'
  import React from 'react'
  import Modal from 'react-native-modal'
  import { useNavigation } from '@react-navigation/native'
  // import { Item } from 'react-native-paper/lib/typescript/components/List/List'
  // import { index } from 'd3'
  
  const Navmodal = ({ naveopen, closeNave }) => {
    const navigation = useNavigation()
  
    const navitems = [
      {
        Nav_icon: require('../assets/historynav.png'),
        Nav_name: 'Charging history',
        navigat: 'Welcomepage',
      },
      {
        Nav_icon: require('../assets/directions_car.png'),
        Nav_name: 'My Vehicles',
        navigat: 'Screen2',
      },
      {
        Nav_icon: require('../assets/wifiicon.png'),
        Nav_name: 'Change Wifi',
        navigat: 'Screen3',
      },
      {
        Nav_icon: require('../assets/flash_on.png'),
        Nav_name: 'Total Current Charge',
        navigat: 'Screen4',
      },
      {
        Nav_icon: require('../assets/person_add.png'),
        Nav_name: 'Add Friend',
        navigat: 'Screen5',
      },
      {
        Nav_icon: require('../assets/deviceadd.png'),
        Nav_name: 'Add a device',
        navigat: 'Screen6',
      },
      {
        Nav_icon: require('../assets/fluorescent.png'),
        Nav_name: 'LED brightness',
        navigat: 'Screen7',
      },
      {
        Nav_icon: require('../assets/solar_power.png'),
        Nav_name: 'Add Solar power',
        navigat: 'Screen8',
      },
    ]
  
    return (
      <View>
        <Modal
          isVisible={naveopen}
          onSwipeComplete={closeNave}
          swipeDirection={'left'}
          onBackButtonPress={closeNave}
          style={styles.modal}
          hideModalContentWhileAnimating={true}
          animationIn={'slideInLeft'}
          animationOut={'slideOutLeft'}
        >
          <View style={styles.container}>
            <View style={{ backgroundColor: '' }}>
              <Image
                source={require('../assets/nevvector.png')}
                style={styles.backsvg}
                resizeMode="stretch"
              />
              <View style={styles.profileContainer}>
                <Image
                  source={require('../assets/mypic.jpg')}
                  style={styles.profileimg}
                  resizeMode="contain"
                />
                <Text style={{ fontSize: 18, color: '#118615' }}>Aman Goyal</Text>
                <Text style={{ fontSize: 12 }}>mailg@gmail.com</Text>
  
                <TouchableOpacity style={styles.prfileEdit}>
                  <Image
                    source={require('../assets/account_circle.png')}
                    style={{ height: 20, width: 20, resizeMode: 'contain' }}
                    resizeMode="contain"
                  />
                  <Text style={{ color: '#FFFFFF' }}>Edit Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginHorizontal: 15 }}>
              {navitems.map((items, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.navButton}
                  onPress={() => navigation.navigate(items.navigat)}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 15,
                      alignItems: 'center',
                    }}
                  >
                    <View style={{ padding: 3, backgroundColor: '#F7F7F7' }}>
                      <Image
                        source={items.Nav_icon}
                        style={{ height: 18, width: 18, resizeMode: 'contain' }}
                      />
                    </View>
  
                    <Text style={{ fontSize: 16, color: '#5F615F' }}>
                      {items.Nav_name}
                    </Text>
                  </View>
  
                  <Image
                    source={require('../assets/chevron_right.png')}
                    style={{ height: 20, width: 20, resizeMode: 'contain' }}
                  />
                </TouchableOpacity>
              ))}
              <TouchableOpacity style={styles.logout}>
                <View>
                  <Text style={{ fontSize: 16, color: '#118615' }}>Sign Out</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
  
  export default Navmodal
  
  const styles = StyleSheet.create({
    modal: {
      margin: 0,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      width: '80%',
    },
    backsvg: { position: 'absolute', width: '100%', height: 120 },
    profileContainer: { alignItems: 'center', marginTop: 30, gap: 3 },
    profileimg: {
      width: 60,
      height: 60,
      alignSelf: 'center',
      borderRadius: 60 / 2,
      borderWidth: 2,
      borderColor: '#118615',
    },
  
    prfileEdit: {
      flexDirection: 'row',
      backgroundColor: '#118615',
      padding: 8,
      gap: 5,
      justifyContent: 'space-between',
      marginTop: 5,
      marginBottom: 20,
      alignItems: 'center',
      borderRadius: 20,
    },
    navButton: {
      flexDirection: 'row',
      backgroundColor: '#F0F0F0',
      padding: 8,
      justifyContent: 'space-between',
      marginBottom: 10,
      alignItems: 'center',
      borderRadius: 8,
    },
    logout: {
      marginTop: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      width: '40%',
      padding: 8,
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#B7B7B7',
    },
  })
  