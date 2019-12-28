<template>
  <div class="tag-container">
    #{{ name }}
  </div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    name: {
      type: String,
      default: "tag"
    }
  }
}
</script>

<style scoped>
  .tag-container {
    font-family: AppleSDGothicNeoR00;
    font-size: 14px;
    height: 22px;
    padding: 2px 8px 0 8px;
    display: inline-block;
    background: #c5d4e3;
    color: #1e1e1e;
    margin-top: 5px;
    margin-right: 5px;
  }

  /* .tag-container + .tag-container {
    margin-left: 5px;
  } */
</style>