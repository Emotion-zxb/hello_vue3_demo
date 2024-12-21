import { customRef } from "vue";
// 这是我们自己的hooks函数

export function useCustomRef(initialValue: any, delay: any) {
  // customRef：定制的ref
  let timeoutId: any;

  // fruit实现了自定义的ref，延迟修改数据并更新视图
  const fruit = customRef((track, trigger) => {
    return {
      get() {
        track(); // 跟踪，数据发生变化视图发生更新
        return initialValue;
      },
      set(value) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          initialValue = value;
          trigger(); // 触发，让vue知道数据变化了
        }, delay);
      },
    };
  });

  return { fruit };
}