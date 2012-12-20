GetContext('MonsterApp.router').MonsterAppRouter = Backbone.Router.extend({

    routes: {
        '': '_home',
        'home': '_home',
        'info': '_info',
        'filters':'_filters'
    },

    _home: function(){
        var controller = new MonsterApp.controller.MonsterController();
        this._fetchMonsters();
        controller.displayMonsters();
    },

    _info: function() {
        console.log('show info');
    },

    _filters:function(){
        var controller = new MonsterApp.controller.MonsterController();
        this._fetchMonsters();
        controller.displayMonsterFilters();

    },

    _fetchMonsters: function() {
        var collection = new MonsterApp.domain.MonsterCollection();
        MonsterApp.session.set({monsterCollection: collection});
        collection.fetch();
    }
});