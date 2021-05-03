import React, {useState} from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle, View, Dimensions } from "react-native"
import { Checkbox, Screen, TextField, Title } from "../../components"
import DropDownPicker from 'react-native-dropdown-picker'
import Icon from 'react-native-vector-icons/Feather';
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
const windowWidth = Dimensions.get('window').width;

const ROOT: ViewStyle = {
  backgroundColor: color.palette.lightGrey,
  flex: 1,
  paddingVertical: spacing[4],
}
const FIELDDROPBOX: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: "space-between",
  marginBottom: 35,
  paddingHorizontal: 20
  // backgroundColor: color.palette.black,
}

const INPUT: TextStyle = {
  backgroundColor: color.palette.lightBlue,
  borderRadius: 5,
  paddingHorizontal: 21,
  paddingVertical: 13,
  marginTop: 5,
  width: windowWidth * 0.61
}
export const CalculateScreen = observer(function CalculateScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()
  // OR
  // const rootStore = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  const [checked, setChecked] = useState(true);
  const [currency, setCurrency] = useState('USD');


  return (
    <Screen style={ROOT} preset="scroll">
      <View style={FIELDDROPBOX}>
        <TextField labelTx='calculateScreen.custVal' inputStyle={INPUT} placeholder={'3500'} keyboardType={'numeric'} />
        <DropDownPicker
          items={[
            {label: 'USD', value: 'USD', icon: () => <Icon name="flag" size={18} color="#fff" />},
            {label: 'AZ', value: 'AZ', icon: () => <Icon name="flag" size={18} color="#fff" />},
          ]}
          defaultValue={currency}
          containerStyle={{height: 53, width: windowWidth * 0.25, borderRadius: 5 }}
          style={{backgroundColor: color.palette.blue}}
          itemStyle={{ justifyContent: 'flex-start' }}
          dropDownStyle={{backgroundColor: color.palette.blue}}
          labelStyle={{
            fontSize: 16,
            textAlign: 'center',
            color: '#fff'
          }}
          onChangeItem={item => setCurrency(item.value)}
        />
      </View>
      <View style={{paddingHorizontal: 20, marginBottom: 6}}>
        <TextField labelTx='calculateScreen.EngOperaVol' inputStyle={[INPUT,{width: windowWidth * 0.9}]} placeholder={'1400'} keyboardType={'numeric'}/>
      </View>
      <Title titleTx={'calculateScreen.titleCarCountry'}/>
      <View style={{paddingHorizontal: 20, paddingVertical: 11}}>
        <Checkbox text={'Digər'} value={checked} onToggle={() => setChecked(!checked)}/>
      </View>
    </Screen>
  )
})
