export default {
  name: 'Midões – Viatodos EB 2,3, via Silveiros e Monte Fralães',
  directions: [
  {
    label: 'Midões → Viatodos',
    hasSaturday: false,
    stops: [
    { name: 'Midões (Junta Freguesia)', times: ['07:30', '12:35'] },
    { name: 'Rio Covo Santa Eulália (Igreja)', times: ['07:35', '12:40'] },
    { name: 'Silveiros (Igreja)', times: ['07:46', '12:51'] },
    { name: 'Monte de Fralães', times: ['07:56', '13:01'] },
    { name: 'Viatodos (EB 2,3)', times: ['08:00', '13:05'] }
    ]
  },
  {
    label: 'Viatodos → Midões',
    hasSaturday: false,
    stops: [
    { name: 'Viatodos (Esc. EB 2,3)', times: ['13:25', '16:45', '17:45', '18:30'] },
    { name: 'Monte de Fralães', times: ['13:27', '16:47', '17:47', '18:32'] },
    { name: 'Silveiros (Igreja)', times: ['13:38', '16:58', '17:58', '18:43'] },
    { name: 'Rio Côvo Santa Eulália', times: ['13:45', '17:05', '18:05', '18:50'] },
    { name: 'Midões (Junta Freguesia)', times: ['13:55', '17:15', '18:15', '19:00'] }
    ]
  }
  ]
};
