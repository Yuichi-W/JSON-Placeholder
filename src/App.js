import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    // .then()でデータ取得後に実行する関数を設定可能 アロー関数の引数にreslut入ってくる
    // .catchでエラーを取得できる　URL変更したたくと404エラー返してくれる
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=5")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <button onClick={onClickUsers}>ユーザー一覧</button>
      <br />
      <br />
      <button onClick={onClickUser1}>IDが１のユーザ</button>
    </div>
  );
}
