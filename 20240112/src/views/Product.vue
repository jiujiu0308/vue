<template>
  <article class="gw pos-r pb-5">
    <section class="container px-xl-3 px-lg-4 px-sm-4 px-xs-3">
      <h2 class="text-center title mb-5 mt-lg-5">產品介紹</h2>
      <div class="col-xxl-10 col-lg-11 col-sm-11 col-xs-12 mx-auto">
        <div class="gw mb-lg-5">
          <div class="css-dropdown">
            <input type="checkbox" id="drop" hidden />
            <label for="drop"></label>
            <div class="inner">
              <span v-for="item in dataList" :key="item.id">
                <a
                  href="#"
                  :class="id == item.id ? 'active' : ''"
                  @click="getProduct(item.id, item.photo)"
                >
                  {{ item.title }}
                </a>
              </span>
            </div>
            <!--inner-->
          </div>
          <!--css-dropdown-->
        </div>
        <!--w-100-->
        <div class="gw img-wrap pb-5">
          <img :src="url + 'images/product/' + photo" alt="" />
        </div>
        <!--img-wrap-->
      </div>
      <!--col-->
    </section>
  </article>
</template>
<script>
import axios from "axios";
import Product from "@/service/Product";

export default {
  name: "Product",
  // 所有網頁互動或要將資料現在網頁中，都要寫在data()中，data()名稱不可以改
  data() {
    return {
      // 這個變數可以自己設定，不一定要用dataList
      // 因為從後端去回的資料可能多筆，所以要用陣列的方式儲存
      // 可以放很多變數名稱，如username、pwd等等，非多筆可以用""
      dataList: [],
      id: "",
      photo: "",
      url: this.$url,
    };
  },
  // mounted():當網頁都載入時要啟動或執行的事項，可寫在這裡
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      const res = await axios(this.$base + Product.getList);
      // 後端取回資料會寫在data中
      // 取回資料後，存回dataList，this.dataList為data()中的dataList
      console.log(res);
      // 測試是否正常呼叫
      if (res.status == 200) {
        this.dataList = res.data;
        // 把第一筆資料設定給這些變數，就能抓資料了
        this.id = res.data[0].id;
        this.photo = res.data[0].photo;
      }
    },
    getProduct(id, photo) {
      if (id != "") {
        this.id = id;
        this.photo = photo;

        /*
          從dataList裡尋找所選取的資料 (用id來尋找)
          ids所選取的id (也就是選取哪個獎項)
          如果dataList中發現id與所選取的id相同, 將獎項資料存取在prize變數中
          箭頭函式 : 例如function test() ==> test() ==> ()

          const prize = this.dataList.find({{ id }} => id == ids);
          this.id = prize.id;
          this.num = prize.num;
          this.content = prize.content;
          this.photo = prize.photo;
        */
      }
    },
  },
};
</script>
