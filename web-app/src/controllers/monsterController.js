GetContext('MonsterApp.controller').MonsterController = Backbone.Model.extend({
    _headerView: undefined,

    initialize: function() {
    },

    displayMonsters: function() {
        this._displayHeaderView();
        $('body').empty();
        var view = new MonsterApp.view.monster.MonsterView({collection: MonsterApp.session.get('monsterCollection')});
        $('body').append(view.render().el);
    },

    displayMonsterFilters: function() {
        $('body').empty();
        var view = new MonsterApp.view.monster.MonsterFilterView({collection: MonsterApp.session.get('monsterCollection')});
        $('body').append(view.render().el);
    },
    monsterSelected: function() {
        Backbone.history.navigate('info');
    },

    _displayHeaderView: function() {
        if (this._headerView === undefined) {
            //create and display headerView
        }
    }
});