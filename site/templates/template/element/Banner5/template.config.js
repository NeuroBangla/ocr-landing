import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper banner5',
    },
    page: {
      className: 'home-page banner5-page',
    },
    childWrapper: {
      className: 'banner5-title-wrapper',
      children: [
        {
          name: 'title',
          children: 'Neuro Bangla OCR',
          className: 'banner5-title',
        },
        {
          name: 'explain',
          className: 'banner5-explain',
          children: 'Self hosted OCR for enterprise',
        },
        {
          name: 'content',
          className: 'banner5-content',
          children: 'In a world where giants harvest your data, we stand for your privacy.',
        },
        {
          name: 'button',
          className: 'banner5-button-wrapper',
          children: {
            className: 'banner5-button',
            type: 'primary',
            children: 'Contact Us',
            href:"mailto:maifeeulasad@gmail.com",
            target:"_blank"
          },
        },
      ],
    },
    image: {
      className: 'banner5-image',
      children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/background.png',
    },
  },
};
