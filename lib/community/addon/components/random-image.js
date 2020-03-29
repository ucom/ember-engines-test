import Component from '@ember/component';
//import AjaxService from 'ember-ajax/services/ajax';
//import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import Base from 'ember-simple-auth/authenticators/base';


import {
  isAjaxError,
  isNotFoundError,
  isForbiddenError
} from 'ember-ajax/errors';

export default Component.extend({
  a: 'z'
});
