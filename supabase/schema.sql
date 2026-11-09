-- Run once in Supabase → SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null default 'Residential',
  location text not null default '',
  year text not null default '',
  description text not null default '',
  image text not null,
  gallery text[] not null default '{}',
  featured boolean not null default false,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.studio_admins (
  user_id uuid primary key references auth.users(id) on delete cascade
);

alter table public.projects enable row level security;
alter table public.studio_admins enable row level security;

-- Approved admins can check their own row, but nobody can grant themselves access.
drop policy if exists "admins can read own admin status" on public.studio_admins;
create policy "admins can read own admin status" on public.studio_admins
  for select to authenticated using (user_id = (select auth.uid()));

drop policy if exists "projects are visible to everyone" on public.projects;
create policy "projects are visible to everyone" on public.projects
  for select to anon, authenticated using (true);

drop policy if exists "admins can add projects" on public.projects;
create policy "admins can add projects" on public.projects
  for insert to authenticated with check (
    exists (select 1 from public.studio_admins a where a.user_id = (select auth.uid()))
  );

drop policy if exists "admins can edit projects" on public.projects;
create policy "admins can edit projects" on public.projects
  for update to authenticated using (
    exists (select 1 from public.studio_admins a where a.user_id = (select auth.uid()))
  ) with check (
    exists (select 1 from public.studio_admins a where a.user_id = (select auth.uid()))
  );

drop policy if exists "admins can remove projects" on public.projects;
create policy "admins can remove projects" on public.projects
  for delete to authenticated using (
    exists (select 1 from public.studio_admins a where a.user_id = (select auth.uid()))
  );

-- After creating your account in Authentication → Users, add its UUID:
-- insert into public.studio_admins (user_id) values ('YOUR-USER-UUID');
