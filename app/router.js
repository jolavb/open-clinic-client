import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('sign-up');
  this.route('sign-in');
  this.route('change-password');
  this.route('users');
  this.route('studies');
  this.route('study', {path: '/study/:study_id'});
  this.route('u-sponsors', {path: '/sponsors'});
  // this.route('u-sponsor', {path: '/u-sponsor/:u-sponsor_id'});
  // this.route('usponsor-studies', {path: '/sponsors/:usponsor'});
  this.route('u-sponsor', {path: '/sponsor/:u-sponsor_id'});
  this.route('analysis');
});

export default Router;
