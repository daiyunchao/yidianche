<template>
  <div class="helperhotquestion">
    <HelperSearch />
    <div class="mgt40 questionList">
      <QuestionItem title="如果出现一点车车讯号名称重复怎么办？">
        <div slot="answer">
          <p>被下线有以下几种可能：</p>
          <p>存在抄袭、侵权、非授权转载等情况：</p>
          <p>存在涉黄涉暴涉恐信息：</p>
          <p>存在严重推广营销行为：</p>
          <p>存在虚假信息：</p>
          <p>违反互联网相关规定：</p>
        </div>
      </QuestionItem>
      <QuestionItem title="如果出现一点车车讯号名称重复怎么办？">
        <div slot="answer">
          <p>被下线有以下几种可能：</p>
          <p>存在抄袭、侵权、非授权转载等情况：</p>
          <p>存在涉黄涉暴涉恐信息：</p>
          <p>存在严重推广营销行为：</p>
          <p>存在虚假信息：</p>
          <p>违反互联网相关规定：</p>
        </div>
      </QuestionItem>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelperSearch from "../compoents/HelperSearch.vue";
import QuestionItem from "../compoents/QuestionItem.vue";
export default Vue.extend({
  name: "HelperWenzhangjiesuo",
  components: {
    HelperSearch,
    QuestionItem
  }
});
</script>

<style scoped>
.questionList{
  border-bottom: 1px dashed #ddd;
}
</style>