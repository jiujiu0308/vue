<template>
  <article class="gw pos-r pb-5">
    <section class="container px-xl-3 px-lg-4 px-sm-5 px-xs-3">
      <h2 class="text-center title mb-5 mt-lg-5">中獎專區</h2>
      <div class="col-xxl-10 col-lg-11 col-sm-11 col-xs-12 mx-auto">
        <div class="gw mb-lg-5">
          <div class="css-dropdown">
            <input type="checkbox" id="drop" hidden />
            <label for="drop"></label>
            <div class="inner">
              <!-- v-for迴圈 :key資料庫唯一值，此時為id -->
              <span v-for="item in dataList" :key="item.id">
                <a
                  href="#"
                  :class="id == item.id ? 'active' : ''"
                  @click="getPrize(item.id, item.num, item.content, item.photo)"
                >
                  {{ item.title }}
                </a>
              </span>
              <!-- <a href="list.html" class="active">{{ item.title }}</a> -->
            </div>
            <!--inner-->
          </div>
          <!--css-dropdown-->
        </div>
        <!--w-100-->
        <div class="gw img-wrap img-auto pb-5 text-center mt-3">
          <h3 class="sub-title">{{ content }}，共 {{ num }} 名</h3>
          <img :src="url + 'images/prize/' + photo" alt="" />
          <!--w-100-->

          <!-- 文字編輯器 start-->
          <div class="editor_box">
            <div class="table-responsive">
              <div id="showMsg"></div>
            </div>
          </div>
          <!-- 文字編輯器 end-->
        </div>
        <!--img-wrap-->
      </div>
      <!--col-->
    </section>
  </article>
</template>
<script>
import axios from "axios";
import Prize from "@/service/Prize";

export default {
  name: "Prize",
  // 所有網頁互動或要將資料現在網頁中，都要寫在data()中，data()名稱不可以改
  data() {
    return {
      // 這個變數可以自己設定，不一定要用dataList
      // 因為從後端去回的資料可能多筆，所以要用陣列的方式儲存
      // 可以放很多變數名稱，如username、pwd等等，非多筆可以用""
      dataList: [],
      id: "",
      content: "下午實作",
      photo: "",
      num: "",
      url: this.$url,
    };
  },
  // mounted():當網頁都載入時要啟動或執行的事項，可寫在這裡
  mounted() {
    // this:這個物件，這裡指的是methods中的function名稱
    // 在網頁載入時呼叫這個Qa.vue中getList的方法，在methods中一定要寫到
    this.getList();
  },
  // methods:所有要執行的function都放在這裡
  methods: {
    // async與await搭配，非同步到後端取資料(類似ajax方法)
    // 不用逐行執行，可以分支執行
    async getList() {
      // 將自後端取回的資料暫時儲存在res中(名稱可以自訂，不一定要res)
      // 用axios方式連線到http://localhost:8000/qa/list，Qa.getList為Qa.js檔案中getList的路徑
      const res = await axios(this.$base + Prize.getList);
      // 後端取回資料會寫在data中
      // 取回資料後，存回dataList，this.dataList為data()中的dataList
      console.log(res);
      // 測試是否正常呼叫
      if (res.status == 200) {
        this.dataList = res.data;
        // 把第一筆資料設定給這些變數，就能抓資料了
        this.id = res.data[0].id;
        this.content = res.data[0].content;
        this.num = res.data[0].num;
        this.photo = res.data[0].photo;
      }
    },
    getPrize(id, num, content, photo) {
      if (id != "") {
        this.id = id;
        this.num = num;
        this.content = content;
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
