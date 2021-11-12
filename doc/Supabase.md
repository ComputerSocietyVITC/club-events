# Setting up supabase environment variables

- Create a `.env` file in the root of the project
- In the supabase dashboard, click the settings icon on the left navbar
- Then, copy the `anon` key (NOT the `service_role`). Set this as the value for the environment variable `REACT_APP_SUPABASE_ANON_KEY`
- Also copy the project URL and set that to the variable `REACT_APP_SUPABASE_URL`

Note: It is prefixed by REACT_APP_ since its a create-react-app project.
