import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateContact } from "../contact";

export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
  }

export default function EditContact() {
  const { contact } = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          type="text"
          placeholder="First"
          aria-label="First name"
          name="first"
          defaultValue={contact?.first}
        />
        <input
          type="text"
          placeholder="Last"
          aria-label="Last name"
          name="last"
          defaultValue={contact?.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@hamze"
          defaultValue={contact?.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          type="text"
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          name="avatar"
          defaultValue={contact?.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea name="notes" defaultValue={contact?.notes} rows={6} />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button" onClick={ () => {navigate(-1);}}>Cancel</button>
      </p>
    </Form>
  );
}
