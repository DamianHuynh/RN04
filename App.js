/* eslint-disable react-native/no-inline-styles */
import React, {Fragment} from 'react';
import StateFull from './src/Component/Statefull';
import StateLess from './src/Component/Stateless';
import DemoImage from './src/Component/DemoImage';
import DemoInput from './src/Component/DemoTextInput';
import DemoStyle from './src/Component/DemoStyle';
import Exam from './src/Component/Exam';
import BindingData from './src/HandlerComponent/BindingData';
import ExamBinding from './src/HandlerComponent/Exam';
import RenderWithMap from './src/HandlerComponent/RenderWithMap';
import DemoProps from './src/Props/DemoProps';
import DemoScrollView from './src/Props/DemoScrollView';
import DemoFlatList from './src/Props/DemoFlatList';
import DemoSectionList from './src/Props/DemoSection';
import ExamRenderMap from './src/Props/ExamRenderMap';
import ExamRenderFlatList from './src/Props/ExamRenderFlatlist';
import GameApp from './src/GameApp';

const App = () => {
  return (
    <Fragment>
      {/* <StateFull />
      <StateLess /> */}
      {/* <DemoImage /> */}
      {/* <DemoInput /> */}
      {/* <DemoStyle /> */}
      {/* <Exam /> */}
      {/* <BindingData /> */}
      {/* <RenderWithMap /> */}
      {/* <DemoProps /> */}
      {/* <DemoScrollView /> */}
      {/* <DemoFlatList /> */}
      {/* <DemoSectionList /> */}
      {/* <ExamRenderMap /> */}
      {/* <ExamRenderFlatList /> */}
      <GameApp />
    </Fragment>
  );
};

export default App;
