export default {
  name: 'Barcelos – Lijó EB 1,2,3, via Tamel S. Veríssimo',
  directions: [
  {
    label: 'Barcelos → Lijó',
    hasSaturday: false,
    stops: [
    { name: 'Barcelos (Bagoeira)', times: ['07:45', '12:40'] },
    { name: 'S. Veríssimo', times: ['07:52', '12:47'] },
    { name: 'Cachada (Fábrica)', times: ['08:00', '12:55'] },
    { name: 'Vessadas (X)', times: ['08:06', '13:01'] },
    { name: 'Lijó (Monte)', times: ['08:11', '13:06'] },
    { name: 'Lijo (Escola)', times: ['08:15', '13:10'] }
    ]
  },
  {
    label: 'Lijó → Barcelos',
    hasSaturday: false,
    stops: [
    { name: 'Lijo (Escola)', times: ['13:20', '16:25', '17:25', '18:20'] },
    { name: 'Lijó (Monte)', times: ['13:24', '16:29', '17:29', '18:24'] },
    { name: 'Vessadas (X)', times: ['13:31', '16:36', '17:36', '18:31'] },
    { name: 'Cachada (Fábrica)', times: ['13:38', '16:43', '17:43', '18:38'] },
    { name: 'S. Veríssimo', times: ['13:48', '16:53', '17:53', '18:48'] },
    { name: 'Barcelos (Bagoeira)', times: ['13:55', '17:00', '18:00', '18:55'] }
    ]
  }
  ]
};
