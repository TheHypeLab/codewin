import { supabase } from '../supabaseClient';

export async function signUpUser(email, password) {
  const { user, error } = await supabase.auth.signUp({ email, password });
  return { user, error };
}

export async function signInUser(email, password) {
  const { user, error } = await supabase.auth.signIn({ email, password });
  return { user, error };
}

export async function signOutUser() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function updateUserAPIKey(user, apiKey) {
  const { data, error } = await supabase
    .from('users')
    .update({ openai_api_key: apiKey })
    .match({ id: user.id });
  return { data, error };
}