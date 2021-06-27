<template>
  <div id="footer">
    Copyright 2021-2021 by Felipe Augusto Feitosa. All Rights Reserved.
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
  #footer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 80px;
    margin-top: 20px;
  }

  .is-mobile #footer {
    text-align: center;
  }
</style>
