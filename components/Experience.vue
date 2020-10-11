<template>
  <div id="Experience" class="experience_research section">
    <div class="row">
      <h2 class="section_title">Experience</h2>
    </div>

    <div
      v-for="(experience, index) in experiences"
      :key="index"
      class="each_experience"
    >
      <div class="row">
        <div class="col-md-12 col-12 text-center">
          <h4>{{ experience.name }}</h4>
        </div>
      </div>
      <div class="row">
        <div class="profile-index col-md-4 col-4 text-right font-weight-bold">
          Term:
        </div>
        <div class="profile-content col-md-8 col-8 text-left">
          <p>{{ experience.term }}</p>
        </div>
      </div>
      <div class="row">
        <!-- <div class="col-lg-2 col-md-2 col-sm-3 col-xs-4 text-right font-weight-bold">Affiliation:</div>
        <div class="col-lg-9 col-md-9 col-sm-9 col-xs-8 text-left">-->
        <div class="profile-index col-md-4 col-4 text-right font-weight-bold">
          Affiliation:
        </div>
        <div class="profile-content col-md-8 col-8 text-left">
          <p>
            <span v-html="experience.affiliation"></span>
          </p>
        </div>
      </div>
      <div class="row">
        <div class="profile-index col-md-4 col-4 text-right font-weight-bold">
          Content:
        </div>
        <div class="profile-content col-md-8 col-8 text-left">
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
          // term: "2018年4月 ~ 2020年3月",
          term: "Apr 2018 ~ Mar 2020",
          affiliation:
            // "東京大学大学院 学際情報学府 先端表現情報学コース<a href='https://iis-lab.org/' target='_blank'>矢谷研究室(IIS Lab)</a>"
            "<a href='https://iis-lab.org/' target='_blank'>IIS Lab(Yatani Lab)</a>, Emerging design and informatics course, Graduate school of interdisciplinary information studies, The University of Tokyo.",
          content:
            // "A Study on Designs of Privacy/Safety-related Nudges for Adolescent SNS Users (若年層SNSユーザに対するプライバシー・安全に関するナッジデザインの検証) <b>優秀修士論文 専攻長賞</b> <a href='https://iis-lab.org/research/sns-nudge/' target='_blank'>[project page]</a><a href='https://www.t.u-tokyo.ac.jp/foe/press/setnws_202003061126246287401367.html' target='_blank'>[press release]</a>"
            "\"A Study on Designs of Privacy/Safety-related Nudges for Adolescent SNS Users\" (若年層SNSユーザに対するプライバシー・安全に関するナッジデザインの検証). <b>Department Dean Award on Master Thesis</b> <a href='https://iis-lab.org/research/sns-nudge/' target='_blank'>[project page]</a><a href='https://www.t.u-tokyo.ac.jp/foe/press/setnws_202003061126246287401367.html' target='_blank'>[press release]</a>"
        },
        {
          name: "Data Scientist Internships",
          // term: "2018年9月（1ヶ月間）",
          term: "Sep 2018(1 month)",
          // affiliation: "株式会社 リクルート",
          affiliation: "Recruit Co., Ltd.",
          // content: "web広告の配信最適化"
          content: "Data analisis for optimizing internet ad delivery."
        },
        {
          name: "Graduation Thesis",
          // term: "2017年4月 ~ 2018年3月",
          term: "Apr 2014 ~ Mar 2018",
          affiliation:
            //   "東京大学 工学部 電子情報工学科 <a href='https://iis-lab.org/' target='_blank'>矢谷研究室(IIS Lab)</a>",
            "<a href='https://iis-lab.org/' target='_blank'>IIS Lab(Yatani Lab)</a>, Information and communication engineering, Engineering, The University of Tokyo.",
          content:
            "「病気診断モバイルアプリに向けた爪画像データ収集機構の構築」 (Data collection mechanism of nail images for disease-screening mobile application, written in Japanese)"
        }
      ]
    };
  }
};
</script>

<style scoped>
.each_experience {
  margin: 10px 0px 30px 0px;
}
</style>
