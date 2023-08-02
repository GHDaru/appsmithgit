export default {
	getFilteredTickets: async () => {
		const tickets = await getTickets.run();
		const status = selStatus.selectedOptionValue;
		const priority = selPriority.selectedOptionValue;

		let filteredTickets = tickets;

		if (status) {
			filteredTickets = tickets.filter(a => a.status === status);
		}

		if (priority) {
			filteredTickets = tickets.filter(a => a.priority === priority);
		}

		if (status && priority) {
			filteredTickets = tickets.filter(a => {
				return a.status === status && a.priority === priority;
			});
		}

		return filteredTickets;
	},  

	createTicket: async () => {
		await createTicket.run()
			.then(()=> this.getFilteredTickets())
			.then(()=> closeModal('mdlNewTicket'))
	}
}