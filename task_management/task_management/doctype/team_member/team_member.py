# Copyright (c) 2022, ASHISH and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class TeamMember(Document):
	def before_save(self):
		if not self.member_name:
			frappe.throw("Please enter member name")

