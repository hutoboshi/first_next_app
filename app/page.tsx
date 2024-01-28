"use client";
import MainHeader from "./components/header/MainHeader";
import MainRow from "./components/mainRow/MainRow";
import MainRow2 from "./components/mainRow/MainRow2";
import { PopUpComponent } from "./components/popUp/popUpComponent";
import { useState } from 'react';

export default function Home() {

  const [popupFlag, setPopupFlag] = useState<boolean>(false);

  const testItems = []
  for(let i=0; i<20; i++){
    testItems.push(
      <div className="flex justify-between">
    <p>test</p>
    <p>test</p>
    <p>test</p>
    <p>test</p>
    </div>
    )
  }
  return (
    <>
    <MainHeader></MainHeader>
    <MainRow></MainRow>
    <MainRow2></MainRow2>
    <div className="flex justify-center items-center">
      {/* <button onClick={() => setPopupFlag(true)}>popup</button> */}
      <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setPopupFlag(true)}>Default</button>
    </div>
      <PopUpComponent viewFlag={popupFlag} setViewFlag={setPopupFlag} />
    {testItems}
    </>
  );
}
