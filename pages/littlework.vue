<template>
  <div>
    <navbar class="sticky-top" />
    <div class="container">
      <h4>Simple applications</h4>
      <p>Simple web sites and applications I developed in my spare time.</p>
      <div class="littleworks">
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
            title="神保町カレー一覧アプリ"
            :img-src="curryJinboGlide_img"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-sub-title>glide, pwa, no code</b-card-sub-title>
            <b-card-text>This app shows a list of my favorite curry restaurants in Jinbocho. This app was built in a few hours.</b-card-text>
            <b-button href="https://jinbo-curry.glideapp.io/" variant="primary">Go to app</b-button>
          </b-card>
          <b-card
            title="ランチ提案LINE bot"
            :img-src="curryJinboLinebot_img"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <b-card-sub-title>line bot, python, flask, google app engine</b-card-sub-title>
            <b-card-text>
              This app tells users lunch recommendations. Users can ask lunch recommendations by sending chat messages as well as tapping rich menus. I use icons from
              <a
                href="https://icofont.com/"
              >icofont</a> for rich menus.
            </b-card-text>
            <!-- <b-button href="https://line.me/R/ti/p/@084tokfc" variant="primary">Go to app</b-button> -->
          </b-card>
        </b-card-group>
      </div>
      <h4>Certificates</h4>
      <ul>
        <li>Google デジタルマーケティングの基礎 認定資格</li>
        <li>Google広告 ディスプレイ広告 認定資格（expired in May 2021）</li>
      </ul>
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
      curryJinboGlide_img: require("~/assets/work/curry-jinbo-glide.png"),
      curryJinboLinebot_img: require("~/assets/work/curry-jinbo-linebot.png")
    };
  },
  components: {
    Navbar
  }
};
</script>
