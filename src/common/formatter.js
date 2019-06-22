export default {
  countryInTable(country) {
    return {
      description: `${country.capital} is the capital of ${country.name}`,
      ...country.location,
    };
  },
};
