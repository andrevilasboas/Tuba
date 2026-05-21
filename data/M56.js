export default {
  name: 'Barcelos – Abade de Neiva ETG, via Vila Boa',
  directions: [
  {
    label: 'Barcelos → Abade de Neiva ETG',
    hasSaturday: false,
    stops: [
    { name: 'Barcelos (Esc. Alcaides de Faria)', times: ['08:30', '08:35', '08:50', '11:47'] },
    { name: 'Faial', times: ['08:34', '08:39', '08:54', '11:52'] },
    { name: 'Abade de Neiva', times: ['08:37', '08:42', '08:57', '11:57'] },
    { name: 'Abade de Neiva (E.T.G.)', times: ['08:40', '08:45', '09:00', '12:00'] }
    ]
  },
  {
    label: 'Abade de Neiva ETG → Barcelos',
    hasSaturday: false,
    stops: [
    { name: 'Abade De Neiva (E.T.G.)', times: ['16:50', '16:55', '17:00'] },
    { name: 'Abade de Neiva', times: ['16:52', '16:57', '17:02'] },
    { name: 'Faial', times: ['16:54', '17:04', '17:59'] },
    { name: 'Barcelos (Esc. Alcaides de Faria)', times: ['16:57', '17:02', '17:07'] },
    { name: 'Barcelos (Bagoeira)', times: ['17:00', '17:05', '17:10'] }
    ]
  }
  ]
};
