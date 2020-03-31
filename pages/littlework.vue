<template>
  <div>
    <navbar class="sticky-top" />
    <div class="container">
      <h4>A collection of what I developed in my free time.</h4>
      <div>
        <b-card-group columns>
          <b-card
            title="Portfolio site"
            :img-src="portfolio_img"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-sub-title>vue, nuxt, google app engine</b-card-sub-title>
            <b-card-text>This site.</b-card-text>

            <b-button href="/" variant="primary">Go to top page</b-button>
          </b-card>
          <b-card
            title="神保町カレー"
            :img-src="curryJinbo_img"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-sub-title>glide, no code</b-card-sub-title>
            <b-card-text>This app shows a list of my favorite curry restaurants in Jinbocho. This app was built in 1 hour.</b-card-text>

            <b-button href="https://curry-jinbo.glideapp.io/" variant="primary">Go to app</b-button>
          </b-card>
        </b-card-group>
      </div>
    </div>
    <footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";

export default {
  data() {
    return {
      portfolio_img: require("~/assets/work/portfolio.png"),
      curryJinbo_img: require("~/assets/work/jinbo-curry.png")
    };
  },
  components: {
    Navbar
  }
};
</script>
