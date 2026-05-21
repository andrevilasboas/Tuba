export default {
  name: 'Balugães – Fragoso EB 1,2,3, via Durrães e Tregosa',
  directions: [
  {
    label: 'Balugães → Fragoso',
    hasSaturday: false,
    stops: [
    { name: 'Balugães', times: ['07:30'] },
    { name: 'Balugães (Aparecida)', times: ['07:41'] },
    { name: 'Durrães (Souto)', times: ['07:51'] },
    { name: 'Tregosa (Cabine)', times: ['08:01'] },
    { name: 'Tregosa (Alvas)', times: ['08:09'] },
    { name: 'Fragoso (EB 1,2,3)', times: ['08:25'] }
    ]
  },
  {
    label: 'Fragoso → Balugães',
    hasSaturday: false,
    stops: [
    { name: 'Fragoso (EB 1,2,3)', times: ['14:30', '16:15', '18:15'] },
    { name: 'Tregosa (Alvas)', times: ['16:31', '18:31', '18:46'] },
    { name: 'Tregosa (Cabine)', times: ['14:53', '16:38', '18:38'] },
    { name: 'Durrães (Souto)', times: ['15:03', '16:48', '18:48'] },
    { name: 'Balugães (Aparecida)', times: ['15:14', '16:59', '18:59'] },
    { name: 'Balugães', times: ['15:25', '17:10', '19:10'] }
    ]
  }
  ]
};
