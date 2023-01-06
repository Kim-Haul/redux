// 액션 타입 설정
const ADD = 'cardReducer/ADD';
const DELETE = 'cardReducer/DELETE';

// 초기값 설정
const initialState = {
  RecommendList: [{ genre: '먼치킨' }, { genre: '판타지' }],
};

// Action Creators
// 액션 생성함수에서 액션 개체 리턴
export function plusGenre(addGenre) {
  console.log('장르 추가 액션을 실행.');
  return { type: ADD, addGenre: addGenre };
}

export function deleteGenre(deleteGenre) {
  console.log('장르 삭제 액션을 실행.');
  return { type: DELETE, deleteGenre };
}

// Reducer
// 액션생성함수가 요청 -> 실제로 바꾸는건 리듀서에서
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'cardReducer/ADD': {
      console.log('리듀서에서 값 추가.');
      const newRecommendList = [
        ...state.RecommendList,
        { genre: action.addGenre },
      ];
      return { RecommendList: newRecommendList };
    }

    case 'cardReducer/DELETE': {
      console.log('리듀서에서 값 삭제.');
      const newRecommendList = state.RecommendList.filter((element, idx) => {
        return element.genre !== action.deleteGenre;
      });
      return { RecommendList: newRecommendList };
    }

    default:
      return state;
  }
}
