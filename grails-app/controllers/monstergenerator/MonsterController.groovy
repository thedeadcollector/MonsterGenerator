package monstergenerator

import grails.converters.deep.JSON

class MonsterController {

    def index(){
        def list = Monster.findAll()
        def result = []
        list.each {monster ->
            if (monster){
                result.add([id:monster.id,
                        name:monster.name,
                        environment: monster.environment,
                        fullText: monster.fullText,
                        challengeRating: monster.challengeRating,
                        type: monster.type,
                        subType: monster.subType
                ])
            }

        }
        render result as JSON
    }

    def findByEnvironment(){
        def list = Monster.findAllByEnvironmentLike('%hills%')
        def result = []
        list.each {monster ->
            if (monster){
                result.add([id:monster.id,
                        name:monster.name,
                        environment: monster.environment,
                        fullText: monster.fullText
                ])
            }

        }
        render result as JSON
    }

    def save(){
        def monster = new Monster(request.JSON)
        monster.save()
        render monster as JSON
    }

    def show(long id){
        def monster = Monster.get(id)
        render monster as JSON
    }

    def update(long id){
        def monster = Monster.get(id)
        monster.properties = request.JSON
        monster.save()
        render monster as JSON
    }

    def delete(long id){
        def monster = Monster.get(id)
        monster.delete()
        render [:] as JSON
    }

}
