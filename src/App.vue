<template>
  <v-app>
    <v-main>
      <div class="mainWrap">
      <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style>
  html, body{
    height:100%;
    overflow: hidden !important;
    width: 100%;
  }

  .mainWrap{
    background: url(assets/images/main.jpg) no-repeat;
    background-position: center;
    background-size: cover;
    height:100%;
    width:100%;
  }
</style>