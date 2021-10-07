export const dataToCardItems = (data, includeFullName = true) => [
  {
    title: 'Personal Information',
    items: (includeFullName
      ? [
          {
            label: 'Full Name',
            value: `${data.firstName} ${data.lastName}`,
          },
        ]
      : []
    ).concat({
      label: 'Email',
      value: data.email,
    }),
  },
  {
    title: 'Location Information',
    items: [
      {label: 'City', value: data.city},
      {label: 'Country', value: data.country},
    ],
  },
  {
    title: 'Contact Information',
    items: [
      {label: 'Day Of Birth', value: data.dateOfBirth},
      {label: 'Mobile', value: data.mobile},
    ],
  },
];
