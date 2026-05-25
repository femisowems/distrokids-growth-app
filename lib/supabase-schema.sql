create extension if not exists "uuid-ossp";

create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  name text,
  role text default 'marketer',
  created_at timestamptz default now()
);

create table if not exists artists (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete cascade,
  name text not null,
  genre text not null,
  brand_color text default '#7df9ff',
  created_at timestamptz default now()
);

create table if not exists releases (
  id uuid primary key default uuid_generate_v4(),
  artist_id uuid references artists(id) on delete cascade,
  title text not null,
  slug text unique not null,
  release_date date not null,
  theme jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

create table if not exists campaigns (
  id uuid primary key default uuid_generate_v4(),
  release_id uuid references releases(id) on delete cascade,
  name text not null,
  channel text not null,
  spend numeric(12,2) default 0,
  objective text,
  status text default 'draft',
  created_at timestamptz default now()
);

create table if not exists experiments (
  id uuid primary key default uuid_generate_v4(),
  campaign_id uuid references campaigns(id) on delete cascade,
  name text not null,
  objective text,
  status text default 'draft',
  winning_variant_id text,
  created_at timestamptz default now()
);

create table if not exists experiment_variants (
  id uuid primary key default uuid_generate_v4(),
  experiment_id uuid references experiments(id) on delete cascade,
  label text not null,
  payload jsonb not null default '{}'::jsonb,
  weight numeric(5,2) default 50,
  conversions integer default 0,
  created_at timestamptz default now()
);

create table if not exists analytics_events (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete set null,
  campaign_id uuid,
  release_id uuid,
  event text not null,
  channel text,
  properties jsonb default '{}'::jsonb,
  occurred_at timestamptz default now()
);

create table if not exists ai_generations (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id) on delete set null,
  generation_type text not null,
  tone text,
  prompt text not null,
  output text not null,
  created_at timestamptz default now()
);

create table if not exists landing_pages (
  id uuid primary key default uuid_generate_v4(),
  release_id uuid references releases(id) on delete cascade,
  slug text unique not null,
  sections jsonb not null default '[]'::jsonb,
  theme jsonb default '{}'::jsonb,
  seo jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

create index if not exists analytics_events_campaign_idx on analytics_events(campaign_id);
create index if not exists analytics_events_release_idx on analytics_events(release_id);
create index if not exists analytics_events_event_idx on analytics_events(event);
