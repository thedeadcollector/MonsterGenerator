package monstergenerator

class Monster {
    String name
    String environment
    String fullText

    static constraints = {
    }

    static mapping = {
        version false

        table 'Monsters'
        id column: 'id'
        name column: 'Name'
        environment column: 'Environment'
        fullText column: 'FullText'

    }
}
