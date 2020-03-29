<template>
  <div id="Publications" class="publications section">
    <div class="row">
      <h2 class="section_title">Publications</h2>
    </div>
    <div v-for="publications in publications_all">
      <h5>{{publications.genre}}</h5>
      <ul>
        <li v-for="pub in publications.publications">
          {{pub.title}}
          <b>{{pub.award}}</b>
          <a v-if="pub.link!=''" :href="pub.link" target="_blank">[publisher page]</a>
          <a v-else>[publisher page]</a>
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
                "Hiroaki Masaki, Kengo Shibata, Shui Hoshino, Takahiro Ishihama, Nagayuki Saito, and Koji Yatani. Exploring Nudge Designs to Help Adolescent SNS Users Avoid Privacy and Safety Threats. To appear in proceedings of ACM CHI Conference on Human Factors in Computing Systems, 2020.",
              award: "Honorable Mention Award",
              link: ""
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
