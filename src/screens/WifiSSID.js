import React, { useEffect, useState } from 'react'
import { Text, View ,PermissionsAndroid, Button} from 'react-native'
import WifiReborn from "react-native-wifi-reborn";
import WifiManager from "react-native-wifi-reborn";
// import DeviceInfo from 'react-native-device-info';



const WifiSSID = () => {
const [wifiList,setWifiList]=useState([])
console.log("wifilist",wifiList);
// console.log('wifilist',wifiList)
const [currentSSID,setCurrentSSID]=useState("")
// const isWifiEnabled = DeviceInfo.isWifiEnabled();
// console.log('Is Wi-Fi Enabled:', isWifiEnabled);
// useEffect(()=>{
// permission()
// getWifiList()
// },[])

useEffect(()=>{
    permission()
    WifiReborn.getCurrentWifiSSID().then(
        ssid=>  {
            // console.log("Your current connected wifi SSID is "+ssid)
            setCurrentSSID(ssid)
        },
        ()=>{
            console.log("cannot get current ssid")
        }
    )

    // // list
    // WifiReborn.loadWifiList().then((List)=>
    // setWifiList(List))
// connect
    // WifiManager.connectToProtectedSSID('Jouls Wifi', '123456789', false, connected => {
    //     console.log("connected",connected)
    //     if (connected) {
    //       console.log('Connected to Wi-Fi successfully');
    //     } else {
    //       console.log('Connection to Wi-Fi failed');
    //     }
    //   });
console.log("wifilist",wifiList);
      
},[])

const getWifiList=()=>{
    WifiReborn.getCurrentWifiSSID().then(ssid=> setCurrentSSID(ssid))
}

const permission=async()=>{
        const granted=await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title:"Location permission is required for Wifi connections",
                message:
                "This app needs  location permissions as this is required"+
                "to scan for wifi networks",
                buttonNegative:"DENY",
                buttonPositive:"ALLOW"
            },
        )
        if(granted==PermissionsAndroid.RESULTS.GRANTED){
            console.log("granted")
        }
        else{
            console.log("not granted");
        }
    }
const cn=()=>{
    console.log("helllo");
    console.log(wifiList[0].SSID);
    // if(wifiList.includes("Jouls"))
    // fetch(`http://192.168.4.1/?username=Jouls%20Wifi&password=123456789&`)

}
const wifilis=()=>{
    WifiReborn.loadWifiList().then((List)=>
    setWifiList(List))
}
  return (
    <View style={{flex:1,margin:20}}>
      <Text
        style={{
            fontSize:20,
            color:"green",
            textAlign:"center"
        }}
    >
           How to get Wifi Details
      </Text>
      <Button title='wifilist' onPress={wifilis}></Button>
      <Button onPress={cn} title='link'/>
      <Text style={{marginTop:20,color:"red"}}>current SSID:{currentSSID}</Text>
      {wifiList.map((e)=>{
        return <Text>{e.SSID}</Text> 
      })}
    </View>
  )
}

export default WifiSSID
