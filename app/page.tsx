import MainHeader from "./components/header/MainHeader";

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

    {testItems}
    </>
  );
}
