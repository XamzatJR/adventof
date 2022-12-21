import { computed } from 'vue';
export const useItemComparison = (first, second) => {
  const result = computed(() => {
    if (!first.value || !second.value) {
      return '';
    }

    if (first.value?.id === second.value?.id) {
      return 'These are the same items';
    }

    const [expensive, cheap] = [first.value, second.value].sort((a, b) => b.price - a.price);
    const x = Math.round(expensive.price / cheap.price);

    return `You can get ${x}x ${cheap.title} for about the same price as a single ${expensive.title}`;
  });

  return result;
};
