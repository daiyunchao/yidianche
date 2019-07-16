<template>
  <div class="helperaccountquestion">
    <HelperSearch />
    <div class="mgt40 questionList">
      <QuestionItem title="一点车车讯号支持帐号主体类型修改吗？">
        <div slot="answer">
          <p>一点车车讯号目前不支持媒体、自媒体、组织机构和企业帐号主体类型之间的修改，如果因为注册失误造成要修改帐号类型，请准备一个新的从未注册过任何一点车车讯号的网易邮箱重新申请入驻。</p>
          <p>如果您的帐号被冒名，您可以：</p>
          <p>企业：将帐号名称、一点车车讯号后台截图、原运营人手持身份证图片、企业营业执照、现运营人手持身份证图片、yidianc@163.com，各项资质齐全可修改。</p>
        </div>
      </QuestionItem>
      <QuestionItem title="帐号被封禁后可以解封吗？">
        <div slot="answer">
          <p>根据目前一点车车讯号相关处罚规定，帐号被封禁后不予解封。</p>
          <p>内容存在审核和投诉等合规性风险，会被审核员认为不可推荐。</p>
          <p>很多作者擅长抓住热点加以发挥创作，原运营人手持身份证图片。</p>
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
  name: "HelperZhutixiugai",
  components: {
    HelperSearch,
    QuestionItem
  }
});
</script>

<style scoped>
.questionList {
  border-bottom: 1px dashed #ddd;
}
</style>