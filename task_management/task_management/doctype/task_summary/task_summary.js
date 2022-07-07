// // Copyright (c) 2022, ASHISH and contributors
// // For license information, please see license.txt

// frappe.ui.form.on('Task summary',{
// 	team_member: function(frm){
// 		if(frm.doc.team_member){
// 			frm.clear_table("task_details")
// 		frappe.call({
// 			method:"sef_value",
// 			doc:frm.doc,
// 			callback: function(r){
// 				frm.refresh_field("task_details")
// 			}

// 		})
// 		}
// 	}
	
// })



// frappe.ui.form.on('Task summary', {
// 	team_member: function(ash){
// 		if(ash.doc.team_member){
// 			ash.clear_table("task_details")
// 		frappe.call({
// 			method: "sef_value",
// 			doc:ash.doc,
// 			callback:function(a){
// 				ash.refresh_field("task_details")
// 			}
// 		})

// 		}
// 	}
// })

// frappe.ui.form.on('Task summary',{
// 	onload(frm)
// 	{
// 		const field=[
// 			{
// 				fieldtype:'Data',
// 				fieldname: "tasks",
// 				label: "Tasks",
//                 in_list_view:1,

// 			},
//             {
//                 fieldtype:'Data',
// 				fieldname: "status",
// 				label: "Status",
//                 in_list_view:1,
//             },
// 			{
//                 fieldtype:'Data',
// 				fieldname: "Task_name",
// 				label: "Task Name",
//                 in_list_view:1,
//             }
// 		];

// 		frappe.prompt([
// 			{
// 			label: 'Member name',
// 			fieldname: 'member_name',
// 			fieldtype: 'Data'
// 			},
// 			{
// 			label: 'Team lead',
// 			fieldname: 'team_lead',
// 			fieldtype: 'Data'
// 			},
// 			{
// 				label: "Task details",
// 				fieldname:"task_details",
// 				fieldtype:"Table",
// 				options:"Task Details",
// 				fields:field
// 			},
       
// 		], 
// 		(values)=> {
// 			console.log(values.member_name, values.team_lead, values.task_details);
// 			// cur_frm.doc.task_details = values.task_details;
// 			// cur_frm.doc.tasks = values.tasks;
// 			for (let i=0; i< values.task_details.length; i++){
// 				frm.add_child("task_details", {
// 					tasks:values.task_details[i].tasks,
// 					status:values.task_details[i].status,
// 					task_name:values.task_details[i].task_name,
// 				})
// 			}

// 			cur_frm.refresh();
//             cur_frm.save();

// 			// for (i = 0; i = values; 1++) {
				
		
		
// 		})
// 	},
// })

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




// frappe,ui.form.on("Task summary", {
// 	team_member:function (frm, cdt, cdn){
// 		if (frm.doc.team_member){
// 			// frm.clear_table("task_details")
// 			frappe.call({
// 				method: "sef_value",
// 				doc:frm.doc,
// 				callback: function(r){
// 					frm.refresh_field("task_details")
// 				}
// 			})
// 		}
// 	}
// })