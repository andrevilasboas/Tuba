export default {
  name: 'Mariz – Vila Cova EB 1,2,3, via Perelhal',
  directions: [
  {
    label: 'Mariz → Vila Cova',
    hasSaturday: false,
    stops: [
    { name: 'Mariz', times: ['07:55'] },
    { name: 'Perelhal (Alivio)', times: ['08:01'] },
    { name: 'Perelhal (Carvalhos)', times: ['08:07'] },
    { name: 'Vila Cova (EB 1,2,3)', times: ['08:15'] }
    ]
  },
  {
    label: 'Vila Cova → Mariz',
    hasSaturday: false,
    stops: [
    { name: 'Vila Cova (EB 1,2,3)', times: ['13:20', '16:35', '17:35'] },
    { name: 'Perelhal (Carvalhos)', times: ['13:26', '16:41', '17:38'] },
    { name: 'Perelhal (Alivio)', times: ['13:32', '16:47', '17:40'] },
    { name: 'Mariz', times: ['13:40', '16:55', '17:44'] }
    ]
  }
  ]
};
