import { layers } from '../components/Mapa/locals.json'

export const generateJsonMapa = (listStoreOriginal) => {
    const layerMapa = {
        "id": "Mapa_Movicenter_Locales",
        "name": "Mapa_movicenter_locales",
        "viewBox": "0 0 491 611",
        "layers": generateAssignCategory(listStoreOriginal)
    }
    return layerMapa
}

export const generateAssignCategory = (listStoreOriginal) => {
    let layersMapa = layers
    for(let key in layersMapa){
        
        let categories = []
        layersMapa[key].categories = []

        for(let index in listStoreOriginal){
            
            const store = listStoreOriginal[index]
            const verify = store.mapaIdLocals.find(local => local===layersMapa[key].id.toLowerCase())

            if(verify){
                
                categories.push(store.categoryName)
                layersMapa[key].categories = categories
            }
        }
    }

    return layersMapa
}

export const listLocal = () => {
    
    let locals =  layers.map(local => {
        return { value: local.namelayer, label: local.namelayer }
    })

    locals.sort((a, b) => {
        if(a.label > b.label) return 1;
        if(a.label < b.label) return -1;

        return 0;
    })

    return locals
}