import React, { useState } from 'react';
import { StyleSheet,View,Text,TouchableOpacity,StatusBar,Dimensions, } from 'react-native';

const BUTTON_SIZE = (Dimensions.get('window').width - 8 * 5) / 4;

export default function App() {
  const [answerValue, setAnswerValue] = useState('0');
  const [memoryValue, setMemoryValue] = useState(null);
  const [operatorValue, setOperatorValue] = useState(null);
  const [readyToReplace, setReadyToReplace] = useState(true);

  const handleNumber = (num) => {
    if (readyToReplace) {
      setReadyToReplace(false);
      return num === '.' ? '0.' : num;
    }
    if (num === '.' && answerValue.includes('.')) return answerValue;
    return answerValue + num;
  };

  const calculateEquals = () => {
    if (!operatorValue || memoryValue === null) return answerValue;
    const previous = parseFloat(memoryValue);
    const current = parseFloat(answerValue);
    let result = 0;
    switch (operatorValue) {
      case '+':
        result = previous + current;
        break;
      case '-':
        result = previous - current;
        break;
      case 'x':
        result = previous * current;
        break;
      case '÷':
        result = current === 0 ? 0 : previous / current;
        break;
    }
    return result.toString();
  };

  const buttonPressed = (value) => {
    if (!isNaN(value) || value === '.') {
      setAnswerValue(handleNumber(value));
      return;
    }

    if (value === 'C') {
      setAnswerValue('0');
      setMemoryValue(null);
      setOperatorValue(null);
      setReadyToReplace(true);
      return;
    }

    if (value === '+/-') {
      setAnswerValue(answerValue.startsWith('-') ? answerValue.slice(1) : '-' + answerValue);
      return;
    }

    if (value === '%') {
      setAnswerValue((parseFloat(answerValue) * 0.01).toString());
      return;
    }

    if (value === '=') {
      const result = calculateEquals();
      setAnswerValue(result);
      setMemoryValue(null);
      setOperatorValue(null);
      setReadyToReplace(true);
      return;
    }

    if (['+', '-', 'x', '÷'].includes(value)) {
      let nextMemory = answerValue;
      if (operatorValue !== null) {
        nextMemory = calculateEquals();
        setAnswerValue(nextMemory);
      }
      setMemoryValue(nextMemory);
      setOperatorValue(value);
      setReadyToReplace(true);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{answerValue}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonRow1} onPress={() => buttonPressed('C')}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRow1} onPress={() => buttonPressed('+/-')}>
          <Text style={styles.buttonText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonRow1} onPress={() => buttonPressed('%')}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonRow1, styles.buttonBlue]} onPress={() => buttonPressed('÷')}>
          <Text style={[styles.buttonText, styles.buttonText1]}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => buttonPressed('7')}>
          <Text style={[styles.buttonText, styles.buttonText1]}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => buttonPressed('8')}>
          <Text style={[styles.buttonText, styles.buttonText1]}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => buttonPressed('9')}>
          <Text style={[styles.buttonText, styles.buttonText1]}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={() => buttonPressed('x')}>
          <Text style={[styles.buttonText, styles.buttonText1]}>x</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => buttonPressed('4')}>
          <Text style={[styles.buttonText, styles.buttonText1]}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => buttonPressed('5')}>
          <Text style={[styles.buttonText, styles.buttonText1]}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => buttonPressed('6')}>
          <Text style={[styles.buttonText, styles.buttonText1]}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={() => buttonPressed('-')}>
          <Text style={[styles.buttonText, styles.buttonText1]}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => buttonPressed('1')}>
          <Text style={[styles.buttonText, styles.buttonText1]}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => buttonPressed('2')}>
          <Text style={[styles.buttonText, styles.buttonText1]}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => buttonPressed('3')}>
          <Text style={[styles.buttonText, styles.buttonText1]}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={() => buttonPressed('+')}>
          <Text style={[styles.buttonText, styles.buttonText1]}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.buttonZero]} onPress={() => buttonPressed('0')}>
          <Text style={[styles.buttonText, styles.buttonTextZero]}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => buttonPressed('.')}>
          <Text style={[styles.buttonText, styles.buttonText1]}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.buttonBlue]} onPress={() => buttonPressed('=')}>
          <Text style={[styles.buttonText, styles.buttonText1]}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDAB9',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  displayText: {
    fontSize: 88,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'salmon',
    marginHorizontal: 4,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
  },
  buttonRow1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFC0CB',
    marginHorizontal: 4,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
  },
  buttonBlue: {
    backgroundColor: '#B0E0E6',
  },
  buttonText: {
    fontSize: 40,
    color: 'black',
  },
  buttonText1: {
    color: 'black',
  },
  buttonZero: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 40,
  },
  buttonTextZero: {
    fontSize: 40,
    color: 'black',
    textAlign: 'left',
  },
});
