import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import logo from './img/Watermark Transparent background.svg';

const myTheme = create({
  base: 'dark', // Основа для темы: 'light' или 'dark'

  colorPrimary: '#404E57', // Пример главного цвета
  colorSecondary: '#DCDCDC', // Пример второстепенного цвета

  // UI
  appBg: '#404E57', // Фон приложения
  appContentBg: '#DCDCDC', // Фон содержимого
  appBorderColor: '#000', // Цвет границы
  appBorderRadius: 4, // Радиус скругления

  barBg: '#404E57', // Фон бара
  barTextColor: '#ffffff', // Цвет текста бара

  // Типографика
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace', // Шрифт для кода

  // Текстовые цвета
  textColor: '#ffffff', // Цвет текста
  textInverseColor: '#000', // Цвет инвертированного текста
  textMutedColor: '#ffffff', // Цвет приглушенного текста

  // Брендинг
  brandTitle: 'CET Storybook', // Название вашего Storybook
  brandUrl: 'https://github.com/Cutting-Edge-technologies', // Ссылка на ваш сайт
  brandImage: logo, // URL логотипа
});


addons.setConfig({
  theme: myTheme,
});
