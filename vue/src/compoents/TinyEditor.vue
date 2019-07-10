<template>
  <div class="editor_con">
    <tinymce-editor api-key="API_KEY" v-model="content" :init="{plugins: 'wordcount',height: 500}"></tinymce-editor>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Editor from "@tinymce/tinymce-vue";
export default Vue.extend({
  name: "TinyEditor",
  data() {
    return {
      content: "this is sometext"
    };
  },
  components: {
    "tinymce-editor": Editor
  }
});
</script>

<style scoped>
.editor_con{
  width: 100%;
  height: 400px;
}
</style>