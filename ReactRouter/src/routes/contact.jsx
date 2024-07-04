import { Form, useLoaderData, useFetcher } from "react-router-dom";
import PropTypes from "prop-types";
import { getContact, updateContact } from "../contact";

export async function loader({ params }) {
  const contacts = await getContact(params.contactId);
  if (!contacts) {
    throw new Response("", { status: 404, statusText: "Not Found" });
  }
  console.log("Fetched Contact:", contacts);
  return { contacts };
}
export async function action({ params, request }) {
  const formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}

export default function Contact() {
  const { contacts } = useLoaderData();
  return (
    <div id="contact">
      <div>
        <img
          key={contacts.avatar}
          src={
            contacts.avatar ||
            `https://robohash.org/${contacts.id}.png?size=200x200`
          }
        />
      </div>
      <div>
        <h1>
          {contacts.first || contacts.last ? (
            <>
              {contacts.first} {contacts.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contacts} />
        </h1>
        {contacts.twitter && (
          <p>
            <a
              target="_blank"
              href={`htttps://twitter.com/${contacts.twitter}`}
            >
              {contacts.twitter}
            </a>
          </p>
        )}
        {contacts.notes && <p>{contacts.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  const fetcher = useFetcher();
  const favorite = fetcher.favorite
    ? fetcher.formData.get("favorite") === "true"
    : contact.favorite;
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}
Favorite.propTypes = {
  contact: PropTypes.object.isRequired,
};
