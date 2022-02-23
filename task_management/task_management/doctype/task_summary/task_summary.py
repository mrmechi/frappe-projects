# # # Copyright (c) 2022, ASHISH and contributors
# # # For license information, please see license.txt

import frappe
from frappe.model.document import Document

class Tasksummary(Document):
	
    @frappe.whitelist()
    def set_value(self):
        doc= frappe.db.get_all("Tasks",{"assigned_to":self.team_member}, "name")
        print(doc)
        for i in doc:
            doc1=frappe.get_doc("Tasks",i.get("name"))
            self.append("task_details",{
                "tasks":doc1.name,
                "status":doc1.status
            })

        return True


# import frappe
# from frappe.model.document import Document

# class Tasksummary(Document):

#     @frappe.whitelist()

#     def set_value(self):
#         doc= frappe.db.get_all ("Tasks", {"assigned_to": self.team_member}, "name")
#         print(doc)
#         for i in doc:
#             doc1= frappe.get_doc("Tasks", i.get("name"))
#             self.append("task_details", {
#                 "tasks": doc1.name,
#                 "status": doc1.status
#             })
#         return True
