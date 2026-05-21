export default {
  name: 'Roriz – Lijó EB 1,2,3, via Leiroinha',
  directions: [
  {
    label: 'Roriz → Lijó',
    hasSaturday: false,
    stops: [
    { name: 'Roriz (Cemitério)', times: ['07:33', '12:40'] },
    { name: 'Roriz (Leiroinha)', times: ['07:37', '12:44'] },
    { name: 'Lijó (Monte)', times: ['07:48', '12:56'] },
    { name: 'Lijó (EB 1,2,3)', times: ['07:51', '13:00'] }
    ]
  },
  {
    label: 'Lijó → Roriz',
    hasSaturday: false,
    stops: [
    { name: 'Lijó (EB 1,2,3)', times: ['13:25', '16:25', '17:45', '18:20'] },
    { name: 'Lijó (Monte)', times: ['13:29', '16:28', '17:49', '18:23'] },
    { name: 'Roriz (Leiroinha)', times: ['13:44', '16:40', '18:05', '18:35'] },
    { name: 'Roriz (Cemitério)', times: ['13:50', '16:45', '18:40', '18:58'] }
    ]
  }
  ]
};
