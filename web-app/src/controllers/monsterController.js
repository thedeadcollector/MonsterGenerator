GetContext('MonsterApp.controller').MonsterController = Backbone.Model.extend({

    initialize: function() {
    },

    displayMonsters: function() {
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
    }
});