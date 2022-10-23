import {atom} from "recoil";

export interface ITodoTypes {
  id: number;
  contents: string;
  isCompleted: boolean;
}

// TodoInput에서 입력하는 값을 atom으로 관리하는 방식
export const inputState = atom<string>({
  // key의 값은 고유값.
  key: 'inputState',
  default: '',
});

// 업데이트 시킬 Todos atom 배열
export const todosState = atom<ITodoTypes[]>({
  key: 'todos',

  // default에는 목데이터값 넣기
  default: [
    {
      id: 1,
      contents: '목데이터 첫 번째 투두',
      isCompleted: false,
    },

    {
      id: 2,
      contents: '컨텐츠 클릭시 완료처리',
      isCompleted: true,
    },

    {
      id: 3,
      contents: '완료된 컨텐츠는 빨간글씨',
      isCompleted: false,
    }
  ],
});