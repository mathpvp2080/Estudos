-- Execute no SQL Editor do Supabase. Nunca exponha a service_role key no navegador.
create extension if not exists "pgcrypto";
create table if not exists public.trials (
  id uuid primary key default gen_random_uuid(), email text unique not null,
  name text not null, plan_id text not null, status text not null default 'pre_registered',
  started_at timestamptz not null default now(), expires_at timestamptz not null,
  privacy_version text not null, age_confirmed boolean not null default false
);
create table if not exists public.consents (
  id bigint generated always as identity primary key, trial_id uuid references public.trials(id) on delete cascade,
  kind text not null, version text not null, granted boolean not null, created_at timestamptz not null default now()
);
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade, display_name text,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.study_sessions (
  id bigint generated always as identity primary key, user_id uuid not null references auth.users(id) on delete cascade,
  course_id text not null, score integer, total integer, minutes integer not null default 0,
  created_at timestamptz not null default now()
);
alter table public.trials enable row level security;
alter table public.consents enable row level security;
alter table public.profiles enable row level security;
alter table public.study_sessions enable row level security;
create policy "users read own profile" on public.profiles for select using (auth.uid() = id);
create policy "users update own profile" on public.profiles for update using (auth.uid() = id);
create policy "users read own sessions" on public.study_sessions for select using (auth.uid() = user_id);
create policy "users create own sessions" on public.study_sessions for insert with check (auth.uid() = user_id);
-- trials e consents não recebem políticas públicas: somente o backend com service_role acessa.
