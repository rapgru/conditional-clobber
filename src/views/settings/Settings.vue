<template>
  <div class="settings-view-root">
    <div ref="content">
      <h1 class="md-title">Settings</h1>

      <location-picker-dialog :show="showLocation" @cancel="showLocation = false" @save="setLocation"/>

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
              <p style="white-space: normal; padding-top: 20px;">{{ place.display_name }}</p>
            </md-card-content>
            <md-card-actions md-alignment="left">
              <md-button @click="loadCurrentPosition">Current Position</md-button>
              <md-button @click="showLocation = true">Search Place</md-button>
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
                  <md-radio v-model="unit" value="us"/>
                  <span class="md-list-item-text">°F</span>
                </md-list-item>
                <md-list-item>
                  <md-radio v-model="unit" value="ca"/>
                  <span class="md-list-item-text">°C</span>
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
import LocationPickerDialog from '@/views/settings/LocationPickerDialog.vue';
import _ from 'lodash';

export default {
  name: 'settings',
  components: {
    'svg-selector': SVGSelector,
    'location-picker-dialog': LocationPickerDialog,
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
            id: 'Long/Fringe',
            svg: 'Icons/HairWoman/Long/Fringe',
          },
          {
            id: 'Long/Straight',
            svg: 'Icons/HairWoman/Long/Straight',
          },
          {
            id: 'Long/Wavy',
            svg: 'Icons/HairWoman/Long/Wavy',
          },
          {
            id: 'Pigtail/Braid',
            svg: 'Icons/HairWoman/Pigtail/Braid',
          },
          {
            id: 'Pigtail/Dutt',
            svg: 'Icons/HairWoman/Pigtail/Dutt',
          },
          {
            id: 'Pigtail/Pigtail',
            svg: 'Icons/HairWoman/Pigtail/Pigtail',
          },
          {
            id: 'Short/Curly',
            svg: 'Icons/HairWoman/Short/Curly',
          },
          {
            id: 'Short/Fringe',
            svg: 'Icons/HairWoman/Short/Fringe',
          },
          {
            id: 'Short/Straight',
            svg: 'Icons/HairWoman/Short/Straight',
          },
        ],
        male: [
          {
            id: 'First',
            svg: 'Icons/HairMan/First',
          },
          {
            id: 'Long',
            svg: 'Icons/HairMan/Long',
          },
          {
            id: 'Matt',
            svg: 'Icons/HairMan/Matt',
          },
          {
            id: 'Second',
            svg: 'Icons/HairMan/Second',
          },
          {
            id: 'Waves',
            svg: 'Icons/HairMan/Waves',
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
      showLocation: false,
    };
  },
  mounted() {
    const hammertime = new Hammer(this.$refs.content, {});
    hammertime.on('swipeleft', () => {
      this.$router.push('/');
    });
  },
  computed: {
    place: {
      get() {
        return this.$store.state.general.settings.place;
      },
      set(val) {
        console.log("saved");
        console.log(val);
        this.$store.commit('settings.setPlace', val);
        this.$store.dispatch('refreshWeather');
      },
    },
    unit: {
      get() {
        return this.$store.state.general.settings.unit;
      },
      set(val) {
        this.$store.commit('settings.setUnit', val);
        this.$store.dispatch('refreshWeather');
      },
    },
    hair: {
      get() {
        return this.$store.state.general.settings.avatar.hair;
      },
      set(val) {
        this.$store.commit('settings.avatar.setHair', val);
        this.$store.dispatch('refreshWeather');
      },
    },
    hairType: {
      get() {
        return this.$store.state.general.settings.avatar.hairType;
      },
      set(val) {
        this.$store.commit('settings.avatar.setHairType', val);
        this.$store.dispatch('refreshWeather');
      },
    },
    body: {
      get() {
        return this.$store.state.general.settings.avatar.body;
      },
      set(val) {
        this.$store.commit('settings.avatar.setBody', val);
        this.$store.dispatch('refreshWeather');
      },
    },
    gender: {
      get() {
        return this.$store.state.general.settings.avatar.gender;
      },
      set(val) {
        this.$store.commit('settings.avatar.setGender', val);
        const gender = _.toLower(val);
        console.log(gender);
        console.log((this.hairTypes[gender][0]).id);
        this.$store.commit('settings.avatar.setHairType', (this.hairTypes[gender][0]).id);
        this.$store.dispatch('refreshWeather');
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
    setLocation(location) {
      this.place = location;
      this.showLocation = false;
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
    margin: 0px;
  }

  .main-list {
    margin-top: 10px;
  }
}
</style>
