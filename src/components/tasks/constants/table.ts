import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const tableCategories = [
  { icon: faCartShopping, value: 'Task' },
  { icon: faBrain, value: 'Random Thought' },
  { icon: faLightbulb, value: 'Idea' },
  { icon: faQuoteRight, value: 'Quote' }
];

const tableHeaders = {
  active: ['name', 'created', 'category', 'content', 'dates'],
  stats: ['category', 'active', 'archived'],
}

export { tableCategories, tableHeaders };
