import React, {ChangeEvent, Dispatch, SetStateAction, useCallback} from 'react';

interface PropTypes {
  setIsModal: Dispatch<SetStateAction<boolean>>;
  modifyContents: string;
  setModifyContents: Dispatch<SetStateAction<string>>;
  onModifyTodo: () => void;
}

const TodoModal = ({
                     setIsModal,
                     modifyContents,
                     setModifyContents,
                     onModifyTodo,
                   }: PropTypes): JSX.Element => {
  const onCloseModal = useCallback((): void => {
    setIsModal(false);
  }, [setIsModal]);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    const {value} = e.target;
    setModifyContents(value);
  }, [setModifyContents]);

  return (
    <div
      className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto my-6 mx-auto max-w-3xl" onClick={onCloseModal}></div>
      <div
        className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">


        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
          <input
            className="bg-lime-600 border-4 text-white font-black"
            type='text'
            value={modifyContents}
            onChange={onChange}
            placeholder='Todo 입력'
          />

          <button
            onClick={onModifyTodo}
            className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
          >
            수정
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
