"use client";

import { useAppDispatch, useAppSelector } from "@/hooks";

import { addCount, subtractCount, resetCount } from "@/redux/counter.slice";

import ButtonComponent from "./button";

const CounterComponent = () => {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div className="flex items-center justify-center gap-8">
      <div className="border border-gray-700 px-4 py-1 rounded-md">{count}</div>
      <ButtonComponent
        className="bg-green-400 hover:text-green-400 hover:border-green-400 hover:bg-transparent"
        onClick={() => dispatch(addCount())}
      >
        Add
      </ButtonComponent>
      <ButtonComponent
        className="bg-red-400 hover:text-red-400 hover:border-red-400 hover:bg-transparent"
        onClick={() => dispatch(subtractCount())}
      >
        Subtract
      </ButtonComponent>
      <ButtonComponent
        className="bg-blue-400 hover:text-blue-400 hover:border-blue-400 hover:bg-transparent"
        onClick={() => dispatch(resetCount())}
      >
        Reset
      </ButtonComponent>
    </div>
  );
};

export default CounterComponent;
