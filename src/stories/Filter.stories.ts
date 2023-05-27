/* eslint-disable import/no-extraneous-dependencies */
import type { Meta, StoryObj } from '@storybook/vue3';
import Filter from '../components/Filter.vue';
import { csFilterSelectorMap, csFilterInputFormat } from '../components/filterSelectorMap';

const meta: Meta<typeof Filter> = {
  title: 'UI/Filter',
  component: Filter,
  tags: ['autodocs'],
  decorators: [() => ({ template: '<div style="margin: 2em"><story /></div>'})],
  argTypes: {
    dropdownOption: {
      description: "The data source for selector's dropdown option. Get data from Api.",
      control: 'object',
    },
    filterDefaultValue: {
      control: 'object',
      description: 'To set default filter condition. You may use it in `change log` page.',
    },
    filterSelector: {
      control: 'object',
      description: 'To set filter selectors. Get data from your local ts file.',
    },
    filterFormatMap: {
      control: 'object',
      description:
        "To set selector's data type: text, calendar, dropdown. Get data from your local ts file.",
    },
    filterRangePickerFormat: {
      description: 'Range picker display type.',
      options: ['MMM/DD/YYYY', 'YYYY/MM/DD'],
      control: { type: 'select' },
    },
    onFilterChange: {
      description:
        'Event name is `filterChange`. The function would be trigger when pressing "Enter" or input blurred.',
      action: 'filterChange',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Filter>;

export const filter: Story = {
  args: {
    dropdownOption: [
      {
        field: 'city',
        options: ['New York', 'Paris', 'San Francisco', 'Taipei', 'Tokyo', 'Vienna'],
      },
      {
        field: 'type',
        options: ['hotel', 'hostel', 'Villa'],
      },
      {
        field: "people's comment",
        options: ['acceptable', 'good', 'excellent'],
      },
    ],
    filterDefaultValue: [
      {
        field: 'host name',
        mode: 'contain',
        value: 'happy hotel',
      },
    ],
    filterSelector: csFilterSelectorMap,
    filterSelectorFormat: csFilterInputFormat,
  },
};
