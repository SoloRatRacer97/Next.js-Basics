import Link from "next/link";

function ClientProjects() {
  const clients = [
    { id: "1", name: "George" },
    { id: "2", name: "Jango" },
  ];

  return (
    <div>
      <h1>The Projects of a given client</h1>
      <ul>
        <h3>Dymnatic pathing with template literals:</h3>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
      <ul>
        <h3>Dynamic pathing with an object:</h3>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={{
                  // Same as building a string, just different syntax
                  pathname: '/clinets/[id]',
                  query: {id: client.id}
            }}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientProjects;
