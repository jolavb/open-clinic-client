import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('study-components/comment-form', 'Integration | Component | study components/comment form', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{study-components/comment-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#study-components/comment-form}}
      template block text
    {{/study-components/comment-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
