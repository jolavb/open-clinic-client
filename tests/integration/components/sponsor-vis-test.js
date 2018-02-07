import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sponsor-vis', 'Integration | Component | sponsor vis', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sponsor-vis}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sponsor-vis}}
      template block text
    {{/sponsor-vis}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
