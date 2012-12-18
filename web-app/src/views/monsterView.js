GetContext('MonsterApp.view').MonsterView = Backbone.View.extend({

    events:{
         'change #monsters':'_onOptionChange'
    },

    initialize: function() {
        this.collection.on('reset', this._collectionReset, this);
    },

    render: function() {
        this.$el.html('');
        return this;
    },

    _collectionReset: function() {
        var self = this;
        self.$el.append(
            '<select id=\'monsters\'></select>' + '<div id=\'info\' style=\'float:right\'></div>'
        );

        this.collection.each(function(model) {
            self.$('#monsters').append(
                '<option value=' + model.get('id') + '>'+model.get('name')+'</option>'
            );
        });
    },

    _onOptionChange:function(model){
        this.$('#info').append(
            model.get('fullText')
        )
    }
});