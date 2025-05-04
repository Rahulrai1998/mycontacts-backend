import  asyncHandler  from "express-async-handler";

//@description: get all contacts
//@route: GET /api/contacts
//@access: public
export const getContacts = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "All Contacts" });
});

//@description: create new contact
//@route: POST /api/contacts
//@access: public
export const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  res.status(201).json({ message: "Create Contact" });
});

//@description: get contact
//@route: GET /api/contacts/:id
//@access: public
export const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Contact ${req.params.id}` });
});

//@description: update contact
//@route: PUT /api/contacts/:id
//@access: public
export const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Contact ${req.params.id}` });
});

//@description: delete contact
//@route: DELETE /api/contacts/:id
//@access: public
export const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Contact ${req.params.id}` });
});
