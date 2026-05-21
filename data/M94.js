export default {
  name: 'Carvalhas – Viatodos EB 2,3, via Chorente e Chavão',
  directions: [
  {
    label: 'Carvalhas → Viatodos',
    hasSaturday: false,
    stops: [
    { name: 'Carvalhas (Igreja)', times: ['07:25', '12:30'] },
    { name: 'Chorente (Igreja)', times: ['07:30', '12:35'] },
    { name: 'Chorente (Sr. dos Passos)', times: ['07:34', '12:39'] },
    { name: 'Chavão (Saramago)', times: ['07:39', '12:44'] },
    { name: 'Chavão (Igreja)', times: ['07:42', '12:47'] },
    { name: 'Grimancelos (Igreja)', times: ['07:47', '12:52'] },
    { name: 'Minhotães (Igreja)', times: ['07:58', '13:03'] },
    { name: 'Viatodos (EB 2,3)', times: ['08:05', '13:10'] }
    ]
  },
  {
    label: 'Viatodos → Carvalhas',
    hasSaturday: false,
    stops: [
    { name: 'Viatodos (EB 2,3)', times: ['13:25', '16:45', '17:45', '18:30'] },
    { name: 'Minhotães (Igreja)', times: ['13:31', '16:51', '17:51', '18:36'] },
    { name: 'Grimancelos (Igreja)', times: ['13:41', '17:01', '18:01', '18:46'] },
    { name: 'Chavão (Igreja)', times: ['13:47', '17:07', '18:07', '18:52'] },
    { name: 'Chavão (Saramago)', times: ['13:45', '17:10', '18:10', '18:55'] },
    { name: 'Chorente (Sr. dos Passos)', times: ['14:55', '17:15', '18:15', '19:00'] },
    { name: 'Chorente (Igreja)', times: ['13:59', '17:19', '18:19', '19:04'] },
    { name: 'Carvalhas (Igreja)', times: ['14:00', '17:25', '18:25', '19:10'] }
    ]
  }
  ]
};
