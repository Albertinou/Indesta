export default {
  name: 'product',
  type: 'document',
  title: 'Prekė',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Prekės pavadinimas',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Prekės nuotraukos',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Prelės aprašymas',
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
      name: 'price',
      type: 'number',
      title: 'Prekės kaina',
    },
    {
      name: "price_id",
      type: "string",
      title: "Nukopijuoti iš STRIPE -- Price ID"
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Prekės kategorija',
      to: [
        {
          type: 'category',
        },
      ],
    },
  ],
}
