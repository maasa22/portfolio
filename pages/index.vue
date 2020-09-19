<template>
  <div>
    <Navbar class="sticky-top" />
    <Topimg />
    <div class="container">
      <Aboutme />
      <Experience />
      <Publications />
      <Awards />
      <SkillCertificates />
    </div>
    <footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Topimg from "~/components/Topimg.vue";
import Aboutme from "~/components/Aboutme.vue";
import Experience from "~/components/Experience.vue";
import Publications from "~/components/Publications.vue";
import Awards from "~/components/Awards.vue";
import SkillCertificates from "~/components/SkillCertificates.vue";

export default {
  components: {
    Navbar,
    Topimg,
    Aboutme,
    Experience,
    Publications,
    Awards,
    SkillCertificates,
  },
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
