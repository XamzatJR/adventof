import { computed } from 'vue';
export const useItemComparison = (first, second) => {
  const result = computed(() => {
    if (!first.value || !second.value) {
      return null;
    }
    if (first.value?.id === second.value?.id) {
      return 'These are the same items';
    }
    if (first.value.price > second.value.price) {
      let x = Math.round(first.value.price / second.value.price);
      return `You can get ${x}x ${second.value.title} for about the same price as a single ${first.value.title}`;
    } else {
      let x = Math.round(first.value.price / second.value.price);
      return `You can get ${x}x ${second.value.title} for about the same price as a single ${first.value.title}`;
    }
  });

  return { first, second, result };
};
