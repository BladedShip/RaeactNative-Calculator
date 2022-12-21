import React from 'react';
import Button from './Button';
import {View, Text} from 'react-native';
import {Styles} from '../styles/GlobalStyles';
import {colors} from '../styles/Colors';

export default function Keyboard() {
  const [fOperand, setFOperand] = React.useState('');
  const [sOperand, setSOperand] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const [result, setResult] = React.useState<Number | null>(null);

  const numPress = (btnValue: string) => {
    if (fOperand.length < 10) {
      setFOperand(fOperand + btnValue);
    }
  };

  const opPress = (btnValue: string) => {
    setOperation(btnValue);
    setSOperand(fOperand);
    setFOperand('');
  };

  const clearScreen = () => {
    setFOperand('');
    setSOperand('');
    setOperation('');
    setResult(null);
  };

  const opDisplay=()=>{
    if(result!==null)
        return <Text style={result<99999?[Styles.screenFirstNumber,{color: colors.result}]:[Styles.screenFirstNumber,{fontSize:50,color:colors.result}]}>{result.toString()}</Text>;

    if(fOperand && fOperand.length<=5)
        return <Text style={Styles.screenFirstNumber}>{fOperand}</Text>;

    if(fOperand == "")
        return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;

    if(fOperand.length>5 && fOperand.length<=7)
        return <Text style={[Styles.screenFirstNumber,{fontSize:70}]}>{fOperand}</Text>;

    if(fOperand.length>7)
        return <Text style={[Styles.screenFirstNumber,{fontSize:50}]}>{fOperand}</Text>;
  }

  const evaluate = () => {
    switch (operation) {
      case '+':
        clearScreen();
        setResult(parseInt(fOperand) + parseInt(sOperand));
        break;
      case '-':
        clearScreen();
        setResult(parseInt(fOperand) - parseInt(sOperand));
        break;
      case '*':
        clearScreen();
        setResult(parseInt(fOperand) * parseInt(sOperand));
        break;
      case '/':
        clearScreen();
        setResult(parseInt(fOperand) / parseInt(sOperand));
        break;
      default:
        clearScreen();
        setResult(0);
        break;
    }
  };

  return (
    <View style={Styles.viewBottom}>
        <View style={{
          height: 120,
          width: "90%",
          justifyContent: "flex-end",
          alignSelf: "center",
        }}>
            <Text style={Styles.screenSecondNumber}>
                {sOperand}
                <Text style={{ color: "purple", fontSize: 50, fontWeight: '500'}}>{operation}</Text>
            </Text>
            {opDisplay()}
        </View>
      <View style={Styles.row}>
        <Button title="C" isGrey onPress={clearScreen} />
        <Button title="+/-" isGrey onPress={() => opPress('+/-')} />
        <Button title="%" isGrey onPress={() => opPress('%')} />
        <Button title="÷" isBlue onPress={() => opPress('/')} />
      </View>
      <View style={Styles.row}>
        <Button title="7" isGrey onPress={() => numPress('7')} />
        <Button title="8" isGrey onPress={() => numPress('8')} />
        <Button title="9" isGrey onPress={() => numPress('9')} />
        <Button title="×" isBlue onPress={() => opPress('*')} />
      </View>
      <View style={Styles.row}>
        <Button title="4" isGrey onPress={() => numPress('4')} />
        <Button title="5" isGrey onPress={() => numPress('5')} />
        <Button title="6" isGrey onPress={() => numPress('6')} />
        <Button title="+" isBlue onPress={() => opPress('+')} />
      </View>
      <View style={Styles.row}>
        <Button title="1" isGrey onPress={() => numPress('1')} />
        <Button title="2" isGrey onPress={() => numPress('2')} />
        <Button title="3" isGrey onPress={() => numPress('3')} />
        <Button title="-" isBlue onPress={() => opPress('-')} />
      </View>
      <View style={Styles.row}>
        <Button title="." isGrey onPress={() => numPress('.')} />
        <Button title="0" isGrey onPress={() => numPress('0')} />
        <Button title="⌫" isGrey onPress={() => setFOperand(fOperand.slice(0,-1))} />
        <Button title="=" isBlue onPress={() => evaluate()} />
      </View>
    </View>
  );
}
