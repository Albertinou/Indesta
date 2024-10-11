export default {
    name: 'gallery',
    type: 'document',
    title: 'Galerija',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Nuotraukos pavadinimas',
      },
      {
        name: 'slug',
        type: 'slug',
        title: `Čia nieko nerašyti, tik spausti "Generate"`,
        options: {
          source: 'name',
          maxLength: 96,
        },
      },
      {
        name: 'images',
        type: 'array',
        title: 'Nuotrauka',
        of: [{type: 'image'}],
      },
    ],
  }