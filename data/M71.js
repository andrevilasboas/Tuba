export default {
  name: 'Vila Boa – Lijó EB 2,3, via Carapeços e Campo',
  directions: [
  {
    label: 'Vila Boa → Lijó',
    hasSaturday: false,
    stops: [
    { name: 'Vila Boa (Faial)', times: ['07:30', '12:45'] },
    { name: 'Silva', times: ['07:35', '12:50'] },
    { name: 'Carapeços (Arieira)', times: ['07:43', '12:58'] },
    { name: 'Campo (Gandara)', times: ['07:49', '13:04'] },
    { name: 'Lijó (Mosqueiro)', times: ['07:57', '13:12'] },
    { name: 'Lijó (EB 2,3)', times: ['08:05', '13:20'] }
    ]
  },
  {
    label: 'Lijó → Vila Boa',
    hasSaturday: false,
    stops: [
    { name: 'Lijó (EB 2,3)', times: ['13:25', '16:25', '17:25', '18:20'] },
    { name: 'Lijó (Mosqueiro)', times: ['13:30', '16:30', '17:30', '18:25'] },
    { name: 'Campo (Gandara)', times: ['13:39', '16:39', '17:39', '18:34'] },
    { name: 'Carapeços (Arieira)', times: ['13:46', '16:46', '17:46', '18:41'] },
    { name: 'Silva', times: ['13:55', '16:55', '17:55', '18:50'] },
    { name: 'Vila Boa (Faial)', times: ['14:00', '17:00', '18:00', '18:55'] }
    ]
  }
  ]
};
