GetContext('MonsterApp.view.monster').MonsterFilterView = Backbone.View.extend({

    initialize: function() {

        if (!this.constructor.prototype.template) {
            this.constructor.prototype.template = _.template(Gryphon.templates.monster.monsterFilterView);
        }

        this.collection.on('reset', this._collectionReset, this);
        $('head').append('<link rel="stylesheet" href="/MonsterGenerator/static/css/statBlocks.css" type="text/css" />');


    },

    render: function() {
        this.$el.html(this.template());
        return this;
    }

})