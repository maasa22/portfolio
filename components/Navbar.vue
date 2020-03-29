<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand :to="index">h.msk</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <div v-for="(item, index) in items" :key="index">
            <b-nav-item :to="item.path">{{ item.title }}</b-nav-item>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: "#",
      items: [
        { title: "Experience", path: "#Experience" },
        { title: "Publications", path: "#Publications" },
        { title: "Awards", path: "#Awards" }
      ]
    };
  }
};
</script>
