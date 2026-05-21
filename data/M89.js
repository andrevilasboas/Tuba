export default {
  name: 'Gueral – Rates EB 2,3, via Macieira de Rates',
  directions: [
  {
    label: 'Gueral → Rates',
    hasSaturday: false,
    stops: [
    { name: 'Gueral (Igreja)', times: ['07:45'] },
    { name: 'Macieira de Rates (Igreja)', times: ['07:55'] },
    { name: 'Fontainhas', times: ['08:12'] },
    { name: 'Rates (EB 2,3)', times: ['08:15'] }
    ]
  },
  {
    label: 'Rates → Gueral',
    hasSaturday: false,
    stops: [
    { name: 'Rates (EB 2,3)', times: ['13:15', '16:10', '17:15'] },
    { name: 'Fontainhas', times: ['13:18', '16:13', '17:18'] },
    { name: 'Macieira de Rates (Igreja)', times: ['13:35', '16:30', '17:35'] },
    { name: 'Gueral (Igreja)', times: ['13:45', '16:40', '17:45'] }
    ]
  }
  ]
};
