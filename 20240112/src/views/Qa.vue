<template>
  <article class="gw pos-r pb-5">
    <section class="container px-xl-3 px-lg-4 px-sm-4 px-xs-2">
      <h2 class="text-center title mb-5 mt-lg-5">活動Q&A</h2>
      <div class="col-xxl-10 col-lg-11 col-sm-11 col-xs-12 px-xl-3 mx-auto">
        <div class="w-100 accordion collapse-set mb-lg-5" id="accordion">
          <!-- v-for在dataList裡跑迴圈 -->
          <!-- 等同於"item in dataList" :key="item.id" -->
          <!-- vue前面只要有程式就要加冒號 -->
          <div
            class="accordion-item"
            v-for="(item, index) in dataList"
            :key="index"
          >
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#collapse-${index}`"
                aria-expanded="false"
                :aria-controls="`collapse-${index}`"
              >
                Q{{ index + 1 }}.{{ item.title }}
              </button>
            </h2>
            <div
              :id="`collapse-${index}`"
              class="accordion-collapse collapse"
              data-bs-parent="#accordion"
            >
              <div class="accordion-body">
                <ul class="custom-list">
                  <!-- 如果包含html語法，就要用v-html -->
                  <li v-html="item.content"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!--#accordion-->
        <p class="text-center sm-title px-lg-0 px-xs-3">
          若您有任何疑問， 請直接來電至服務專線： 0800-000000，謝謝！<br />(服務時間：週一至週五，正常上班時間上午9:00至下午5:00)
        </p>
      </div>
      <!--col-->
    </section>
  </article>
</template>
<script>
import axios from "axios";
import Qa from "@/service/Qa";

export default {
  name: "Qa",
  // 所有網頁互動或要將資料現在網頁中，都要寫在data()中，data()名稱不可以改
  data() {
    return {
      // 這個變數可以自己設定，不一定要用dataList
      // 因為從後端去回的資料可能多筆，所以要用陣列的方式儲存
      // 可以放很多變數名稱，如username、pwd等等，非多筆可以用""
      dataList: [],
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
      const res = await axios("http://localhost:8000/api/" + Qa.getList);
      // 後端取回資料會寫在data中
      // 取回資料後，存回dataList，this.dataList為data()中的dataList
      console.log(res);
      // 測試是否正常呼叫
      if (res.status == 200) {
        this.dataList = res.data;
      }
    },
  },
};
</script>
