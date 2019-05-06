<template>
  <div class="settings-view-root">
    <div ref="content">
      <h1 class="md-title">Settings</h1>

      <md-list class="main-list">
        <md-list-item>
          <md-card>
            <md-card-header>
              <md-avatar>
                <md-icon>my_location</md-icon>
              </md-avatar>
              <div class="md-title">Position</div>
            </md-card-header>
            <md-card-content>
              <md-list>
                <md-list-item>
                  <md-field>
                    <label>Latitude</label>
                    <md-input v-model="latitude" type="number"></md-input>
                  </md-field>
                </md-list-item>
                <md-list-item>
                  <md-field>
                    <label>Longitude</label>
                    <md-input v-model="longitude" type="number"></md-input>
                  </md-field>
                </md-list-item>
              </md-list>
            </md-card-content>
            <md-card-actions>
              <md-button @click="loadCurrentPosition">Current Position</md-button>
            </md-card-actions>
          </md-card>
        </md-list-item>

        <md-list-item>
          <md-card>
            <md-card-header>
              <md-avatar>
                <md-icon>ac_unit</md-icon>
              </md-avatar>
              <div class="md-title">Unit</div>
            </md-card-header>
            <md-card-content>
              <md-list>
                <md-list-item>
                  <md-radio v-model="unit" value="fahrenheit">°F</md-radio>
                </md-list-item>
                <md-list-item>
                  <md-radio v-model="unit" value="celcius">°C</md-radio>
                </md-list-item>
              </md-list>
            </md-card-content>
          </md-card>
        </md-list-item>

        <md-list-item>
          <md-card>
            <md-card-header>
              <md-avatar>
                <md-icon>person</md-icon>
              </md-avatar>
              <div class="md-title">Avatar</div>
            </md-card-header>
            <md-card-content>
                <div class="md-caption">Gender</div>
                <div class="md-layout md-alignment-center-center">
                  <svg-selector @selectItem="selectGender" v-for="genderit in genders" :path="genderit.svg" :selected="genderit.id === gender" :id="genderit.id" :key="genderit.id"></svg-selector>
                </div>
                <div class="md-caption">Hair Color</div>
                <div class="md-layout md-alignment-center-center">
                  <svg-selector @selectItem="selectHair" v-for="color in hairColors" :path="color.svg" :selected="color.id === hair" :id="color.id" :key="color.id"></svg-selector>
                </div>
                <div class="md-caption">Hair type</div>
                <div class="md-layout md-alignment-center-center" v-if="gender == 'Male'">
                  <svg-selector @selectItem="selectHairType" v-for="type in hairTypes.male" :path="`${type.svg}/${hair}.svg`" :selected="type.id === hairType" :id="type.id" :key="type.id"></svg-selector>
                </div>
                <div class="md-layout md-alignment-center-center" v-if="gender == 'Female'">
                  <svg-selector @selectItem="selectHairType" v-for="type in hairTypes.female" :path="`${type.svg}/${hair}.svg`" :selected="type.id === hairType" :id="type.id" :key="type.id"></svg-selector>
                </div>
                <div class="md-caption">Body Color</div>
                <div class="md-layout md-alignment-center-center">
                  <svg-selector @selectItem="selectBody" v-for="bodyit in bodyColors" :path="bodyit.svg" :selected="bodyit.id === body" :id="bodyit.id" :key="bodyit.id"></svg-selector>
                </div>
            </md-card-content>
          </md-card>
        </md-list-item>
      </md-list>
    </div>
  </div>
</template>

<script>
import SVGSelector from '@/views/settings/SVGSelector.vue';

export default {
  name: 'settings',
  components: {
    'svg-selector': SVGSelector,
  },
  data() {
    return {
      hairColors: [
        {
          id: 'Blond',
          svg: 'Icons/Hair_Color/Blond.svg',
        },
        {
          id: 'Brown',
          svg: 'Icons/Hair_Color/Brown.svg',
        },
        {
          id: 'Orange',
          svg: 'Icons/Hair_Color/Orange.svg',
        },
        {
          id: 'Black',
          svg: 'Icons/Hair_Color/Black.svg',
        },
      ],
      hairTypes: {
        female: [
          {
            id: 'Female/Long/Fringe',
            svg: 'Woman/Hair/Long/Fringe',
          },
          {
            id: 'Female/Long/Straight',
            svg: 'Woman/Hair/Long/Straight',
          },
          {
            id: 'Female/Long/Wavy',
            svg: 'Woman/Hair/Long/Wavy',
          },
          {
            id: 'Female/Pigtail/Braid',
            svg: 'Woman/Hair/Pigtail/Braid',
          },
          {
            id: 'Female/Pigtail/Dutt',
            svg: 'Woman/Hair/Pigtail/Dutt',
          },
          {
            id: 'Female/Pigtail/Pigtail',
            svg: 'Woman/Hair/Pigtail/Pigtail',
          },
          {
            id: 'Female/Short/Curly',
            svg: 'Woman/Hair/Short/Curly',
          },
          {
            id: 'Female/Short/Fringe',
            svg: 'Woman/Hair/Short/Fringe',
          },
          {
            id: 'Female/Short/Straight',
            svg: 'Woman/Hair/Short/Straight',
          },
        ],
        male: [
          {
            id: 'Male/First',
            svg: 'Man/Hair/First',
          },
          {
            id: 'Male/Long',
            svg: 'Man/Hair/Long',
          },
          {
            id: 'Male/Matt',
            svg: 'Man/Hair/Matt',
          },
          {
            id: 'Male/Second',
            svg: 'Man/Hair/Second',
          },
          {
            id: 'Male/Waves',
            svg: 'Man/Hair/Waves',
          },
        ],
      },
      bodyColors: [
        {
          id: 'Black',
          svg: 'Icons/Body_Color/Black.svg',
        },
        {
          id: 'Yellow',
          svg: 'Icons/Body_Color/Yellow.svg',
        },
        {
          id: 'White',
          svg: 'Icons/Body_Color/White.svg',
        },
      ],
      genders: [
        {
          id: 'Male',
          svg: 'Icons/Gender/Man_Symbol.svg',
        },
        {
          id: 'Female',
          svg: 'Icons/Gender/Woman_Symbol.svg',
        },
      ],
    };
  },
  mounted() {
    const hammertime = new Hammer(this.$refs.content, {});
    hammertime.on('swipeleft', () => {
      this.$router.push('/');
    });
  },
  computed: {
    latitude: {
      get() {
        return this.$store.state.general.settings.position.latitude;
      },
      set(val) {
        this.$store.commit('settings.position.setLatitude', parseFloat(val));
      },
    },
    longitude: {
      get() {
        return this.$store.state.general.settings.position.longitude;
      },
      set(val) {
        this.$store.commit('settings.position.setLongitude', parseFloat(val));
      },
    },
    unit: {
      get() {
        return this.$store.state.general.settings.unit;
      },
      set(val) {
        this.$store.commit('settings.setUnit', val);
      },
    },
    hair: {
      get() {
        return this.$store.state.general.settings.avatar.hair;
      },
      set(val) {
        this.$store.commit('settings.avatar.setHair', val);
      },
    },
    hairType: {
      get() {
        return this.$store.state.general.settings.avatar.hairType;
      },
      set(val) {
        this.$store.commit('settings.avatar.setHairType', val);
      },
    },
    body: {
      get() {
        return this.$store.state.general.settings.avatar.body;
      },
      set(val) {
        this.$store.commit('settings.avatar.setBody', val);
      },
    },
    gender: {
      get() {
        return this.$store.state.general.settings.avatar.gender;
      },
      set(val) {
        this.$store.commit('settings.avatar.setGender', val);
      },
    },
  },
  methods: {
    loadCurrentPosition() {
      this.$store.dispatch('loadPosition');
    },
    selectHair(id) {
      this.hair = id;
    },
    selectHairType(id) {
      this.hairType = id;
    },
    selectBody(id) {
      this.body = id;
    },
    selectGender(id) {
      this.gender = id;
    },
  },
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

  .md-card {
    width: 100%;
  }

  .main-list {
    margin-top: 10px;
  }
}
</style>
