export default {
  name: 'Panque – Lijó EB 1,2,3, via Alheira e Roriz',
  directions: [
  {
    label: 'Panque → Lijó',
    hasSaturday: false,
    stops: [
    { name: 'Panque (Rua de S. Martinho)', times: ['07:20'] },
    { name: 'Sandiães (Longra)', times: ['07:27'] },
    { name: 'Igreja Nova (Lugar da Balada)', times: ['07:37'] },
    { name: 'Alheira (Sujilde)', times: ['07:44'] },
    { name: 'Alheira (Real)', times: ['07:50'] },
    { name: 'Roriz (Cemitério)', times: ['07:55'] },
    { name: 'Lijó (Mosqueiro)', times: ['08:00'] },
    { name: 'Lijó (EB 1,2,3)', times: ['08:05'] }
    ]
  },
  {
    label: 'Lijó → Panque',
    hasSaturday: false,
    stops: [
    { name: 'Lijó (EB 1,2,3)', times: ['13:25', '16:25', '17:25', '18:20'] },
    { name: 'Lijó (Mosqueiro)', times: ['13:30', '16:30', '17:30', '18:25'] },
    { name: 'Roriz (Cemitério)', times: ['13:34', '16:34', '17:34', '18:29'] },
    { name: 'Alheira (Real)', times: ['13:39', '16:39', '17:39', '18:34'] },
    { name: 'Alheira (Sujilde)', times: ['13:45', '16:45', '17:45', '18:40'] },
    { name: 'Igreja Nova (Lugar da Balada)', times: ['13:52', '16:52', '17:52', '18:47'] },
    { name: 'Panque (Rua de S. Martinho)', times: ['14:10', '17:10', '18:10', '19:05'] }
    ]
  }
  ]
};
