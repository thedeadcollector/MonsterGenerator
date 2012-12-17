dataSource {
    pooled = true
    driverClassName = "com.microsoft.sqlserver.jdbc.SQLServerDriver"
    dialect = org.hibernate.dialect.SQLServer2008Dialect
}
hibernate {
    cache.use_second_level_cache = true
    cache.use_query_cache = false
    cache.region.factory_class = 'net.sf.ehcache.hibernate.EhCacheRegionFactory'
}
// environment specific settings
environments {
    development {
        dataSource {
//            jdbc:sqlserver://onlinepm4-sql.ident.com\gryphon_dev;database=Gryphon
            url = "jdbc:sqlserver://opdbsql-dev.ident.com\\opddev2;database=GryphonJason"
            username = "GryphonApp"
            password = "letmein"
        }
    }
    test {
        dataSource {
            url = "jdbc:sqlserver://localhost:1433;databaseName=Starfall"
        }
    }
    production {
        dataSource {
            url = "jdbc:sqlserver://localhost:1433;databaseName=Starfall"
            pooled = true
            properties {
               maxActive = -1
               minEvictableIdleTimeMillis=1800000
               timeBetweenEvictionRunsMillis=1800000
               numTestsPerEvictionRun=3
               testOnBorrow=true
               testWhileIdle=true
               testOnReturn=true
               validationQuery="SELECT 1"
            }
        }
    }
}
