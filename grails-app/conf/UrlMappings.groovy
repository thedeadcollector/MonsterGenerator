class UrlMappings {

	static mappings = {
		"/$controller/$action?/$id?"{
			constraints {
				// apply constraints here
			}
		}

        "/monster"{
          controller = 'monster'
            action = [GET:'index', POST:'save']
        }

        "/monster/$id"{
            controller = 'monster'
            action = [GET:'show', PUT:'update', DELETE:'delete']
        }


        "/"(view:"/index")
		"500"(view:'/error')
	}
}
