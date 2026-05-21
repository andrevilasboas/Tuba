export default {
  name: 'Balugães – Barroselas EB 2,3',
  directions: [
  {
    label: 'Balugães → Barroselas',
    hasSaturday: false,
    stops: [
    { name: 'Balugães', times: ['07:30'] },
    { name: 'Balugães (Aparecida)', times: ['07:35'] },
    { name: 'Durrães (Souto)', times: ['07:45'] },
    { name: 'Tregosa (Cabine)', times: ['07:55'] },
    { name: 'Tregosa (Alvas)', times: ['08:00'] },
    { name: 'Barroselas (EB 2,3)', times: ['08:10'] }
    ]
  },
  {
    label: 'Barroselas → Balugães',
    hasSaturday: false,
    stops: [
    { name: 'Barroselas (EB 2,3)', times: ['13:40', '17:10', '18:05'] },
    { name: 'Tregosa (Alvas)', times: ['13:50', '17:20', '18:15'] },
    { name: 'Tregosa (Cabine)', times: ['13:55', '17:25', '18:20'] },
    { name: 'Durrães (Souto)', times: ['14:05', '17:35', '18:30'] },
    { name: 'Balugães (Aparecida)', times: ['14:15', '17:45', '18:40'] },
    { name: 'Balugães', times: ['14:20', '17:50', '18:45'] }
    ]
  }
  ]
};
