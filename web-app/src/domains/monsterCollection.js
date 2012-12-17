/**
 * Created with IntelliJ IDEA.
 * User: Bender
 * Date: 12/6/12
 * Time: 10:13 PM
 * To change this template use File | Settings | File Templates.
 */

GetContext('MonsterApp.domain').MonsterCollection = Backbone.Collection.extend({

    url: '/MonsterGenerator/monster'
})