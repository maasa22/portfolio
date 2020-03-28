<template>
  <div>
    <navbar class="sticky-top" />
    <div>
      <b-card
        overlay
        :img-src="himeji_img"
        img-alt="Card Image"
        text-variant="white"
        title="h.msk"
        sub-title
      >
        <b-card-text>
          Portfoio of h.msk.
          <br />Upadated : 2020/3/23
        </b-card-text>
      </b-card>
    </div>
    <div id="sec1" class="basic_profile section">
      <div class="row">
        <div class="col-md-3 col-3"></div>
        <div class="col-md-6 col-6 text-left">
          <h4 class="my_name">Hiroaki MASAKI</h4>
        </div>
        <div class="col-md-3 col-3"></div>
      </div>
      <div class="row">
        <div class="col-md-3 col-3"></div>
        <div class="col-md-6 col-6 text-left">
          <p>
            I'm
            <b>Hiroaki Masaki(正木 博明)</b>. My research interest lies in
            Human-Computer Interaction(HCI). More specifically, my research
            focuses on "nugge", well studied in behavioral economics, and mobile
            health. In my spare time, I like listening to radio and manzai,
            watching baseball, participating to marathon, and eating curry.
          </p>
        </div>
        <div class="col-md-3 col-3"></div>
      </div>
      <div class="row">
        <div class="col-md-12 col-12 text-center">
          <div class="inline-block" v-for="item in items" :key="item.id">
            <a :href="item.url" target="_blank">
              <font-awesome-icon :icon="item.icon" style="font-size: 30px" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <div id="sec2" class="experience_research section">
      <div class="row">
        <h2 class="section_title">Experience</h2>
      </div>
      <div class="row">
        <div class="col-md-12 col-12 text-center">
          <h4>Master Thesis</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-3 text-right font-weight-bold">Term:</div>
        <div class="col-md-9 col-9 text-left">
          <p>2018年4月 ~ 2020年3月</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-3 text-right font-weight-bold">Affiliation:</div>
        <div class="col-md-9 col-9 text-left">
          <p>
            東京大学大学院 学際情報学府 先端表現情報学コース
            <a href="https://iis-lab.org/" target="_blank">矢谷研究室(IIS Lab)</a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-3 text-right font-weight-bold">Title:</div>
        <div class="col-md-9 col-9 text-left">
          <p>
            A Study on Designs of Privacy/Safety-related Nudges for Adolescent
            SNS Users (若年層SNSユーザに対するプライバシー・安全に関するナッジデザインの検証)
            <b>優秀修士論文 専攻長賞</b>
            <a href="https://iis-lab.org/research/sns-nudge/" target="_blank">[project page]</a>
            <a
              href="https://www.t.u-tokyo.ac.jp/foe/press/setnws_202003061126246287401367.html"
              target="_blank"
            >[press release]</a>
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 col-12 text-center">
          <h4>Data Scientist Internships</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-3 text-right font-weight-bold">Term:</div>
        <div class="col-md-9 col-9 text-left">
          <p>2018年9月（1ヶ月間）</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-3 text-right font-weight-bold">Affiliation:</div>
        <div class="col-md-9 col-9 text-left">
          <p>株式会社 リクルート</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-3 text-right font-weight-bold">Content:</div>
        <div class="col-md-9 col-9 text-left">
          <p>web広告の配信最適化</p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12 col-12 text-center">
          <h4>Graduation Thesis</h4>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-3 text-right font-weight-bold">Term:</div>
        <div class="col-md-9 col-9 text-left">
          <p>2017年4月 ~ 2018年3月</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-3 text-right font-weight-bold">Affiliation:</div>
        <div class="col-md-9 col-9 text-left">
          <p>
            東京大学 工学部 電子情報工学科
            <a href="https://iis-lab.org/" target="_blank">矢谷研究室(IIS Lab)</a>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-3 text-right font-weight-bold">Title:</div>
        <div class="col-md-9 col-9 text-left">
          <p>病気診断モバイルアプリに向けた爪画像データ収集機構の構築</p>
        </div>
      </div>
    </div>
    <Publications />
    <Awards />
    <!-- <SkillScores /> -->
    <footer></footer>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Awards from "~/components/Awards.vue";
import SkillScores from "~/components/SkillScores.vue";
import Publications from "~/components/Publications.vue";

export default {
  data() {
    return {
      himeji_img: require("../assets/himeji_castle.jpg"),
      items: [
        {
          id: 1,
          url: "https://github.com/maasa22",
          icon: ["fab", "github"]
        },
        {
          id: 2,
          url: "https://www.linkedin.com/in/hiroaki-masaki-3077bb141/",
          icon: ["fab", "linkedin"]
        },
        {
          id: 3,
          url: "https://www.facebook.com/hiroaki.msk",
          icon: ["fab", "facebook"]
        },
        {
          id: 4,
          url: "http://instagram.com/maasac22",
          icon: ["fab", "instagram"]
        },
        {
          id: 5,
          url: "mailto:masaki.hrak@gmail.com",
          icon: ["far", "envelope"]
        }
      ]
    };
  },
  components: {
    Navbar,
    Publications,
    Awards,
    SkillScores
  }
};
</script>

<style>
.section {
  /* upper, right, down, left */
  padding: 60px 30px 0px 30px;
}

.section_title {
  border-bottom: double 5px #47a89c;
  margin: auto;
  margin-bottom: 15px;
}

.my_name {
  margin: auto;
  margin-bottom: 25px;
}

.inline-block {
  display: inline-block; /* インラインブロック要素にする */
  padding: 20px 6px 0px 6px;
}

.a_tag {
  color: #3090ff;
}

footer {
  margin-top: 25px;
  height: 40px;
  background-color: #17a2b8; /*77,150,174*/
}
</style>
