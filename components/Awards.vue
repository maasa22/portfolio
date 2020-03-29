<template>
  <div id="sec4" class="awards section">
    <div class="row">
      <h2 class="section_title">Awards</h2>
    </div>
    <ul>
      <li v-for="(award,index) in awards_list" :key="index">
        <div>
          <h6>
            {{award.title}}
            <a v-if="award.link!=''" :href="award.link" target="_blank">[award page]</a>
            <a v-else>[award page]</a>
          </h6>
          <p v-if="award.detail!=''">{{award.detail}}</p>
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
            "Honorable Mention Award at CHI 2020 (ACM CHI Conference on Human Factors in Computing Systems)",
          link:
            "https://chi2020.acm.org/for-attendees/chi-2020-best-papers-honourable-mentions/",
          detail:
            " (CHI 2020はヒューマン・コンピュータ・インタラクション分野最高峰の国際会議であり，投稿された論文の中から特に優れた上位5%にこの賞が送られる．)"
        },
        {
          title: "2019年度 東京大学大学院学生情報学府 優秀修士論文 専攻長賞",
          link: "",
          detail: ""
        },
        {
          title: "情報処理学会第186回HCI研究会 学生奨励賞",
          link: "http://www.sighci.jp/contents/page/news",
          detail: ""
        }
      ]
    };
  }
};
</script>
