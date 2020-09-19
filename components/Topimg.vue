<template>
  <div>
    <b-card overlay :img-src="himeji_img" img-alt="Card Image" text-variant="white" title sub-title>
      <b-card-text>
        Portfoio of h.msk.
        <!-- <br />Upadated : 2020/4/2 -->
      </b-card-text>
    </b-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      himeji_img: require("~/assets/himeji_castle.jpg"),
    };
  },
};
</script>
