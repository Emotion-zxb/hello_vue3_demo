import { defineStore } from "pinia";
import { reactive } from "vue";

// export const useLoveStore = defineStore("love", {
//   state: () => ({
//     arr: [
//         {
//             id: 1,
//             message: '土味情话'
//         }
//     ],
//   }),
// });

export const useLoveStore = defineStore("love", () => {
  const arr = reactive([
    {
      id: 1,
      message: "土味情话",
    },
  ]);

  return {
    arr,
  };
});
