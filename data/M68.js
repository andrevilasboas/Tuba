export default {
  name: 'Barcelos – Alvito S. Pedro (Didálvi), via Vila Boa e Lijó',
  directions: [
  {
    label: 'Barcelos → Alvito S. Pedro',
    hasSaturday: false,
    stops: [
    { name: 'Barcelos (Central de Camionagem)', times: ['08:20'] },
    { name: 'Vila Boa (Faial)', times: ['08:33'] },
    { name: 'Silva', times: ['08:35'] },
    { name: 'Lijó (Igreja)', times: ['08:40'] },
    { name: 'Alvito S. Martinho (Igreja)', times: ['08:47'] },
    { name: 'Alvito S. Pedro (Didalvi)', times: ['08:50'] }
    ]
  },
  {
    label: 'Alvito S. Pedro → Barcelos',
    hasSaturday: false,
    stops: [
    { name: 'Alvito S. Pedro (Didalvi)', times: ['16:45'] },
    { name: 'Alvito S. Martinho (Igreja)', times: ['16:48'] },
    { name: 'Lijó (Igreja)', times: ['16:56'] },
    { name: 'Silva', times: ['17:01'] },
    { name: 'Vila Boa (Faial)', times: ['17:03'] },
    { name: 'Barcelos (Central de Camionagem)', times: ['17:13'] }
    ]
  }
  ]
};
