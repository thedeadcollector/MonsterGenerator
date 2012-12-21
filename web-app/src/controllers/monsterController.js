GetContext('MonsterApp.controller').MonsterController = Backbone.Model.extend({
    _headerView: undefined,
    _mainView: undefined,

    initialize: function() {
    },

    displayMonsters: function() {
        $('body').empty();
        this._displayHeaderView();
        this._mainView = new MonsterApp.view.monster.MonsterView({collection: MonsterApp.session.get('monsterCollection')});
        $('body').append(this._mainView.render().el);
    },

    displayMonsterFilters: function() {
        $('body').empty();
        this._displayHeaderView();
        this._mainView = new MonsterApp.view.monster.MonsterFilterView({collection: MonsterApp.session.get('monsterCollection')});
        $('body').append(this._mainView.render().el);
    },
    monsterSelected: function() {
        Backbone.history.navigate('info');
    },

    _displayHeaderView: function() {
        if (this._headerView === undefined) {
            this._headerView = new MonsterApp.view.monster.HeaderMenuView();
        }

        $('body').append(this._headerView.render().el);
    }
});