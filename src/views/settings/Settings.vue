<template>
  <div class="settings-view-root">
    <div ref="content">
      <h1 class="md-title">Settings</h1>

      <md-list>
        <md-list-item md-expand>
          <md-icon>my_location</md-icon>
          <span class="md-list-item-text">Position</span>

          <md-list slot="md-expand">
            <md-list-item class="md-inset">
              <md-field>
                <label>Latidute</label>
                <md-input v-model="number" type="number"></md-input>
              </md-field>
              <md-field>
                <label>Longitude</label>
                <md-input v-model="number" type="number"></md-input>
              </md-field>
            </md-list-item>
          </md-list>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>ac_unit</md-icon>
          <span class="md-list-item-text">Units</span>

          <md-list slot="md-expand">
            <md-list-item class="md-inset">Console</md-list-item>
            <md-list-item class="md-inset">PC</md-list-item>
            <md-list-item class="md-inset">Phone</md-list-item>
          </md-list>
        </md-list-item>

        <md-list-item md-expand>
          <md-icon>video_library</md-icon>
          <span class="md-list-item-text">Video</span>

          <md-list slot="md-expand">
            <md-list-item class="md-inset">Humor</md-list-item>
            <md-list-item class="md-inset">Music</md-list-item>
            <md-list-item class="md-inset">Movies</md-list-item>
            <md-list-item class="md-inset">TV Shows</md-list-item>
          </md-list>
        </md-list-item>

        <md-list-item>
          <md-icon>shopping_basket</md-icon>
          <span class="md-list-item-text">Shop</span>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>
export default {
  name: "settings",
  components: {},
  mounted() {
    const hammertime = new Hammer(this.$refs.content, {});
    hammertime.on("swipeleft", () => {
      this.$router.push("/");
    });
  }
};
</script>

<style lang="scss" scoped>
.settings-view-root {
  height: 100%;
  width: 100%;

  .md-layout {
    height: 100%;
  }

  .md-layout-item {
    overflow: scroll;
  }
}
</style>
