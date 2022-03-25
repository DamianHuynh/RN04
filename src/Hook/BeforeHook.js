import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

class Title extends React.Component {
  state = {
    title: '',
  };
  changeTitle = title => {
    this.setState({title});
  };
  render() {
    return (
      <TitleFunction title={this.state.title} changeTitle={this.changeTitle} />
    );
  }
}

const TitleFunction = props => {
  return (
    <View>
      <Text>{props.title}</Text>
      <TouchableOpacity onPress={() => props.changeTitle('After Change')}>
        <Text>Change Title</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Title;
