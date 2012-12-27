GetContext('MonsterApp.view.monster').MonsterFilterView = Backbone.View.extend({

    _filterListEnum: undefined,
    _filter1:undefined,
    _filter2:undefined,


    events:{
        'change #filters':'_onFilterOptionChange',
        'click #filteredList':'_onFilteredListClicked',
        'click #filteredList2':'_onFilteredList2Clicked'
    },

    initialize: function() {

        if (!this.constructor.prototype.template) {
            this.constructor.prototype.template = _.template(Gryphon.templates.monster.monsterFilterView);
        }

        this._filterListEnum ={
            'challengeRating': 'Challenge Rating',
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

        this.collection.each(function(model, filter) {
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
        _.each($('#filters option:selected'), function(filter) {

            if(filter!== null)
            {
                self._filter1 = filter.value;
                //self.$('#filteredList-nav').empty();
                self.$('#filteredList').empty();
                self._filterCollection(self._filter1);
                //self.$('#filteredList').listnav();
            }

        });

    },

    _filterCollection: function(filter){
        var self = this;

        this.collection.each(function(model) {
            self.$('#filteredList').append(
                '<option value=' + model.get('id') + '>'+model.get(filter)+'</option>'
            );

        });
    },

    _onFilteredListClicked:function(){
        var self = this;

        var filter = undefined;
        _.each($('#filteredList option:selected'), function(filter) {

            if(filter!== null)
            {
                self.$('#filteredList2').empty();
                self._fillFilteredList2Collection(filter);

            }

        });

        if(this._filter1 === 'name')
        {
            self._displayMonsterInfo();
        }
    },

    _onFilteredList2Clicked: function(){
        var self = this;

        var filter = undefined;
        _.each($('#filteredList2 option:selected'), function(filter) {

            if(filter!== null)
            {
                self._displayMonsterInfo();
            }
        });
    },

    _fillFilteredList2Collection:function(filter){
        var filteredCollection = new Backbone.Collection();

        if(this._filter1 === 'challengeRating')
        {
            filteredCollection = this.collection.where({challengeRating:parseInt(filter.text)})
        }
        else if(this._filter1 === 'environment')
        {
            filteredCollection = this.collection.where({environment:filter.text})
        }

        _.each(filteredCollection, function(model) {
            self.$('#filteredList2').append(
                '<option value=' + model.get('id') + '>'+model.get('name')+'</option>'
            );

        });
    },

    _displayMonsterInfo: function(){
        var self = this;
        var monster = undefined;
        $("select option:selected").each(function () {

            monster = self.collection.get($(this).val())
        });

        self.$('#info').html(monster.get('fullText'));

    }
})