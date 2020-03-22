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
          <br />Upadated : 2020/3/22
        </b-card-text>
      </b-card>
    </div>
    <div id="sec1" class="basic_profile section">
      <div class="row">
        <div class="col-md-12 col-12 text-center">
          <h2 class="section_title">About Me</h2>
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
      <div class="row">
        <div class="col-md-5 col-5 text-right font-weight-bold">Github:</div>
        <div class="col-md-5 col-5 text-left">
          <a class="a_tag" href="https://github.com/maasa22" target="_blank">maasa22</a>
        </div>
      </div>
      <!-- <p>Add linkedin, github, instagram here</p>
      <p>Update 修論系contents</p>-->
    </div>

    <div id="sec2" class="experience_research section">
      <div class="row">
        <div class="col-md-12 col-12 text-center">
          <h2 class="section_title">Experience</h2>
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
            <a
              href="https://iis-lab.org/research/sns-nudge/"
              target="_blank"
            >[project page]</a>
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

    <div id="sec3" class="publications section">
      <div class="row">
        <div class="col-md-12 col-12 text-center">
          <h2 class="section_title">Publications</h2>
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
          [publisher page]
        </li>
      </ul>
      <h5>Domestic Conference</h5>
      <ul>
        <li>
          正木 博明，柴田 健吾，星野 秀偉，石濵 嵩博，齋藤 長行，矢谷
          浩司，「SNS上の行動に関する若年層ユーザに対するナッジの効果検証」，情報処理学会第186回HCI研究会．
          <b>学生奨励賞</b>
          <a
            href="https://ipsj.ixsq.nii.ac.jp/ej/index.php?active_action=repository_view_main_item_detail&page_id=13&block_id=8&item_id=202563&item_no=1"
            target="_blank"
          >[publisher page]</a>
        </li>
      </ul>
    </div>

    <div id="sec4" class="awards section">
      <div class="row">
        <div class="col-md-12 col-12 text-center">
          <h2 class="section_title">Awards</h2>
        </div>
      </div>
      <ul>
        <li>
          <div>
            <h6>
              Honorable Mention Award at CHI 2020 (ACM CHI Conference on Human Factors in Computing Systems)
              <a
                href="https://chi2020.acm.org/for-attendees/chi-2020-best-papers-honourable-mentions/"
                target="_blank"
              >[award page]</a>
            </h6>
            <p>(CHI 2020 はヒューマン・コンピュータ・インタラクション分野最高峰の国際会議であり，投稿された論文の中から特に優れた上位5%にこの賞が送られる．)</p>
          </div>
        </li>
        <li>
          <div>
            <h6>
              情報処理学会第186回HCI研究会 学生奨励賞
              <a
                href="http://www.sighci.jp/contents/page/news"
                target="_blank"
              >[award page]</a>
            </h6>
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
  /* u, r, d, l */
  padding: 60px 30px 0px 30px;
}

.section_title {
  border-bottom: double 5px #47a89c;
}

.a_tag {
  color: #3090ff;
}
</style>
