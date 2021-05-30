<template>
  <q-layout view="lhr lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <q-page-container>
      <!-- This is where pages get injected -->
      <div class="container">
        <q-page class="main-router">
          <router-view />
        </q-page>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  mounted() {}
};
</script>

<style lang="stylus" scoped></style>
