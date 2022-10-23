## recoil_test

1. root 경로에 recoil 폴더 생성
2. recoil 폴더안에 `todo.ts` 생성

## atom
- 전역 상태관리가 되는 대상.
  - 해당 atom 값이 변경되면, 해당 값을 구독(?)하던 컴포넌트들이 전부 리렌더링된다.
- 고유 key 값을 가져야 한다. (default 로 기본값 설정)

## selector
- atom 또는 selector를 받아서 쓰는 순수 함수
- 파라미터로 받은 atom 또는 selector 중 업데이트된 것이 있다면 selector 함수는 재평가된다. (다시 계산된다)
- atom처럼 컴포넌트에서 구독할 수 있다.
- selector 함수가 재평가될때, 컴포넌트가 리렌더링 된다.

