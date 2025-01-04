/* eslint-disable no-console */
import { takeEvery, put } from '@redux-saga/core/effects';

import { GET_USER_DATA, POST_TYPE, CREATE_NEW_TEMPLATE, SET_TEMPLATE_DATA, CHANGE_CHILD, SET_USER_AND_TEMPLATE_DATA, UPDATE_HISTORY } from './actionTypes';
import * as actions from './actions';

import { DEFAULT_USER_NAME } from '../constants';
import { saveTemplateToLocalStorage, newTemplate } from '../utils';
import { deepCopy, setDataSourceValue } from '../../utils';
import defaultData from '../defaultTemplate';

function* handleGetUserData(action) {
  const previewId = "tuying";
  yield put({
    type: POST_TYPE.POST_SUCCESS,
    templateData: {
      id: previewId,
      attributes: defaultData[previewId],
    },
  });
  return;
}

function* handleCreateNewTemplate(action) {
  const { data } = action;
  try {
    const template = yield newTemplate(DEFAULT_USER_NAME, data);
    yield put({
      type: POST_TYPE.POST_SUCCESS,
      templateData: template,
    });
    yield put({
      type: UPDATE_HISTORY,
      data: template,
    });
  } catch (error) {
    console.error(error);
  }
}

function* handleSetTemplateData(action) {
  const { data: { uid: id, data: attributes, noHistory } } = action;
  const data = { id, attributes, noHistory };
  saveTemplateToLocalStorage(DEFAULT_USER_NAME, data);

  yield put({
    type: POST_TYPE.SET_TEMPLATE,
    data: attributes,
  });

  yield put({
    type: UPDATE_HISTORY,
    data,
  });
}

function* handleChangeChild(action) {
  const { data: { templateData, ids, currentData } } = action;
  const newTemplateData = deepCopy(templateData);
  setDataSourceValue(ids, 'children', currentData.children, newTemplateData.data.config);
  yield put(actions.setTemplateData(newTemplateData));
}

function* handleSetUserAndTemplateData(action) {
  const { data } = action;
  const d = {
    id: data.templateData.uid,
    attributes: data.templateData.data,
  };
  saveTemplateToLocalStorage(DEFAULT_USER_NAME, d);

  yield put({
    type: POST_TYPE.SET_USERTEMPLATE,
    data,
  });
  yield put({
    type: UPDATE_HISTORY,
    data: d,
  });
}

function* handleUpdateHistory(action) {
  const { data: template } = action;
  const { noHistory } = template;
  if (!noHistory) {
    delete template.noHistory;
    yield put(actions.updateHistoryReNum(template));
  }
}

export default function* () {
  yield takeEvery(GET_USER_DATA, handleGetUserData);
  yield takeEvery(CREATE_NEW_TEMPLATE, handleCreateNewTemplate);
  yield takeEvery(SET_TEMPLATE_DATA, handleSetTemplateData);
  yield takeEvery(CHANGE_CHILD, handleChangeChild);
  yield takeEvery(SET_USER_AND_TEMPLATE_DATA, handleSetUserAndTemplateData);
  yield takeEvery(UPDATE_HISTORY, handleUpdateHistory);
}
