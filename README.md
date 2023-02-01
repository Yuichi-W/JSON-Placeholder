# JSON-Placeholder
## ①データ取得に「axios」インポートする  
 
## ②JSON-Placeholder公式にアクセス
[JSON-Placeholder公式](https://jsonplaceholder.typicode.com/)のページの「Resources」の「/user」を押下し
アドレスバーの「https://jsonplaceholder.typicode.com/users」をコピー
 
## ③axiosでインポート 
```
import axios from "axios";
``` 
　②のコピーしたものを下記の("")内に記載  
 ```
 axios.get("");
 ```  
 
 
## メリット
わざわざデータを用意しなくても仮データで挙動の確認等が可能になる
