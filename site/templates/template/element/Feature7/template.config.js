import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper feature7-wrapper',
    },
    page: {
      className: 'home-page feature7',
    },
    OverPack: {
      playScale: 0.3,
    },
    titleWrapper: {
      className: 'feature7-title-wrapper',
      children: [
        {
          name: 'title',
          className: 'feature7-title-h1',
          children: 'Main Features',
        },
        {
          name: 'content',
          className: 'feature7-title-content',
          children: 'Neuro Bangla OCR is a self-hosted OCR solution that offers a range of benefits for businesses.',
        },
      ],
    },
    blockWrapper: {
      className: 'feature7-block-wrapper',
      gutter: 24,
      children: [
        {
          md: 6,
          xs: 24,
          name: 'block0',
          className: 'feature7-block',
          children: {
            className: 'feature7-block-group',
            children: [
              {
                name: 'image',
                className: 'feature7-block-image',
                children: 'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Data Sovereignty',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Neuro Bangla OCR ensures enterprise-grade AI with complete control over your data.',
              },
            ],
          },
        },
        {
          md: 6,
          xs: 24,
          name: 'block1',
          className: 'feature7-block',
          children: {
            className: 'feature7-block-group',
            children: [
              {
                name: 'image',
                className: 'feature7-block-image',
                children: 'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Fast Processing',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Processes documents quickly without compromising quality.',
              },
            ],
          },
        },
        {
          md: 6,
          xs: 24,
          name: 'block2',
          className: 'feature7-block',
          children: {
            className: 'feature7-block-group',
            children: [
              {
                name: 'image',
                className: 'feature7-block-image',
                children: 'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Cost Efficiency',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Reduces reliance on expensive cloud services for significant cost savings.',
              },
            ],
          },
        },
        {
          md: 6,
          xs: 24,
          name: 'block3',
          className: 'feature7-block',
          children: {
            className: 'feature7-block-group',
            children: [
              {
                name: 'image',
                className: 'feature7-block-image',
                children: 'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Energy Savings',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Operates sustainably, costing just 45 cents per 1,000 pages.',
              },
            ],
          },
        },
        {
          md: 6,
          xs: 24,
          name: 'block4',
          className: 'feature7-block',
          children: {
            className: 'feature7-block-group',
            children: [
              {
                name: 'image',
                className: 'feature7-block-image',
                children: 'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Scalable Solution',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Designed to grow seamlessly with businesses of all sizes.',
              },
            ],
          },
        },
        {
          md: 6,
          xs: 24,
          name: 'block5',
          className: 'feature7-block',
          children: {
            className: 'feature7-block-group',
            children: [
              {
                name: 'image',
                className: 'feature7-block-image',
                children: 'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Privacy Focus',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Dedicated to protecting user privacy against data harvesting.',
              },
            ],
          },
        },
        {
          md: 6,
          xs: 24,
          name: 'block6',
          className: 'feature7-block',
          children: {
            className: 'feature7-block-group',
            children: [
              {
                name: 'image',
                className: 'feature7-block-image',
                children: 'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Demo Availability',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'A ready-to-deploy demo highlights its practical benefits.',
              },
            ],
          },
        },
        {
          md: 6,
          xs: 24,
          name: 'block7',
          className: 'feature7-block',
          children: {
            className: 'feature7-block-group',
            children: [
              {
                name: 'image',
                className: 'feature7-block-image',
                children: 'https://gw.alipayobjects.com/zos/basement_prod/e339fc34-b022-4cde-9607-675ca9e05231.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'AI Value',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Combines efficiency, security, and innovation in enterprise AI solutions.',
              },
            ],
          },
        },
      ],
    },
  },
};
