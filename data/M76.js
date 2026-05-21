export default {
  name: 'Couto (Crestes) – Lijó EB 1,2,3, via Campo',
  directions: [
  {
    label: 'Couto → Lijó',
    hasSaturday: false,
    stops: [
    { name: 'Alvito S. Pedro (Didalvi)', times: ['08:35'] },
    { name: 'Couto (Crestes)', times: ['08:40'] },
    { name: 'Campo (Gandara)', times: ['08:45'] },
    { name: 'Lijó (Igreja)', times: ['08:50'] },
    { name: 'Lijó (EB 1,2,3)', times: ['08:55'] }
    ]
  },
  {
    label: 'Lijó → Couto',
    hasSaturday: false,
    stops: [
    { name: 'Lijó (EB 1,2,3)', times: ['17:35'] },
    { name: 'Lijó (Igreja)', times: ['17:40'] },
    { name: 'Campo (Gandara)', times: ['17:45'] },
    { name: 'Couto (Crestes)', times: ['17:50'] },
    { name: 'Alvito S. Pedro (Didalvi)', times: ['17:55'] }
    ]
  }
  ]
};
