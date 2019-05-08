const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          id: Math.random(),
          name: 'facebook/react',
          description:
            'Irure occaecat veniam occaecat ipsum esse commodo dolore nulla in aliquip Lorem velit.',
          url: 'http://github.com/tavareshenrique',
        },
      ];
    default:
      return state;
  }
}
