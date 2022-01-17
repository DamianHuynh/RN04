/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import StateFull from './src/Component/Statefull';
import StateLess from './src/Component/Stateless';
import DemoImage from './src/Component/DemoImage';
import DemoInput from './src/Component/DemoTextInput';
import DemoStyle from './src/Component/DemoStyle';
import Exam from './src/Component/Exam';

const App = () => {
  return (
    <Fragment>
      {/* <StateFull />
      <StateLess /> */}
      {/* <DemoImage /> */}
      {/* <DemoInput /> */}
      {/* <DemoStyle /> */}
      <Exam />
    </Fragment>
  );
};

export default App;
