GetContext('MonsterApp.view.monster').MonsterFilterView = Backbone.View.extend({

    _filterListEnum: undefined,

    initialize: function() {

        if (!this.constructor.prototype.template) {
            this.constructor.prototype.template = _.template(Gryphon.templates.monster.monsterFilterView);
        }

        this._filterListEnum ={
            'CR': 'Challenge Rating',
            'name': 'Name',
            'environment':'Environment'
        }

        this.collection.on('reset', this._collectionReset, this);
    },

    render: function() {
        this.$el.html('');
        this.$el.html(this.template());
        this._fillFilterOptions();

        return this;
    },

    _collectionReset: function() {
        var self = this;
    },

    _fillFilterOptions: function() {
        var self = this;

        _.each(this._filterListEnum, function(value,key) {
            self.$('#filters').append(
                '<option value=' + key + '>'+value+'</option>'
            );
        });
    }
})