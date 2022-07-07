# # # Copyright (c) 2022, ASHISH and contributors
# # # For license information, please see license.txt

# TasK1 (Task management system)         Ashish
# Create following doctype
# 1. team member: fields name=>(member name[data type],teamlead[data type], is active[checkbox type])
# 2. Task: fields name=> (task name[data type], assigned to[link type, it will linked to team member & apply filter is_active =1], status[select type option should be 'not started','working','completed' default value should be not started]
# 3. Task Summary : fields name => (team member[link type, link it to team member doctype], team lead[read only type], and add a child table name should be Task)
#  3.a)      Task Details(child table) fields => (Task[link type, link it to Task dctype], status)

# Description:
# user will add data in team member & then user will create task and assign it to team member
# now when user want to see task summary, he/she need to just select team member name in Task Summary  doctype, all the task and status should be populate in child table after save.
# Note: only active team member should be shown in drop down of link filed, hint;=?> apply filter
# Validation: if member name is empty in Team Member doctype and user try to save then system must throw error messge

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


