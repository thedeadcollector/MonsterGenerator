package monstergenerator

class Monster {
    String name
    String environment
    String fullText
    Float challengeRating
    String type
    String subType

    static constraints = {
    }

    static mapping = {
        version false
        sort 'name'

        table 'Monsters'
        id column: 'Id'
        name column: 'Name'
        environment column: 'Environment'
        fullText column: 'FullText'
        challengeRating column: 'CR'
        type column: 'Type'
        subType column: 'SubType'

    }
}
