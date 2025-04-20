import component from './index';

import less from '!raw-loader!./index.less';
import templateStr from '!raw-loader!./index';

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
          children: 'How to integrate to your system?',
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
            href: 'mailto:contact@neurobangla.com?subject=Neuro Bangla OCR | Query',
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
                  children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/next.svg',
                },
                children: {
                  className: 'feature8-block-child',
                  children: [
                    {
                      name: 'image',
                      className: 'feature8-block-image',
                      children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/message.svg',
                    },
                    {
                      name: 'title',
                      className: 'feature8-block-title',
                      children: 'Schedule a Meeting',
                    },
                    {
                      name: 'content-center',
                      className: 'feature8-block-content',
                      children: 'We showcase a live demo, gather your input, and collaboratively explore the project’s vision, potential, and scope.',
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
                  children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/next.svg',
                },
                children: {
                  className: 'feature8-block-child',
                  children: [
                    {
                      name: 'image',
                      className: 'feature8-block-image',
                      children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/message.svg',
                    },
                    {
                      name: 'title',
                      className: 'feature8-block-title',
                      children: 'Infrastructure Assessment',
                    },
                    {
                      name: 'content-center',
                      className: 'feature8-block-content',
                      children: 'We conduct a detailed audit of your infrastructure to ensure compatibility, performance, and compliance.',
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
                  children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/next.svg',
                },
                children: {
                  className: 'feature8-block-child',
                  children: [
                    {
                      name: 'image',
                      className: 'feature8-block-image',
                      children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/message.svg',
                    },
                    {
                      name: 'title',
                      className: 'feature8-block-title',
                      children: 'Private Testing',
                    },
                    {
                      name: 'content-center',
                      className: 'feature8-block-content',
                      children: 'You evaluate the system in a secure private cloud setup, ensuring it meets your expectations before going live.',
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
                  children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/next.svg',
                },
                children: {
                  className: 'feature8-block-child',
                  children: [
                    {
                      name: 'image',
                      className: 'feature8-block-image',
                      children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/message.svg',
                    },
                    {
                      name: 'title',
                      className: 'feature8-block-title',
                      children: 'Finalize & Deploy',
                    },
                    {
                      name: 'content-center',
                      className: 'feature8-block-content',
                      children: 'Upon payment, we complete deployment on your premises within two weeks—efficient, secure, and seamless.',
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
                  children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/next.svg',
                },
                children: {
                  className: 'feature8-block-child',
                  children: [
                    {
                      name: 'image',
                      className: 'feature8-block-image',
                      children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/message.svg',
                    },
                    {
                      name: 'title',
                      className: 'feature8-block-title',
                      children: 'Long-Term Support',
                    },
                    {
                      name: 'content-center',
                      className: 'feature8-block-content',
                      children: '<center>We offer long-term support (minimum 4 years), including security updates and feature enhancements on a regular basis.</center>',
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
