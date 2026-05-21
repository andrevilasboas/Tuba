export default {
  name: 'S. Julião de Freixo – Alvito S. Pedro (Didálvi), via Cossourado e Aguiar',
  directions: [
  {
    label: 'S. Julião de Freixo → Alvito S. Pedro',
    hasSaturday: false,
    stops: [
    { name: 'São Julião de Freixo', times: ['08:00'] },
    { name: 'Balugães', times: ['08:15'] },
    { name: 'Cossourado (Souto)', times: ['08:24'] },
    { name: 'Aguiar (Igreja)', times: ['08:31'] },
    { name: 'Carapeços (Casa de Nazaré)', times: ['08:49'] },
    { name: 'Alvito S. Pedro (Didalvi)', times: ['09:00'] }
    ]
  },
  {
    label: 'Alvito S. Pedro → S. Julião de Freixo',
    hasSaturday: false,
    stops: [
    { name: 'Alvito S. Pedro (Didalvi)', times: ['16:45'] },
    { name: 'Carapeços (Casa de Nazaré)', times: ['16:55'] },
    { name: 'Aguiar (Igreja)', times: ['17:12'] },
    { name: 'Cossourado (Souto)', times: ['17:20'] },
    { name: 'Balugães', times: ['17:30'] },
    { name: 'São Julião de Freixo', times: ['17:45'] }
    ]
  }
  ]
};
