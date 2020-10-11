<template>
  <div id="Awards" class="awards section">
    <div class="row">
      <h2 class="section_title">Awards</h2>
    </div>
    <ul>
      <li v-for="(award, index) in awards_list" :key="index">
        <div>
          <h6>
            {{ award.title }}
            <a v-if="award.link != ''" :href="award.link" target="_blank"
              >[award page]</a
            >
          </h6>
          <p v-if="award.detail != ''">- {{ award.detail }}</p>
          <p v-if="award.detail2 != ''">- {{ award.detail2 }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awards_list: [
        {
          title:
            "Honorable Mention Award at CHI 2020 (ACM CHI Conference on Human Factors in Computing Systems 2020)",
          link:
            "https://chi2020.acm.org/for-attendees/chi-2020-best-papers-honourable-mentions/",
          detail:
            // " (CHI 2020はヒューマン・コンピュータ・インタラクション分野最高峰の国際会議であり，投稿された論文の中から特に優れた上位5%にこの賞が送られる．)",
            "CHI is a top-tier international conference of Human-Computer Interaction. Top 5% of submissions can receive this award.",
          detail2: ""
        },
        {
          title: "Department Dean Award on Master Thesis",
          link: "",
          detail: "2019年度 東京大学大学院学際情報学府 優秀修士論文 専攻長賞",
          detail2: ""
        },
        {
          title:
            "Student Encouragement Award at IPSJ(Information Processing Society of Japan) Conference",
          link: "http://www.sighci.jp/contents/page/news",
          detail: "情報処理学会 第186回HCI研究会 学生奨励賞",
          detail2: ""
        }
      ]
    };
  }
};
</script>
