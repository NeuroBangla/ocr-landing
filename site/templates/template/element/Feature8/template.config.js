import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

import nextImage from '../../../../../assets/next.svg'
import messageImage from '../../../../../assets/message.svg'

export default {
  component,
  templateStr,
  less,
  dataSource: {
    wrapper: {
      className: 'home-page-wrapper feature8-wrapper',
    },
    page: {
      className: 'home-page feature8',
    },
    OverPack: {
      playScale: 0.3,
    },
    titleWrapper: {
      className: 'feature8-title-wrapper',
      children: [
        {
          name: 'title',
          className: 'feature8-title-h1',
          children: 'How to order',
        },
        {
          name: 'content',
          className: 'feature8-title-content',
          children: 'We deliver the system on your premise within 2 weeks',
        },
      ],
    },
    childWrapper: {
      className: 'feature8-button-wrapper',
      children: [
        {
          name: 'button',
          className: 'feature8-button',
          children: {
            href: 'mailto:maifeeulasad@gmail.com',
            children: 'Book a meeting now',
          },          
        },
      ],
    },
    Carousel: {
      dots: false,
      className: 'feature8-carousel',
      wrapper: {
        className: 'feature8-block-wrapper',
      },
      children: {
        className: 'feature8-block',
        titleWrapper: {
          className: 'feature8-carousel-title-wrapper',
          title: {
            className: 'feature8-carousel-title',
          },
        },
        children: [
          {
            name: 'block0',
            className: 'feature8-block-row',
            gutter: 120,
            title: {
              className: 'feature8-carousel-title-block',
              children: 'Process',
            },
            children: [
              {
                className: 'feature8-block-col',
                md: 6,
                xs: 24,
                name: 'child0',
                arrow: {
                  className: 'feature8-block-arrow',
                  children: nextImage,
                },
                children: {
                  className: 'feature8-block-child',
                  children: [
                    {
                      name: 'image',
                      className: 'feature8-block-image',
                      children: messageImage,
                    },
                    {
                      name: 'title',
                      className: 'feature8-block-title',
                      children: 'Book a meeting',
                    },
                    {
                      name: 'content',
                      className: 'feature8-block-content',
                      children: 'This is where we demo, share our thoughts, listen to your feedback and we both try to understand the limitations and possibilities of the project.',
                    },
                  ],
                },
              },
              {
                className: 'feature8-block-col',
                md: 6,
                xs: 24,
                name: 'child1',
                arrow: {
                  className: 'feature8-block-arrow',
                  children: nextImage,
                },
                children: {
                  className: 'feature8-block-child',
                  children: [
                    {
                      name: 'image',
                      className: 'feature8-block-image',
                      children: messageImage,
                    },
                    {
                      name: 'title',
                      className: 'feature8-block-title',
                      children: 'Audit',
                    },
                    {
                      name: 'content',
                      className: 'feature8-block-content',
                      children: 'We audit your infrastructure',
                    },
                  ],
                },
              },
              {
                className: 'feature8-block-col',
                md: 6,
                xs: 24,
                name: 'child2',
                arrow: {
                  className: 'feature8-block-arrow',
                  children: nextImage,
                },
                children: {
                  className: 'feature8-block-child',
                  children: [
                    {
                      name: 'image',
                      className: 'feature8-block-image',
                      children: messageImage,
                    },
                    {
                      name: 'title',
                      className: 'feature8-block-title',
                      children: 'Test',
                    },
                    {
                      name: 'content',
                      className: 'feature8-block-content',
                      children: 'You test the system and get satisfied, this is done in a private cloud environment',
                    },
                  ],
                },
              },
              {
                className: 'feature8-block-col',
                md: 6,
                xs: 24,
                name: 'child3',
                arrow: {
                  className: 'feature8-block-arrow',
                  children: nextImage,
                },
                children: {
                  className: 'feature8-block-child',
                  children: [
                    {
                      name: 'image',
                      className: 'feature8-block-image',
                      children: messageImage,
                    },
                    {
                      name: 'title',
                      className: 'feature8-block-title',
                      children: 'Payment',
                    },
                    {
                      name: 'content',
                      className: 'feature8-block-content',
                      children: 'You pay the invoice and we deliver the system on your premise within 2 weeks',
                    },
                  ],
                },
              },
              {
                className: 'feature8-block-col',
                md: 24,
                xs: 24,
                name: 'child4',
                arrow: {
                  className: 'feature8-block-arrow',
                  children: nextImage,
                },
                children: {
                  className: 'feature8-block-child',
                  children: [
                    {
                      name: 'image',
                      className: 'feature8-block-image',
                      children: messageImage,
                    },
                    {
                      name: 'title',
                      className: 'feature8-block-title',
                      children: 'Support',
                    },
                    {
                      name: 'content',
                      className: 'feature8-block-content',
                      children: '<center>We provide LTS (at least 4 years), in form of security update and periodical new features</center>',
                    },
                  ],
                },
              },
            ],
          },
        ],
      },
    },
  },
};
