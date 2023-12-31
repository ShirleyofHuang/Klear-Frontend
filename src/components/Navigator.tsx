import { useNavigation, useRoute } from "@react-navigation/native"
import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import PersonIcon from "../assets/PersonIcon.svg"
import HomeTab from "../assets/HomeTab.svg"
import IncidentsTab from "../assets/IncidentsTab.svg"

export default function NavigatorTab() {
  const nav = useNavigation<any>()
  const route = useRoute()
  return (
    <View style={styles.bottomFooter}>
      <View style={styles.line} />
      <View style={styles.wrapper} >
        <Pressable onPress={() => nav.navigate("Students")} style={styles.buttonArea}>
          {route.name == "Students" && (<View style={styles.selectedIndicator} />)}
          < PersonIcon height={28} width={28} />
          <Text>Students</Text>
        </Pressable>
        <Pressable onPress={() => nav.navigate("Home")} style={styles.buttonArea}>
          {route.name == "Home" && (<View style={styles.selectedIndicator} />)}
          <HomeTab height={28} width={28} />
          <Text>Home</Text>
        </Pressable>
        <Pressable onPress={() => nav.navigate("Past Incidents")} style={styles.buttonArea}>
          {route.name == "Past Incidents" && (<View style={styles.selectedIndicator} />)}
          <IncidentsTab />
          <Text>Incidents</Text>
        </Pressable>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({
  bottomFooter: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: 'white',
  },
  wrapper: {
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  line: {
    height: 2,
    backgroundColor: '#CDCDCD',
    width: "100%",
  },
  buttonArea: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  selectedIndicator: {
    position: 'absolute',
    top: -3,
    width: 55,
    height: 4,
    backgroundColor: "black",
    borderRadius: 2,
  }
})
