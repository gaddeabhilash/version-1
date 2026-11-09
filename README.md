# BHAHAUS architecture portfolio

A lightweight, responsive portfolio site. The public site is a static site and deploys directly to Vercel. Project administration connects to Supabase for sign-in and persistent project records.

## Publish to Vercel

1. Put this folder in a Git repository and import it in Vercel. Select **Other** as the framework preset; there is no build command and the site output is this folder.
2. Create a Supabase project. In **SQL Editor**, run [`supabase/schema.sql`](supabase/schema.sql).
3. Create an account in **Authentication → Users** using the email and password you want for the admin. Copy its user UUID.
4. Run this query in the SQL Editor, replacing the value with the UUID:

   ```sql
   insert into public.studio_admins (user_id) values ('YOUR-USER-UUID');
   ```

5. Copy the project URL and anon/publishable key from Supabase **Project Settings → API**, then set `supabaseUrl` and `supabaseAnonKey` in [`config.js`](config.js). These browser keys are public; row-level security in the SQL file controls admin writes. Turn off public signups in Supabase Authentication settings.
6. Redeploy Vercel. Open the site, click the small ✳ in the footer and sign in. The admin panel can add, edit, and delete projects. Changes go to Supabase and appear on the public site.

## Local preview

Serve the folder with any static HTTP server, such as `npx serve .`. The portfolio and project detail views work without Supabase; sign-in and project management become available when `config.js` is configured. In the footer, ✳ opens the admin panel.

## Content

The initial portfolio projects are illustrative sample entries. Replace their descriptions and photographs with studio-approved project content. Project cover and gallery photographs accept image URLs; use image URLs that are publicly accessible.
