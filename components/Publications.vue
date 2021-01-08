<template>
  <div id="Publications" class="publications section">
    <div class="row">
      <h2 class="section_title">Publications</h2>
    </div>
    <div v-for="(publications, index) in publications_all" :key="index">
      <h5>{{ publications.genre }}</h5>
      <ul>
        <li v-for="(pub, index) in publications.publications" :key="index">
          {{ pub.title }}
          <b>{{ pub.award }}</b>
          <a v-if="pub.link != ''" :href="pub.link" target="_blank"
            >[publisher page]</a
          >
          <!-- <a v-else>[publisher page]</a> -->
          <a v-else></a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      publications_all: [
        {
          genre: "International Conference (peer-reviewd)",
          publications: [
            {
              title:
                "Hiroaki Masaki, Kengo Shibata, Shui Hoshino, Takahiro Ishihama, Nagayuki Saito, and Koji Yatani. 2020. Exploring Nudge Designs to Help Adolescent SNS Users Avoid Privacy and Safety Threats. In Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems (CHI ’20). Association for Computing Machinery, New York, NY, USA, 1–11. DOI:https://doi.org/10.1145/3313831.3376666",
              award: "Honorable Mention Award",
              link: "https://dl.acm.org/doi/abs/10.1145/3313831.3376666"
            }
          ]
        },
        {
          genre: "Domestic Journal (peer-reviewed)",
          publications: [
            {
              title:
                "正木博明，柴田健吾，星野秀偉，石濵嵩博，齋藤長行，矢谷浩司，「若年層SNSユーザに対するプライバシー・安全上の行動に関するナッジの大規模定量調査」，情報処理学会論文誌 61 (12), 1892-1902",
              award: "",
              link:
                "https://ipsj.ixsq.nii.ac.jp/ej/index.php?active_action=repository_view_main_item_detail&page_id=13&block_id=8&item_id=208853&item_no=1"
            }
          ]
        },
        {
          genre: "Domestic Conference",
          publications: [
            {
              title:
                "正木 博明，柴田 健吾，星野 秀偉，石濵 嵩博，齋藤 長行，矢谷 浩司，「SNS上の行動に関する若年層ユーザに対するナッジの効果検証」，情報処理学会第186回HCI研究会，2020年1月．",
              award: "学生奨励賞",
              link:
                "https://ipsj.ixsq.nii.ac.jp/ej/index.php?active_action=repository_view_main_item_detail&page_id=13&block_id=8&item_id=202563&item_no=1"
            }
          ]
        }
      ]
    };
  }
};
</script>
