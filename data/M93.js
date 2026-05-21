export default {
  name: 'S. Miguel Carreira – Viatodos EB 2,3, via Cambeses e Nine',
  directions: [
  {
    label: 'S. Miguel Carreira → Viatodos',
    hasSaturday: false,
    stops: [
    { name: 'São Miguel Carreira (Parolo)', times: ['07:30', '12:30'] },
    { name: 'Carreira (Sta. Luzia)', times: ['07:43', '12:43'] },
    { name: 'Cambeses (Igreja)', times: ['07:49', '12:49'] },
    { name: 'Cambeses (Couto)', times: ['07:50', '12:50'] },
    { name: 'Nine (Estação CP)', times: ['08:03', '13:03'] },
    { name: 'Viatodos (Monte da Feira)', times: ['08:09', '13:09'] },
    { name: 'Viatodos (EB 2,3)', times: ['08:10', '13:10'] }
    ]
  },
  {
    label: 'Viatodos → S. Miguel Carreira',
    hasSaturday: false,
    stops: [
    { name: 'Viatodos (EB 2,3)', times: ['13:25', '16:45', '17:45', '18:30'] },
    { name: 'Viatodos (Monte da Feira)', times: ['13:26', '16:46', '17:46', '18:31'] },
    { name: 'Nine (Estação CP)', times: ['13:32', '16:52', '17:52', '18:37'] },
    { name: 'Cambeses (Couto)', times: ['13:45', '17:05', '18:05', '18:50'] },
    { name: 'Cambeses (Igreja)', times: ['13:46', '17:06', '18:06', '18:51'] },
    { name: 'Carreira (Sta. Luzia)', times: ['13:52', '17:12', '18:12', '18:57'] },
    { name: 'São Miguel Carreira (Parolo)', times: ['14:05', '17:25', '18:25', '19:10'] }
    ]
  }
  ]
};
