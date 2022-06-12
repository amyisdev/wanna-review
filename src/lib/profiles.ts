import { supabase } from './supabase';

export interface Profile {
  id: string;
  username: string;
  rating_scale: number;
}

export const getProfile = (id: string) => {
  return supabase.from<Profile>('profiles').select('username,rating_scale').eq('id', id).single();
};

export const setProfile = (data: Profile) => {
  return supabase.from('profiles').upsert({ ...data, updated_at: new Date() }, { returning: 'minimal' });
};
