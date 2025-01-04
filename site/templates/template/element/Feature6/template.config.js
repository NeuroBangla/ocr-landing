import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper feature6-wrapper',
    },
    OverPack: {
      className: 'home-page feature6',
      playScale: 0.3,
    },
    Carousel: {
      className: 'feature6-content',
      dots: false,
      wrapper: {
        className: 'feature6-content-wrapper',
      },
      titleWrapper: {
        className: 'feature6-title-wrapper',
        barWrapper: {
          className: 'feature6-title-bar-wrapper',
          children: {
            className: 'feature6-title-bar',
          },
        },
        title: {
          className: 'feature6-title',
        },
      },
      children: [
        {
          title: {
            className: 'feature6-title-text',
            children: 'Insight',
          },
          className: 'feature6-item',
          name: 'block0',
          children: [
            {
              md: 8,
              xs: 24,
              className: 'feature6-number-wrapper',
              name: 'child0',
              number: {
                className: 'feature6-number',
                unit: {
                  className: 'feature6-unit',
                  children: 'Wh',
                },
                toText: true,
                children: '0.4167',
              },
              children: {

                className: 'feature6-text',
                children: 'Per page',
              },
            },
            {
              md: 8,
              xs: 24,
              className: 'feature6-number-wrapper',
              name: 'child1',
              number: {
                className: 'feature6-number',
                unit: {
                  className: 'feature6-unit',
                  children: 'GiB',
                },
                toText: true,
                children: '12',
              },
              children: {
                className: 'feature6-text',
                children: 'VRAM usage',
              },
            },
            {
              md: 8,
              xs: 24,
              className: 'feature6-number-wrapper',
              name: 'child2',
              number: {
                className: 'feature6-number',
                unit: {
                  className: 'feature6-unit',
                  children: 'USD',
                },
                toText: true,
                children: '0.52',
              },
              children: {
                className: 'feature6-text',
                children: 'Per 1000 pages',
              },
            },
          ],
        },
      ],
    },
  },
};
