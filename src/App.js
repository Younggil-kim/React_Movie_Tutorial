import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => {
    setKeyword(event.target.value)
  };
  const iRunOnlyOnce = () => {
    console.log("I run only Once!");
  };
  useEffect(()=> {
    console.log("I run when keyword changes")
    if(keyword !== "" && keyword.length >= 5){
      console.log("Seach for", keyword);
    }
  }, [keyword])
  useEffect(()=> {
    console.log("I run when counter changes")
  }, [counter])
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Welcome Kit</button>
    </div>
  );
}

export default App;
