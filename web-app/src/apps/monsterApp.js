/**
 * Created with IntelliJ IDEA.
 * User: Bender
 * Date: 12/6/12
 * Time: 9:44 PM
 * To change this template use File | Settings | File Templates.
 */
MonsterApp = {}
MonsterApp.domain = {}

if (typeof jQuery !== 'undefined') {
    (function($) {
        $().ready(function () {
            var m = new MonsterApp.domain.MonsterCollection();
            m.fetch({},{
                success: function(){
                    m.each(function(monster){
                        $('body').append(monster.get('name'));
                    })

                }
            });
        });
    })(jQuery);
}
