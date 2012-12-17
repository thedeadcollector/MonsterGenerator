modules = {
    jQuery{
        resource url:'js/3rdParty/jquery-1.8.3.js'
    }

    underscore{
        resource url: 'js/3rdParty/underscore-min.js'
    }

    core {
        dependsOn 'jQuery, underscore'
        resource url: 'js/3rdParty/backbone.js'

    }

    monsterCore {
        dependsOn 'core'
        resource url:'src/apps/monsterApp.js'
        resource url:'src/domains/monster.js'
        resource url:'src/domains/monsterCollection.js'
    }
}