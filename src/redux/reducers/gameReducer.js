import {
  Paper,
  Rock,
  Scissor,
  Player,
  Bot,
} from '../../GameAppStateManagement/assets';

const selectedOptionConstant = [
  {type: 'rock', image: Rock},
  {type: 'paper', image: Paper},
  {type: 'scissor', image: Scissor},
];

const initState = {
  playerSelected: selectedOptionConstant[0],
  playerImage: Player,
  botSelected: selectedOptionConstant[1],
  botImage: Bot,
  selectOption: selectedOptionConstant,
  score: 0,
  times: 9,
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case 'PLAYER_SELECT':
      state.playerSelected = action.payload;
      return {...state};
    default:
      return {...state};
  }
};

export default gameReducer;
