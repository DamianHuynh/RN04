import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useCallback, useMemo} from 'react';
import ChildComponent from './ChildComponent';

const DemoHook = () => {
  // const [state, setState] = useState({number: 0, name: 'Name'});
  const [number, setNumber] = useState(0);
  const [number_2, setNumber_2] = useState(2);
  const arrayNumber = useMemo(() => [number, number_2], []);

  const countUp = useCallback(() => {
    console.log('useCallback', number);
    setNumber(number + 1);
  }, [number]);

  const countUp_2 = () => setNumber_2(number_2 + 2);
  // const changeName = () =>
  // setState({...state, name: state.name + state.number});
  // console.log(number);

  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  useEffect(() => {
    console.log('componentDidUpdate', number_2);
  }, [number_2]);

  return (
    <View style={styles.container}>
      <Text>DemoHook</Text>
      <NumberView number={number} />
      <Text onPress={countUp}>count up Number</Text>
      <Text>{number_2}</Text>
      <Text onPress={countUp_2}>count up Number_2</Text>
      <ChildComponent countUp={countUp} />
    </View>
  );
};

export default DemoHook;

const NumberView = ({number}) => {
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount');
    };
  }, []);
  return <Text>{number}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
