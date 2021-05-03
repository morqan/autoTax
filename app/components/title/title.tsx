import * as React from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { color, typography } from "../../theme"
import { Text } from "../"

const CONTAINER: ViewStyle = {
  justifyContent: "center",
  paddingHorizontal: 20,
  borderBottomWidth: 1,
  borderColor: 'rgba(0, 0, 0, 0.15)',
  marginTop: 30
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: color.textFieldLabel,
  textAlign: "left",
  fontWeight: "500",
}

export interface TitleProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle,
  titleTx: string
}

/**
 * Describe your component here
 */
export function Title(props: TitleProps) {
  const { style, titleTx } = props

  return (
    <View style={[CONTAINER, style]}>
      <Text style={TEXT} tx={titleTx}/>
    </View>
  )
}
