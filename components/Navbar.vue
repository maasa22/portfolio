<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand :to="index">h.msk</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Top" right>
            <div v-for="(item, index) in items" :key="index">
              <b-dropdown-item :to="item.path">{{
                item.title
              }}</b-dropdown-item>
            </div>
          </b-nav-item-dropdown>
          <!-- <div v-for="(item, index) in items" :key="index">
            <b-nav-item :to="item.path">{{ item.title }}</b-nav-item>
          </div> -->
          <b-nav-item to="/littlework">Littlework</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: "/#",
      items: [
        { title: "Top", path: "/#" },
        { title: "Experience", path: "/#Experience" },
        { title: "Publications", path: "/#Publications" },
        { title: "Awards", path: "/#Awards" },
        { title: "Skills", path: "/#Skills" }
        // { title: "Littlework", path: "/littlework" }
      ]
    };
  }
};
</script>
