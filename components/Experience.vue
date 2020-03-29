<template>
  <div id="sec2" class="experience_research section">
    <div class="row">
      <h2 class="section_title">Experience</h2>
    </div>

    <div v-for="(experience, index) in experiences" :key="index">
      <div class="row">
        <div class="col-md-12 col-12 text-center">
          <h4>{{experience.name}}</h4>
        </div>
      </div>
      <div class="row">
        <div class="profile-index col-md-3 col-3 text-right font-weight-bold">Term:</div>
        <div class="profile-content col-md-9 col-9 text-left">
          <p>{{experience.term}}</p>
        </div>
      </div>
      <div class="row">
        <!-- <div class="col-lg-2 col-md-2 col-sm-3 col-xs-4 text-right font-weight-bold">Affiliation:</div>
        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-8 text-left">-->
        <div class="profile-index col-md-3 col-3 text-right font-weight-bold">Affiliation:</div>
        <div class="profile-content col-md-9 col-9 text-left">
          <p>
            <span v-html="experience.affiliation"></span>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="profile-index col-md-3 col-3 text-right font-weight-bold">Content:</div>
        <div class="profile-content col-md-9 col-9 text-left">
          <p>
            <span v-html="experience.content"></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        {
          name: "Master Thesis",
          term: "2018年4月 ~ 2020年3月",
          affiliation:
            "東京大学大学院 学際情報学府 先端表現情報学コース<a href='https://iis-lab.org/' target='_blank'>矢谷研究室(IIS Lab)</a>",
          content:
            "A Study on Designs of Privacy/Safety-related Nudges for Adolescent SNS Users (若年層SNSユーザに対するプライバシー・安全に関するナッジデザインの検証) <b>優秀修士論文 専攻長賞</b> <a href='https://iis-lab.org/research/sns-nudge/' target='_blank'>[project page]</a><a href='https://www.t.u-tokyo.ac.jp/foe/press/setnws_202003061126246287401367.html' target='_blank'>[press release]</a>"
        },
        {
          name: "Data Scientist Internships",
          term: "2018年9月（1ヶ月間）",
          affiliation: "株式会社 リクルート",
          content: "web広告の配信最適化"
        },
        {
          name: "Graduation Thesis",
          term: "2017年4月 ~ 2018年3月",
          affiliation:
            "東京大学 工学部 電子情報工学科 <a href='https://iis-lab.org/' target='_blank'>矢谷研究室(IIS Lab)</a>",
          content: "病気診断モバイルアプリに向けた爪画像データ収集機構の構築"
        }
      ]
    };
  }
};
</script>

<style>
</style>
