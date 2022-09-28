# # # Copyright (c) 2022, ASHISH and contributors
# # # For license information, please see license.txt


import frappe
from frappe.model.document import Document

class Tasksummary(Document):

     @frappe.whitelist()

     def sef_value(self):
        
         a= frappe.db.get_value("Tasks", {"assigned_to": self.team_member},("name", "status", "task_name") , as_dict=True)
         print(a)

         self.append ("task_details",{
               "tasks": a.get('name'), # we have taken "name" here because the field of childtable "task_details "is linked with the "task" doctype
              "status": a.get("status"), 
              "task_name": a.get("task_name")
         })
    
         return True


