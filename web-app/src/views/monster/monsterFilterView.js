GetContext('MonsterApp.view.monster').MonsterFilterView = Backbone.View.extend({

    _filterListEnum: undefined,

    events:{
        'change #filters':'_onFilterOptionChange'
    },

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

        this.collection.each(function(model) {
            self.$('#filteredList').append(
                '<li value=' + model.get('id') + '>'+model.get('name')+'</li>'
            );
        });
    },

    _fillFilterOptions: function() {
        var self = this;

        _.each(this._filterListEnum, function(value,key) {
            self.$('#filters').append(
                '<option value=' + key + '>'+value+'</option>'
            );
        });
    },

    _onFilterOptionChange:function(){
        var self = this;

        var filter = undefined;
        $("select option:selected").each(function () {

            filter = $(this).text();
        });

        this._createListNav(filter);
    },

    _createListNav: function(filter){

        switch(filter){

            case this._filterListEnum.CR:
                break;
            case this._filterListEnum.name:
                break;
            case this._filterListEnum.environment:
                break;
        }
        self.$('#filteredList').listnav();

    }

})