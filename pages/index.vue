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
        <b-card-text>Portfoio of h.msk.</b-card-text>
      </b-card>
    </div>
    <div class="basic_profile section">
      <div class="row">
        <div class="col-md-12 col-12 text-center">
          <h2 id="sec1">About Me</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5 col-5 text-right font-weight-bold">Name:</div>
        <div class="col-md-5 col-5 text-left">正木 博明</div>
      </div>
      <div class="row">
        <div class="col-md-5 col-5 text-right font-weight-bold">Research interests:</div>
        <div class="col-md-5 col-5 text-left">
          Human-Computer Interaction(HCI),
          <br />especially "nudge" and mobile health.
        </div>
      </div>
      <!-- <p>Add linkedin, github, instagram here</p>
      <p>Update 修論系contents</p>-->
    </div>

    <div class="experience_research section">
      <div class="row">
        <div class="col-md-12 col-12 text-center">
          <h2 id="sec2">Experience</h2>
        </div>
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
          <p>東京大学大学院 学際情報学府 先端表現情報学コース 矢谷研究室(IIS Lab)</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-3 text-right font-weight-bold">Title:</div>
        <div class="col-md-9 col-9 text-left">
          <p>
            A Study on Designs of Privacy/Safety-related Nudges for Adolescent
            SNS Users
            <br />(若年層SNSユーザに対するプライバシー・安全に関するナッジデザインの検証)
            <br />
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
          <p>東京大学 工学部 電子情報工学科 矢谷研究室(IIS Lab)</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3 col-3 text-right font-weight-bold">Title:</div>
        <div class="col-md-9 col-9 text-left">
          <p>病気診断モバイルアプリに向けた爪画像データ収集機構の構築</p>
        </div>
      </div>
    </div>

    <div class="publications section">
      <div class="row">
        <div class="col-md-12 col-12 text-center">
          <h2 id="sec3">Publications</h2>
        </div>
      </div>
      <h5>International Conference (peer-reviewed)</h5>
      <ul>
        <li>
          Hiroaki Masaki, Kengo Shibata, Shui Hoshino, Takahiro Ishihama,
          Nagayuki Saito, and Koji Yatani. Exploring Nudge Designs to Help
          Adolescent SNS Users Avoid Privacy and Safety Threats. To appear in
          proceedings of ACM CHI Conference on Human Factors in Computing
          Systems, 2020.
          <b>Honorable Mention Award</b>
        </li>
      </ul>
      <h5>Domestic Conference</h5>
      <ul>
        <li>
          正木 博明，柴田 健吾，星野 秀偉，石濵 嵩博，齋藤 長行，矢谷
          浩司，「SNS上の行動に関する若年層ユーザに対するナッジの効果検証」，情報処理学会第186回HCI研究会．
          <b>学生奨励賞</b>
        </li>
      </ul>
    </div>

    <div class="awards section">
      <div class="row">
        <div class="col-md-12 col-12 text-center">
          <h2 id="sec4">Awards</h2>
        </div>
      </div>
      <ul>
        <li>
          <div>
            <h6>CHI 2020 Honorable Mention Award</h6>
            <p>
              （CHI
              2020はヒューマン・コンピュータ・インタラクション分野最高峰の国際会議であり，投稿された論文の中から特に優れた上位5%に送られる．）
            </p>
          </div>
        </li>
        <li>
          <div>
            <h6>情報処理学会第186回HCI研究会 学生奨励賞</h6>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";

export default {
  data() {
    return {
      himeji_img: require("../assets/himeji_castle.jpg")
    };
  },
  components: {
    Navbar
  }
};
</script>

<style>
.section {
  margin: 50px;
}
</style>
