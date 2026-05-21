export default {
  name: 'Vila Cova EB 1,2,3 – Barcelos, via Creixomil',
  directions: [
  {
    label: 'Barcelos → Vila Cova',
    hasSaturday: false,
    stops: [
    { name: 'Barcelos (Bagoeira)', times: ['07:25'] },
    { name: 'Vila Frescaínha (S. Simão II Igreja)', times: ['07:30'] },
    { name: 'Creixomil (J.F.)', times: ['07:40'] },
    { name: 'Perelhal', times: ['07:45'] },
    { name: 'Perelhal (Pinheiro Seco)', times: ['07:49'] },
    { name: 'Vila Cova (EB 1,2,3)', times: ['07:51'] }
    ]
  },
  {
    label: 'Vila Cova → Barcelos',
    hasSaturday: false,
    stops: [
    { name: 'Vila Cova (EB 1,2,3)', times: ['13:20', '16:35', '17:35'] },
    { name: 'Perelhal (Pinheiro Seco)', times: ['13:22', '16:37', '17:38'] },
    { name: 'Perelhal', times: ['13:25', '16:40', '17:40'] },
    { name: 'Creixomil (J.F.)', times: ['13:29', '16:44', '17:48'] },
    { name: 'Vila Frescaínha (S. Simão II Igreja)', times: ['13:38', '16:53'] },
    { name: 'Barcelos (Bagoeira)', times: ['13:48', '17:03'] },
    { name: 'Barcelos (Central de Camionagem)', times: ['13:55', '17:10'] }
    ]
  }
  ]
};
