<template>
  <div id="sec1" class="basic_profile section">
    <div class="row d-flex justify-content-center">
      <div class="col-lg-6 col-md-8 col-sm-9 col-xs-12 text-left">
        <h4 class="my_name">Hiroaki MASAKI</h4>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-lg-6 col-md-8 col-sm-9 col-xs-12 text-left">
        <p>
          I'm
          <b>Hiroaki Masaki(正木 博明)</b>. My research interest lies in
          Human-Computer Interaction(HCI). More specifically, my research
          focuses on "nugge", well studied in behavioral economics, and mobile
          health. In my spare time, I like listening to radio and manzai,
          watching baseball, participating to marathon, and eating curry.
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <div class="inline-block" v-for="item in items" :key="item.id">
          <a :href="item.url" target="_blank">
            <font-awesome-icon :icon="item.icon" style="font-size: 30px" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
        // {
        //   id: 4,
        //   url: "http://instagram.com/maasac22",
        //   icon: ["fab", "instagram"]
        // },
        {
          id: 5,
          url: "mailto:masaki.hrak@gmail.com",
          icon: ["far", "envelope"]
        }
      ]
    };
  }
};
</script>
