import { useRouter } from 'next/router';

function SelectedClientProjectPage() {

      const router = useRouter();
      
      console.log(router.query);
      return <div>
            <h1>This could be a project page for a specific project for a selected client.</h1>
      </div>
}

export default SelectedClientProjectPage;