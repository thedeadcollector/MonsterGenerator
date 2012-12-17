GetContext('MonsterApp.view').MonsterView = Backbone.View.extend({

    initialize: function() {
        this.collection.on('reset', this._collectionReset, this);
    },

    render: function() {
        this.$el.html('');
        this._collectionReset();
        return this;
    },

    _collectionReset: function() {
        var self = this;
        this.collection.each(function(model) {
            self.$el.append(model.get('name') + '<br/>');
        });
    }
});