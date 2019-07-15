<template>
  <div>
    <div class="questionitem">
      <div class="question_content" @click="toggleAnswer()">{{this.title}}</div>
    </div>
    <div class="question_answer" :style="isShow? 'height:200px;margin-top: 20px;margin-bottom: 20px;':'height:0px;'">
      <slot name="answer"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props:[
    "title"
  ],
  name: "QuestionItem",
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    toggleAnswer() {
      this.isShow = !this.isShow;
    }
  }
});
</script>

<style scoped>
.questionitem {
  height: 50px;
  border-top: 1px dashed #ddd;
  /* border-bottom: 1px dashed #ddd; */
}

.question_content {
  position: relative;
  height: 50px;
  line-height: 50px;
  font-size: 16px;
  margin-left: 30px;
  cursor: pointer;
}
.question_content::before {
  content: "";
  position: absolute;
  left: -10px;
  width: 5px;
  height: 5px;
  top: 50%;
  margin-top: -2.5px;
  border-radius: 50%;
  background: #333;
}
.question_answer {
  padding-left: 120px;
  line-height: 2;
  
  transition: all 0.5s;
  overflow: hidden;
  color: #666;
}
</style>