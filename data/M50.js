export default {
  name: 'Alvarães – Fragoso EB 1,2,3, via Palme e Aldreu',
  directions: [
  {
    label: 'Alvarães → Fragoso',
    hasSaturday: false,
    stops: [
    { name: 'Alvarães (Feira)', times: ['07:30'] },
    { name: 'Alvarães (Xisto)', times: ['07:35'] },
    { name: 'Forjães (S. Roque)', times: ['07:52', '08:34'] },
    { name: 'Palme', times: ['08:02', '08:38'] },
    { name: 'Aldreu', times: ['08:07', '08:41'] },
    { name: 'Fragoso (Igreja)', times: ['08:16', '08:49'] },
    { name: 'Fragoso (Escola - Bouça Grande)', times: ['08:25', '09:00'] }
    ]
  },
  {
    label: 'Fragoso → Alvarães',
    hasSaturday: false,
    stops: [
    { name: 'Fragoso (Escola - Bouça Grande)', times: ['14:15', '16:15', '17:30', '18:00'] },
    { name: 'Fragoso (Igreja)', times: ['14:32', '16:32', '17:45', '18:17'] },
    { name: 'Aldreu', times: ['14:37', '16:37', '17:48', '18:22'] },
    { name: 'Palme', times: ['14:42', '16:42', '17:51', '18:27'] },
    { name: 'Forjães (S. Roque)', times: ['15:00', '17:00', '18:45'] },
    { name: 'Alvarães (Xisto)', times: ['15:20', '17:20', '19:05'] },
    { name: 'Alvarães (Feira)', times: ['15:30', '17:30', '19:15'] }
    ]
  }
  ]
};
