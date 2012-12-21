modules = {
    core {
        resource url:'js/3rdParty/jquery-1.8.3.js'
        resource url: 'js/3rdParty/underscore-min.js'
        resource url: 'js/3rdParty/backbone.js'
        resource url: 'js/3rdParty/jquery.listnav-2.1.js'

    }

    utils {
        dependsOn 'core'
        resource url: 'src/utils/applicationUtils.js'
        resource url: 'src/utils/session.js'
    }

    monsterCore {
        dependsOn 'core, utils'
        resource url:'css/main.css'
        resource url:'css/mobile.css'
        resource url:'css/statBlocks.css'
        resource url:'css/listnav.css'
        resource url:'src/apps/monsterApp.js'
        resource url:'src/domains/monster.js'
        resource url:'src/domains/monsterCollection.js'
        resource url:'src/routers/monsterAppRouter.js'
        resource url:'src/controllers/monsterController.js'
        resource url:'src/views/monster/monsterView.js'
        resource url:'src/views/monster/monsterFilterView.js'
        resource url:'src/views/monster/headerMenuView.js'
    }

    monsterTemplates {
        dependsOn 'utils'
        resource url: 'src/views/monster/monsterView.tpl', attrs: [type: 'js'], bundle: 'bundle_monsterTemplates'
        resource url: 'src/views/monster/monsterFilterView.tpl', attrs: [type: 'js'], bundle: 'bundle_monsterTemplates'
        resource url: 'src/views/monster/headerMenuView.tpl', attrs: [type: 'js'], bundle: 'bundle_monsterTemplates'

    }
}