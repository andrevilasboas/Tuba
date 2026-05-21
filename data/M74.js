export default {
  name: 'Balugães – Lijó EB 1,2,3, via Cossourado e Campo',
  directions: [
  {
    label: 'Balugães → Lijó',
    hasSaturday: false,
    stops: [
    { name: 'Balugães', times: ['07:25', '12:30'] },
    { name: 'Cossourado (Souto)', times: ['07:39', '12:44'] },
    { name: 'Campo (Santo Amaro)', times: ['07:49', '12:54'] },
    { name: 'Alvito S. Pedro (Didalvi)', times: ['07:58', '13:03'] },
    { name: 'Lijó (Igreja)', times: ['08:11', '13:16'] },
    { name: 'Lijó (Escola)', times: ['08:15', '13:20'] }
    ]
  },
  {
    label: 'Lijó → Balugães',
    hasSaturday: false,
    stops: [
    { name: 'Lijó (Escola)', times: ['13:20', '16:25', '17:25', '18:30'] },
    { name: 'Lijó (Igreja)', times: ['13:23', '16:28', '17:28', '18:33'] },
    { name: 'Alvito S. Pedro (Didalvi)', times: ['13:35', '16:40', '17:40', '18:45'] },
    { name: 'Campo (Santo Amaro)', times: ['13:43', '16:48', '17:48', '18:53'] },
    { name: 'Cossourado (Souto)', times: ['13:53', '16:58', '17:58', '19:03'] },
    { name: 'Balugães', times: ['14:10', '17:15', '18:15', '19:20'] }
    ]
  }
  ]
};
