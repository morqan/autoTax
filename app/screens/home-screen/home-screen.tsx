import React from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.lightGrey,
  flex: 1,
  paddingVertical: spacing[8],
}
const BTN_BOX: ViewStyle = {
  paddingHorizontal: spacing[6],
  paddingVertical: spacing[6],
}
const BTN: ViewStyle = {
  marginBottom: spacing[4],
  paddingVertical: spacing[5],
  paddingHorizontal: spacing[4],
  borderRadius: 8
}
const CALCULATE: ViewStyle = {
  ...BTN,
  backgroundColor: color.palette.green,
}
const DETAILCAL: ViewStyle = {
  ...BTN,
  backgroundColor: color.palette.blue,
}
const ASKQUES: ViewStyle = {
  ...BTN,
  backgroundColor: "#FFF",
  borderWidth: 2,
  borderColor: color.palette.red
}

const CONTINUE_TEXT: TextStyle = {
  fontSize: 22,
  letterSpacing: 2,
}
const ASKQUES_TEXT: TextStyle = {
  fontSize: 22,
  letterSpacing: 2,
  color: color.palette.red
}
const LOGO: TextStyle = {
  fontSize: 22,
  letterSpacing: 2,
  color: '#1284BE',
  textAlign: "center"
}
const DESCRIPTION: TextStyle = {
  fontSize: 16,
  lineHeight: 24,
  textAlign: "left",
  color: color.palette.gray
}

export const HomeScreen = observer(function HomeScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("demo")
  const calculateScreen = () => navigation.navigate("calculate")
  return (
    <Screen style={ROOT} preset="scroll">
      <Text style={LOGO} preset="header" text="AUTOTAX" />
      <View style={BTN_BOX}>
        <Button style={CALCULATE} textStyle={CONTINUE_TEXT} onPress={calculateScreen} tx="homeScreen.calculate" />
        <Button style={DETAILCAL} textStyle={CONTINUE_TEXT} onPress={nextScreen} tx="homeScreen.detailedCal" />
        <Button style={ASKQUES} textStyle={ASKQUES_TEXT} onPress={nextScreen} tx="homeScreen.askQues"  />
      </View>
      <View style={BTN_BOX}>
        <Text style={DESCRIPTION}  tx="homeScreen.description" />
      </View>
    </Screen>
  )
})
