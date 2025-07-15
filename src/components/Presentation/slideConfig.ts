// Конфигурация подшагов для каждого слайда
export interface SlideConfig {
  totalSteps: number;
  descriptions?: string[];
}

export const slideConfigs: { [key: number]: SlideConfig } = {
  0: { totalSteps: 1 }, // Slide1 - титульный слайд
  1: { totalSteps: 5 }, // Slide2 - AI, AGI, ASI (заголовок + 3 карточки + заключение)
  2: { totalSteps: 4 }, // Slide3 - сравнение с T9 (заголовок + таблица карточек + заключение + пример)
  3: { totalSteps: 1 }, // Slide4 - предсказание токенов
  4: { totalSteps: 4 }, // Slide5 - AI как технология (заголовок + тезис + список + изображение)
  5: { totalSteps: 4 }, // Slide6 - эксперимент (заголовок + описание + изображение + таблица)
  6: { totalSteps: 4 }, // Slide8 - применение (заголовок + инструмент1 + инструмент2 + заключение)
  7: { totalSteps: 3 }, // Slide7 - практические примеры (заголовок + 2 карточки)
  8: { totalSteps: 6 }, // Slide10 - выводы (заголовок + 4 пункта + emoji + вопросы)
};

export const getTotalSteps = (slideIndex: number): number => {
  return slideConfigs[slideIndex]?.totalSteps || 1;
};