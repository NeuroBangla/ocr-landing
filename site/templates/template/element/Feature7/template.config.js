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
                children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/message.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Data Sovereignty',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Neuro Bangla OCR provides enterprise-grade AI while ensuring your data remains fully under your control, meeting GDPR standards.',
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
                children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/message.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Fast & Secure Processing',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Efficiently processes documents while safeguarding data privacy and confidentiality.',
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
                children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/message.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Cost Efficiency',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Reduce cloud dependency and operational costs, while retaining control over sensitive information.',
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
                children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/message.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Energy-Efficient Operation',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Runs sustainably at just 45 cents per 1,000 pages, supporting eco-conscious data processing.',
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
                children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/message.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Scalable & Compliant',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Built to scale with your business while upholding core privacy and compliance principles.',
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
                children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/message.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Privacy by Design',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Engineered with privacy-first architecture to safeguard user data against unauthorized access.',
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
                children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/message.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Demo Availability',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Access a working demo to evaluate the system\'s efficiency and data handling approach.',
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
                children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/message.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Trustworthy AI',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Delivers reliable AI that respects privacy, promotes transparency, and complies with GDPR best practices.',
              },
            ],
          },
        },
        {
          md: 6,
          xs: 24,
          name: 'block8',
          className: 'feature7-block',
          children: {
            className: 'feature7-block-group',
            children: [
              {
                name: 'image',
                className: 'feature7-block-image',
                children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/message.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'End-to-End Security',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Implements robust encryption and access controls to ensure data confidentiality and integrity throughout the processing lifecycle.',
              },
            ],
          },
        },
        {
          md: 6,
          xs: 24,
          name: 'block9',
          className: 'feature7-block',
          children: {
            className: 'feature7-block-group',
            children: [
              {
                name: 'image',
                className: 'feature7-block-image',
                children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/message.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Modern Tooling',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Leverages up-to-date open-source libraries and frameworks, ensuring security patches and privacy enhancements are always in place.',
              },
            ],
          },
        },
        {
          md: 6,
          xs: 24,
          name: 'block10',
          className: 'feature7-block',
          children: {
            className: 'feature7-block-group',
            children: [
              {
                name: 'image',
                className: 'feature7-block-image',
                children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/message.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Docker & Kubernetes',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Supports scalable deployments using Docker and Kubernetes while keeping data workflows isolated and compliant.',
              },
            ],
          },
        },
        {
          md: 6,
          xs: 24,
          name: 'block11',
          className: 'feature7-block',
          children: {
            className: 'feature7-block-group',
            children: [
              {
                name: 'image',
                className: 'feature7-block-image',
                children: 'https://raw.githubusercontent.com/NeuroBangla/ocr-landing/refs/heads/main/assets/message.svg',
              },
              {
                name: 'title',
                className: 'feature7-block-title',
                children: 'Podman Compatibility',
              },
              {
                name: 'content',
                className: 'feature7-block-content',
                children: 'Fully compatible with Podman for rootless, secure containerization—ideal for GDPR-aligned edge or local deployments.',
              },
            ],
          },
        }        
      ],          
    },
  },
};
