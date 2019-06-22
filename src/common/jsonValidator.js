import AJV from 'ajv';

const countries = {
  items: {
    type: 'object',
    required: [
      'name',
      'capital',
      'location',
    ],
    properties: {
      name: { type: 'string' },
      capital: { type: 'string' },
      location: {
        type: 'object',
        required: [
          'latitude',
          'longitude',
        ],
        properties: {
          latitude: { type: 'number' },
          longitude: { type: 'number' },
        },
      },
    },
  },
};

export default {
  countries(data) {
    const ajv = new AJV();
    return ajv.validate(countries, data);
  },
};
