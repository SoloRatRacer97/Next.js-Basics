import Router from "next/router";

function ClientProjectsPage() {

      // Recall that programatic navigation is helpful when ensuring that a user cannot navigate back to a certain page. Cannot think of a use case for this right now though....
      function loadProjectHandler() {
            Router.replace('/clients/sdfsdf/sdfds')
      }

      return <div>
            <h1>Projects of a given client</h1>
      </div>
}
export default ClientProjectsPage;