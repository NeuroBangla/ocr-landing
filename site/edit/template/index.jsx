import React from 'react';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { ConfigProvider } from 'antd';
import enUs from 'antd/es/locale/en_US';

import enLocale from '../en-US';

import Layout from './layout';

import store from '../../shared/redux';
import '../static/style';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    const appLocale = enLocale;

    this.state = {
      appLocale,
    };
  }

  render() {
    const { appLocale } = this.state;
    return (
      <Provider store={store}>
        <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
          <ConfigProvider locale={enUs}>
            <Layout {...this.props} />
          </ConfigProvider>
        </IntlProvider>
      </Provider>
    );
  }
}

export default Edit;
