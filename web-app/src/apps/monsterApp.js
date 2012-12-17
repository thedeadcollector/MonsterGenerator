/**
 * Created with IntelliJ IDEA.
 * User: Bender
 * Date: 12/6/12
 * Time: 9:44 PM
 * To change this template use File | Settings | File Templates.
 */

$().ready(function () {
    GetContext('MonsterApp').session = new MonsterApp.domain.Session();
    var router = new MonsterApp.router.MonsterAppRouter();
    Backbone.history.start();
});