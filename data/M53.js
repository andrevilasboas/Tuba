export default {
  name: 'Vilar do Monte – Vila Cova EB 1,2,3, via Feitos',
  directions: [
  {
    label: 'Vilar do Monte → Vila Cova',
    hasSaturday: false,
    stops: [
    { name: 'Vilar do Monte (Boa Morte)', times: ['07:40'] },
    { name: 'Feitos', times: ['07:51'] },
    { name: 'Vila Cova (Mereces)', times: ['08:01'] },
    { name: 'Vila Cova (EB 1,2,3)', times: ['08:10'] }
    ]
  },
  {
    label: 'Vila Cova → Vilar do Monte',
    hasSaturday: false,
    stops: [
    { name: 'Vila Cova (EB 1,2,3)', times: ['13:20', '16:35', '17:35'] },
    { name: 'Vila Cova (Mereces)', times: ['13:29', '16:44', '17:59'] },
    { name: 'Feitos', times: ['13:35', '16:59', '18:05'] },
    { name: 'Vilar do Monte (Boa Morte)', times: ['13:44', '16:59', '18:11'] },
    { name: 'Vilar do Monte (X)', times: ['13:50', '17:05', '18:15'] }
    ]
  }
  ]
};
