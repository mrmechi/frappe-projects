
frappe.ui.form.on("Task summary", {
	team_member:function(frm, cdt, cdn){
		if(frm.doc.team_member){
			frm.clear_table("task_details")
			frappe.call({
				method: "sef_value",
			    doc:frm.doc,
				callback:function(r){
					frm.refresh_field("task_details")
					

				}
			})
		}
	}

})



