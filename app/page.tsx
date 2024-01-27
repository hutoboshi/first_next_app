import MainHeader from "./components/header/MainHeader";
import MainRow from "./components/mainRow/MainRow";
import MainRow2 from "./components/mainRow/MainRow2";

export default function Home() {

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
    {testItems}
    </>
  );
}
