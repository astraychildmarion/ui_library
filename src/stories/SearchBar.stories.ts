import Search from '../components/SearchBar.vue';
import type { Meta, StoryObj } from '@storybook/vue3';

const meta = {
  title: 'UI/SearchBar',
  component: Search,
  tags: ['autodocs'],
  argTypes: {
    onSearchBarEnter: {
      action: 'searchBarEnter',
      description:
        "Event name is `searchBarEnter`. This event would be triggered when press Enter. Throw back input's value.",
    },
    onSearchBarChange: {
      action: 'searchBarChange',
      description:
        "Event name is `searchBarChange`. This event would be triggered when input value change. Throw back input's value.",
    },
    onClickSearchbarMenu: {
      action: 'clickSearchbarMenu',
      description:
        "Event name is `clickSearchbarMenu`. Click searchbar's history menu and throwback menu's value.",
    },
    placeholder: {
      type: 'string',
      description: 'Placeholder default is `Search on server list`.',
    },
    searchHistory: {
      control: 'object',
      description: "Search history's value",
    },
    defaultValue: {
      type: 'string',
      description: 'To set default value to input.',
    },
  },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SearchBar: Story = {
  args: {
    searchHistory: ['ip', 'virtual', 'status'],
  }
};
