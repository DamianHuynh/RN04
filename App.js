/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import StateFull from './src/Component/Statefull';
import StateLess from './src/Component/Stateless';
import DemoImage from './src/Component/DemoImage';
import DemoInput from './src/Component/DemoTextInput';

const App = () => {
  return (
    <Fragment>
      {/* <StateFull />
      <StateLess /> */}
      {/* <DemoImage /> */}
      <DemoInput />
    </Fragment>
  );
};

export default App;
