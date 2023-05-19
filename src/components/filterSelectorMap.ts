const csFilterSelectorMap = [
  {
    title: 'City',
    field: 'city',
  },
  {
    title: 'Type',
    field: 'type',
  },
  {
    title: 'People\'s comment',
    field: 'people_comment',
  },
  {
    title: 'Hostname',
    field: 'hostname',
  },

  {
    title: 'Avalible Date',
    field: 'avalible_date',
  },
];

const csFilterInputFormat = {
  city: 'dropdown',
  type: 'dropdown',
  people_comment: 'dropdown',
  hostname: 'text',
  avalible_date: 'calendar',
};

export { csFilterSelectorMap, csFilterInputFormat };
