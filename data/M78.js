export default {
  name: 'Galegos Santa Maria – Manhente EB 2,3, via Outeiro',
  directions: [
  {
    label: 'Galegos Santa Maria → Manhente',
    hasSaturday: false,
    stops: [
    { name: 'Galegos Santa Maria (Aldeia)', times: ['07:55', '13:00'] },
    { name: 'Galegos Santa Maria (Termas do Eirogo)', times: ['07:57', '13:02'] },
    { name: 'Roriz (Outeiro)', times: ['08:01', '13:06'] },
    { name: 'Galegos Santa Maria (Igreja)', times: ['08:05', '13:10'] },
    { name: 'Manhente (EB 2,3)', times: ['08:10', '13:15'] }
    ]
  },
  {
    label: 'Manhente → Galegos Santa Maria',
    hasSaturday: false,
    stops: [
    { name: 'Manhente (EB 2,3)', times: ['13:25', '17:30'] },
    { name: 'Galegos Santa Maria (Igreja)', times: ['13:29', '17:34'] },
    { name: 'Roriz (Outeiro)', times: ['13:33', '17:38'] },
    { name: 'Galegos Santa Maria (Termas do Eirogo)', times: ['13:37', '17:42'] },
    { name: 'Galegos Santa Maria (Aldeia)', times: ['13:40', '17:45'] }
    ]
  }
  ]
};
