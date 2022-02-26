export class ContactService {
	contacts = [
	 {
		 id: "1",
		 nom: "Miraï",
		 prenom: "Gerard",
		 sexe: "H",
		 age: 38
	 },
	 {
		 id: "2",
		 nom: "Van Ness",
		 prenom: "Jaspe",
		 sexe: "F",
		 age: 25
	 },
	 {
		 id: "3",
		 prenom: "Archibald",
		 nom: "De Cuivre-Champs",
		 sexe: "H",
		 age: 19
	 },
	 {
		 id: "4",
		 prenom: "Monica",
		 nom: "Tartan",
		 sexe: "F",
		 age: 40
	 },
	 {
		 id: "5",
		 prenom: "Camille",
		 nom: "Redbone",
		 sexe: "F",
		 age: 20
	 }
	] ;
	
	
	/*
		Ajout d'un contact
	*/
	post(contact)
	{
		if (Number.isInteger(contact.age) && 
			contact.sexe.match(/F|G/))
		{
			return {
				success: true,
				total: 1,
				data: contact
			}
		}
		else
		{
			return {
				success: false,
				error: "L'age doit être un entier, le sexe doit être F ou G."
			}
		}			
	}
	
	
	/*
		Modification de contact
	*/
	put(idContact,contact)
	{
		if !(getById(idContact))
		{
			return {
				success: false,
				error: "Contact inconnu."
			}
		}
		
		if (Number.isInteger(contact.age) && 
			contact.sexe.match(/F|G/))
		{
			return {
				success: true,
				total: 1,
				data: contact
			}
		}
		else
		{
			return {
				success: false,
				error: "L'age doit être un entier, le sexe doit être F ou G."
			}
		}	
	}
	
	
	/*
	Liste des contacts filtrés
	*/
	get(filter = null){
		var contactsFiltre = {};
		
		if (filter)
		{
			for (const contact of contacts)
			{
				if (filter.prenom)
				{
					if !(contact.prenom.match(filter.prenom))
					{
						continue;
					}
				}
				if (filter.nom)
				{
					if !(contact.nom.match(filter.nom))
					{
						continue;
					}
				}
				if (filter.sexe)
				{
					if !(contact.sexe.match(filter.sexe))
					{
						continue;
					}
				}
				
				contactsFiltre.push(contact); // Si on arrive là c'est qu'il match tous les filtres, ou qu'il n'y en a pas
			}
		}
		else
		{
			contactsFiltre = contacts;			
		}
		
		return {
			success: true,
			total: contactsFiltre.length,
			data: contactsFiltre
		}
	}
	
	/*
		Retourne un seul contact
	*/
	getById (id: number) {
		const chanson = this.chansons.find(
		  (c) => {
			return c.id === id;
		  }
		);
		return chanson;
	}
	
	
	/*
	 Suppression d'un contact
	*/
	delete(idContact){
		if !(getById(idContact))
		{
			return {
				success: false,
				error: "Contact inconnu."
			}
		}
		else {
			return {
				success: false,
				message: "Contact supprimé."
			}
		}
	}
}