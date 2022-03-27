import { layers } from '../components/Mapa/locals.json'

export const preFormatStore = (data) => {

	let iEmail = formatArrayEmail(data.iEmail)
	let iTelephone = formatArrayTelephone(data.iTelephone)
	let sCategories = formatArrayCategory(data.sCategories)
	let sLocals = formatArrayLocal(data.sLocals)

	let dataFormat = {
		...data,
		iEmail,
		iTelephone,
		sCategories,
		sLocals
	}
	return dataFormat
}

export const formatSendStore = (data) => {

	return {
		nroLocal: data.sLocals.filter(item => item!=="" && typeof item!=="undefined").join(",").trim(),
		brand: data.brand,
		telephone: data.iTelephone.filter(item => item!=="" && typeof item!=="undefined").join("/").trim(),
		email: data.iEmail.filter(item => item!=="" && typeof item!=="undefined").join(",").trim(),
		description: data.description,
		category: Number(data.sCategories[0]),
		id: data?.id,
		slug: data?.slug,
		status_id: data?.status_id,
		icon_logo: data.icon_logo,
		front_cover: data.front_cover,
		front_cover_mobile: data.front_cover_mobile
	}
}

export const formatSaveStore = (data, categories) => {

	let iEmail = formatFormEmail(data.email.split(","))
	let iTelephone = formatFormTelephone(data.telephone.split("/"))
	let sCategories = formatFormCategories(data.category.toString().split(","))

	const localsFormat = data.nrolocal.split(",").map(local => 
							local.endsWith("_") ? 
								local.substring(0, local.length - 1).replace("_", "-").trim() : 
								local.trim()
							)
	
	let sLocals = formatFormLocal(localsFormat)
	
	const mapaIdLocals = localsFormat.map(local => {
		return layers.find(layer =>layer.namelayer.trim().toLowerCase().includes(local.trim().toLowerCase()))?.id
	})
	
	let locals =  localsFormat.join(", ")
	
	const categoryName = data.category.toString().split(",").map(cat => {
			return categories.find(x => Number(x.value)===Number(cat))?.label
		}).join(",")

	let dataFormat = {
		brand: data.brand,
		description: data.description,
		iEmail,
		iTelephone,
		sCategories,
		sLocals,
		locals,
		id: data?.id,
		slug: data?.slug,
		status_id: data?.status_id,
		front_cover: data.front_cover,
		front_cover_mobile: data.front_cover_mobile,
		icon_logo: data.icon_logo,
		categoryName,
		mapaIdLocals
	}

	return dataFormat
}

export const formatArrayEmail = (email) => {
	let listEmail = []

	for(let index in email){
		let item = email[index]
		if(item.email1!==""){
			listEmail.push(item.email1)
		}
		if(item.email2!==""){
			listEmail.push(item.email2)
		}
		if(item.email3!==""){
			listEmail.push(item.email3)
		}
	}
	return listEmail
}

export const formatArrayTelephone = (iTelephone) => {
	let listTelephone = []

	for(let index in iTelephone){
		let item = iTelephone[index]
		
		if(Object.keys(item).length===3){
			if(item.telephone1!==""){
				listTelephone.push(item.telephone1)
			}
			if(item.telephone2!==""){
				listTelephone.push(item.telephone2)
			}
			if(item.telephone3!==""){
				listTelephone.push(item.telephone3)
			}
		}		
	}

	return listTelephone
}

export const formatArrayCategory = (categories) => {
	let listCategory= []

	for(let index in categories){
		let item = categories[index]
		if(item.category!==""){
			listCategory.push(item.category)
		}
	}
	return listCategory
}

export const formatArrayLocal = (locals) => {
	let listLocals= []

	for(let index in locals){
		let item = locals[index]
		if(item.local!==""){
			listLocals.push(item.local)
		}
	}
	return listLocals
}

const formatFormLocal = (locals) => {
	let listLocals = locals.map(item => { return { local: item }})
	return listLocals
}

const formatFormCategories = (categories) => {
	let listCategories = categories.map(item => { return { category: Number(item) }})
	return listCategories
}

const formatFormTelephone = (telephones) => {
	let data = chunkArray(telephones, 3)
	for(let index in data){
		if(Object.keys(data[index]).length<3){
			for(let i = Object.keys(data[index]).length; i<3; i++){
				data[index][i]=("")
			}
		}
	}

	let listTelephone = []

	for(let key in data){
		let item = data[key]
		listTelephone =[...listTelephone, {
			telephone1: item[0],
			telephone2: item[1],
			telephone3: item[2]
		}]
	}

	return listTelephone
}

const formatFormEmail = (emails) => {
	let data = chunkArray(emails, 3)
	for(let index in data){
		if(Object.keys(data[index]).length<3){
			for(let i = Object.keys(data[index]).length; i<3; i++){
				data[index][i]=("")
			}
		}
	}

	let listEmail = []

	for(let key in data){
		let item = data[key]
		listEmail =[...listEmail, {
			email1: item[0],
			email2: item[1],
			email3: item[2]
		}]
	}

	return listEmail
}

const chunkArray = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );


export const formatDowload = (listStore, categories) => {
	  
	const dataExport = listStore.map(item => {
		let dataFormat = preFormatStore(item)
	
		let dataSend = formatSendStore(dataFormat)

		const categoryName = dataSend.category.toString().split(",").map(cat => {
			return categories.find(x => Number(x.value)===Number(cat))?.label
		}).join(",")

		return {
			tienda: dataSend.brand,
			numero_local: dataSend.nroLocal,
			logo: dataSend.icon_logo,
			portada_escritorio: dataSend.front_cover,
			portada_movil: dataSend.front_cover,
			telefono: dataSend.telephone,
			email: dataSend.email,			
			categoria: categoryName,
			description: dataSend.description,
		}

	})

	return dataExport
}

export const formatListInitial= (listStoreGlobal) => {
	listStoreGlobal.sort((a, b) => {
		if(a.brand > b.brand) return 1;
		if(a.brand < b.brand) return -1;

		return 0;
	})

	let initialStoreList = listStoreGlobal.slice(0, 20)

	return { listStoreGlobal, initialStoreList }
}

export const sortSearch = (typeSort, listStore) => {
	switch (typeSort) {
		case 'ascending_order':
			//Menor a mayor
			return listStore.sort((a, b) => {
						if(a.brand > b.brand) return 1;
						if(a.brand < b.brand) return -1;

						return 0;
					})
		case 'descending_order':
			//Mayor a menor
			return listStore.sort((a, b) => {
						if(a.brand < b.brand) return 1;
						if(a.brand > b.brand) return -1;

						return 0;
					})
	  default:
	    return listStore
	}
}