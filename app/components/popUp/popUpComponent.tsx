"use client";
import React, { memo, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'

type Props = {
  viewFlag: boolean;
  setViewFlag: React.Dispatch<React.SetStateAction<boolean>>;
};

export const PopUpComponent = memo((props: Props) => {
  const { viewFlag, setViewFlag } = props;
  useEffect(() => {
    // 背景画面固定用関数
    const registerBackgroundFixed = () => {
      const body = document.body;
      const scrollWidth = window.innerWidth - body.clientWidth;
      body.style.marginRight = `${scrollWidth}px`;
      body.style.overflowY = 'hidden';
    };
    // 背景画面固定解除用関数
    const unRegisterBackgroundFixed = () => {
      const body = document.body;
      body.style.overflowY = '';
      body.style.marginRight = '';
    };
    if (viewFlag) registerBackgroundFixed();

    return () => {
      unRegisterBackgroundFixed();
    };
  }, [viewFlag]);

  // 枠外クリック用関数
  const onClickBackground = () => {
    setViewFlag(false);
  };

  // 枠内クリック
  const onClickCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={
          'fixed flex flex-col items-center justify-center overflow-hidden bg-gray-500/50 transition-all ' +
          (viewFlag
            ? ' top-0 left-0 h-screen w-screen '
            : ' top-1/2 left-1/2 h-0 w-0 ')
        }
        onClick={onClickBackground}
      >
        <div className="relative h-3/4 w-3/4 max-w-3xl">
          {/* バツボタン */}
          <div className="absolute right-0 -top-10 h-10 w-10 hover:cursor-pointer">
          <XMarkIcon className="block h-6 w-6"/>
          </div>
          <div
            id="policy"
            className="flex items-center h-full w-full flex-col bg-white"
            onClick={onClickCard}
          >
          <div className='text-black'>testModal</div>
          <img
          className='h-32 w-24'
            src="/img/person/go.png"
            alt="test"
          />
          </div>
        </div>
      </div>
    </>
  );
}); 