// Copyright (c) 2022, ASHISH and contributors
// For license information, please see license.txt

frappe.ui.form.on('Task summary',{
	team_member: function(frm){
		frm.clear_table("task_details")
		frappe.call({
			method:"set_value",
			doc:frm.doc,
			callback: function(r){
				frm.refresh_field("task_details")
			}

		})
	}
	
});
