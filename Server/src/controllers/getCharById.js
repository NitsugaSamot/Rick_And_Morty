const axios = require('axios')
const URL = 'https://rickandmortyapi.com/api/character'


const getCharById = async(req, res) => {

    try {
        const {id} = req.params
        const {data} = await axios(`${URL}/${id}`)

            if(!data.name) throw Error(`Faltan datod del personaje con ${id}`) 

                const character = {
                   id: data.id,
                   name: data.name,
                   species: data.species,
                   origin: data.origin,
                   image: data.image,
                   gender: data.gender,
                   status: data.status
                }
                return res.status(200).json(character)
            
        }catch (error) {
            return error.message.includes('ID')
            ? res.status(404).send(error.message)
            : res.status(500).send(error.message)
        }
    }

module.exports = {
    getCharById
}












// const axios = require('axios')

// const  getCharById = (res, id) => {
//     const URL = `https://rickandmortyapi.com/api/character`

//     axios(`${URL}/${id}`)
//     .then(response => response.data)
//     .then(({name, gender, species, origin, image, status}) => {
//         const character = {
//             id,
//             name,
//             gender,
//             species,
//             origin,
//             status,
//             image
//         }

//         return res
//                 .writeHead(200, {'Content-type': 'application/json'})// indica el tipo de formato o de dto de mi respuesta, en este caso es application/json
//                 .end(JSON.stringify(character))//lo transformamos a JSON para que la informacion pueda viajar

//     })
//     .catch(error => {
//         return res
//                 .writeHead(500, {'Content-type': 'text/plain'})
//                 .end(error.message)
//     })

// }