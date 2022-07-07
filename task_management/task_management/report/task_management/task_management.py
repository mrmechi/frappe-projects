# # Copyright (c) 2022, ASHISH and contributors
# # For license information, please see license.txt

import frappe

def execute(filters=None):
	columns = get_columns(filters)
	data = get_data(filters)
	return columns, data

def get_columns(filters):
	return [
        {
            "label": "Task Name",
            "fieldtype": "Data",
            "fieldname": "task_name",
            "width": 700,
        },
        {
            "label": "Assigned to",
            "fieldtype": "link",
            "fieldname": "assigned_to",
            "width": 200,
        },
        {
            "label": "Status",
            "fieldtype": "select",
            "fieldname": "status",
            "width": 150,
        },  
    ]

def get_data(filters):
	sql_query = frappe.db.sql(""" Select name from `tabTasks` Where status = "{0}" and docstatus = 1; """ ) 
	return sql_query



