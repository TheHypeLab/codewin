create table users (
  id bigint generated always as identity primary key,
  email text unique not null,
  password text not null,
  openai_api_key text
);

create table chat_history (
  id bigint generated always as identity primary key,
  user_id bigint references users(id) on delete cascade,
  message text,
  response text,
  timestamp timestamptz default now()
);