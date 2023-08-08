const mockTasksData = [
  { id: '0', name: 'Shopping list', archived: true, created: Date.now(), category: 'Task', content: 'Tomatoes, bread' },
  { id: '1', name: 'New Idea', archived: false, created: Date.now(), category: 'Idea', content: 'Learn storybook' },
  { id: '2', name: 'New Feature', archived: false, created: Date.now(), category: 'Task', content: 'I’m gonna have a dentist appointment on the 03/07/2023, I moved it from 05/07/2023' },
  { id: '3', name: 'William Gaddis', archived: false, created: Date.now(), category: 'Quote', content: 'Power doesnt content' },
];
  
const mockStatsData = [
  { id: '0', category: 'Task', active: 1, archived: 1 },
  { id: '1', category: 'Quote', active: 1, archived: 0 },
  { id: '2', category: 'Idea', active: 1, archived: 0 },
  { id: '3', category: 'Random Thought', active: 0, archived: 0 },
];

export { mockTasksData, mockStatsData };