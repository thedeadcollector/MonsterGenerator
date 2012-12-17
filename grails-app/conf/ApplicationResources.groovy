modules = {
    core {
        resource url:'js/3rdParty/jquery-1.8.3.js'
        resource url: 'js/3rdParty/underscore-min.js'
        resource url: 'js/3rdParty/backbone.js'

    }

    utils {
        resource url: 'src/utils/applicationUtils.js'
        resource url: 'src/utils/session.js'
    }

    monsterCore {
        dependsOn 'core, utils'
        resource url:'src/apps/monsterApp.js'
        resource url:'src/domains/monster.js'
        resource url:'src/domains/monsterCollection.js'
        resource url:'src/routers/monsterAppRouter.js'
        resource url:'src/controllers/monsterController.js'
        resource url:'src/views/monsterView.js'
    }
}