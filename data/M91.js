export default {
  name: 'Bastuço (S. Estevão) – Viatodos EB 2,3, via S. Miguel Carreira',
  directions: [
  {
    label: 'Bastuço → Viatodos',
    hasSaturday: false,
    stops: [
    { name: 'Bastuço (Santo Estevão)', times: ['07:25', '12:40'] },
    { name: 'Sequeade', times: ['07:30', '12:45'] },
    { name: 'S. Miguel Da Carreira (Stª Luzia)', times: ['07:35', '12:50'] },
    { name: 'Fonte Coberta (Igreja)', times: ['07:41', '12:56'] },
    { name: 'Silveiros (EN204)', times: ['07:55', '13:10'] },
    { name: 'Viatodos (EB 2,3)', times: ['08:00', '13:15'] }
    ]
  },
  {
    label: 'Viatodos → Bastuço',
    hasSaturday: false,
    stops: [
    { name: 'Viatodos (EB 2,3)', times: ['13:25', '16:45', '17:45', '18:35'] },
    { name: 'Silveiros (EN204)', times: ['13:29', '16:49', '17:49', '18:39'] },
    { name: 'Fonte Coberta (Igreja)', times: ['13:43', '17:03', '18:03', '18:53'] },
    { name: 'S. Miguel Da Carreira (Stª Luzia)', times: ['13:49', '17:09', '18:09', '18:59'] },
    { name: 'Sequeade', times: ['13:54', '17:14', '18:14', '19:04'] },
    { name: 'Bastuço (Santo Estevão)', times: ['14:00', '17:20', '18:20', '19:10'] }
    ]
  }
  ]
};
