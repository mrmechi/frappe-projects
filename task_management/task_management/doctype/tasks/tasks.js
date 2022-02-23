// Copyright (c) 2022, ASHISH and contributors
// For license information, please see license.txt

frappe.ui.form.on('Tasks', {
	onload: function(frm) {
		frm.set_query("assigned_to", function() {
			return {
				"filters":{
					"is_active":"1"
				}
			}
		})
	}
});

