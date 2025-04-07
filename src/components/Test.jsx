import { useState } from 'react';

function Test() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex place-items-center flex-col bg-slate-500 py-7">
      <h1 className="bg-slate-300 rounded py-2 px-4 w-sm text-center font-bold">
        Счет: {count}
      </h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="bg-red-300 rounded py-2 px-4 hover:bg-red-400 w-sm mt-4 active:bg-red-800 "
      >
        Плюс 1
      </button>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
        className="bg-red-300 rounded py-2 px-4 hover:bg-red-400 w-sm my-4 "
      >
        Плюс 1
      </button>

      <button
        onClick={() => setCount(0)}
        className="bg-red-300 rounded py-2 px-4 hover:bg-red-400 w-sm"
      >
        Обнулить
      </button>
    </div>
  );
}

export default Test;
