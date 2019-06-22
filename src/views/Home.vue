<template>
  <div>
    <md-table v-if="checkJson">
      <md-table-row>
        <md-table-head>Caption</md-table-head>
        <md-table-head>Latitude</md-table-head>
        <md-table-head>Longitude</md-table-head>
      </md-table-row>

      <md-table-row v-for="(country, index) in tableCountries" :key="index">
        <md-table-cell>{{ country.description }}</md-table-cell>
        <md-table-cell>{{ country.latitude }}</md-table-cell>
        <md-table-cell>{{ country.longitude }}</md-table-cell>
      </md-table-row>
    </md-table>

    <md-dialog-alert
      :md-active.sync="errors.load"
      md-content="Невозможно загрузить JSON"
      md-confirm-text="Закрыть" />
    <md-dialog-alert
      :md-active.sync="errors.parse"
      md-content="Некорректный формат JSON"
      md-confirm-text="Закрыть" />

  </div>
</template>

<script>

export default {
  name: 'home',
  computed: {
    tableCountries() {
      return this.countries.map(
        country => this.$_Formatter.countryInTable(country),
      );
    },
  },
  data() {
    return {
      countries: [],
      checkJson: false,
      errors: {
        load: false,
        parse: false,
      },
    };
  },
  methods: {
    async getCountries() {
      await this.$_API.getCountries()
        .then((response) => {
          this.checkJson = this.$_jsonValidator.countries(response.data);
          if (this.checkJson) {
            this.countries = response.data;
          } else {
            this.errors.parse = true;
          }
        })
        .catch(() => {
          this.errors.load = true;
        });
    },
  },
  mounted() {
    this.getCountries();
  },
};
</script>
