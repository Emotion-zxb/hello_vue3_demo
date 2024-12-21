import { ref } from 'vue';

export function useFetch(url:any) {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(true);

  fetch(url)
    .then(response => response.json())
    .then(result => {
      data.value = result;
      loading.value = false;
    })
    .catch(err => {
      error.value = err;
      loading.value = false;
    });

  return { data, error, loading };
}
