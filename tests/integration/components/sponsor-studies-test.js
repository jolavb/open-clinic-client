import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sponsor-studies', 'Integration | Component | sponsor studies', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{sponsor-studies}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#sponsor-studies}}
      template block text
    {{/sponsor-studies}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
