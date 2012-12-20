GetContext('MonsterApp.view.monster').MonsterView = Backbone.View.extend({

    events:{
         'change #monsters':'_onOptionChange'
    },

    initialize: function() {

        if (!this.constructor.prototype.template) {
            this.constructor.prototype.template = _.template(Gryphon.templates.monster.monsterView);
        }

        this.collection.on('reset', this._collectionReset, this);
        $('head').append('<link rel="stylesheet" href="/MonsterGenerator/static/css/statBlocks.css" type="text/css" />');
    },

    render: function() {
        this.$el.html('');
        this.$el.html(this.template());
        return this;
    },

    _collectionReset: function() {
        var self = this;

        this.collection.each(function(model) {
            self.$('#monsters').append(
                '<option value=' + model.get('id') + '>'+model.get('name')+'</option>'
            );
        });
    },

    _onOptionChange:function(){
        var self = this;

        var monster = undefined;
        $("select option:selected").each(function () {

            monster = self.collection.get($(this).val())
        });

        self.$('#info').html(monster.get('fullText'));
    }

});