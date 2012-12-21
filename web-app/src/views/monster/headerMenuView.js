GetContext('MonsterApp.view.monster').HeaderMenuView = Backbone.View.extend({
    tagName: 'span',

    initialize: function() {

        if (!this.constructor.prototype.template) {
            this.constructor.prototype.template = _.template(Gryphon.templates.monster.headerMenuView);
        }
    },

    render: function() {
        this.$el.html('');
        this.$el.html(this.template());
        return this;
    }

})