<template>
  <!-- 
    以index查詢，不會出現重複錯誤，但資料更新時會出現未更新狀況
    index最好指定索引值的欄位(如id)，因為指定index可能出現不更新情況
    <div v-for="(item, index) in dataList" :key="index">
  -->
  <div v-for="item in dataList" :key="item.id">
    {{ item.userId }} {{ item.userName }}
  </div>
</template>
<script>
// import給別名定義路徑，在以下語法中使用別名
import axios from "axios";
import Member from "@/service/Member.js";

// 每一個vue網頁若要取用資料, 都要用export defualt
export default {
  // 每個vue網頁可以有個name, 可用來做連結或網頁傳遞資料
  name: "product",
  // 所有要與網頁互動或將後端取回的資料顯示在網頁上, 都要寫在data()中
  data() {
    return {
      // dataList:變數名稱, 可以自行命名
      // 因為後端取回的資料可能有多筆, 所以要用陣列([])
      dataList: [],
    };
  },
  // mounted: 網頁載入時
  mounted() {
    // 當網頁載入時, 呼叫這個網頁的getList()方法
    // this: 這個網頁, 或是這個物件, 或是這個程式
    this.getList();
  },
  methods: {
    // async: 與await搭配, 非同步到後端取資料
    async getList() {
      // axios到後端要資料的方法有get, post等
      // get(): 要後端資料的網址及路徑
      // res: 後端回傳資料的結果, 名稱可以自行命名, 不一定要使用res
      // res: 為response的縮寫, 後端回傳為response, 到後端要資料為request
      // 同等於const res = await axios.get("http://localhost/javascript/searchMember.php");
      const res = await axios.get("http://localhost/" + Member.search);
      // res.data: 後端傳回來的資料, 會存在data中
      // this.dataList: 這個dataList為data()中的dataList, 要後端回傳的資料存在data()中的dataList
      // console.log(res.data);
      this.dataList = res.data;
    },
  },
};
</script>
