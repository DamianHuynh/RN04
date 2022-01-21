/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import StateFull from './src/Component/Statefull';
import StateLess from './src/Component/Stateless';
import DemoImage from './src/Component/DemoImage';
import DemoInput from './src/Component/DemoTextInput';
import DemoStyle from './src/Component/DemoStyle';
import Exam from './src/Component/Exam';
import BindingData from './src/HandlerComponent/BindingData';

const App = () => {
  return (
    <Fragment>
      {/* <StateFull />
      <StateLess /> */}
      {/* <DemoImage /> */}
      {/* <DemoInput /> */}
      {/* <DemoStyle /> */}
      {/* <Exam /> */}
      <BindingData />
    </Fragment>
  );
};

export default App;
