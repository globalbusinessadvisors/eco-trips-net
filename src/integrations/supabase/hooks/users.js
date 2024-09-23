import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../supabase';

const fromSupabase = async (query) => {
    const { data, error } = await query;
    if (error) throw new Error(error.message);
    return data;
};

/*
### users

| name           | type                        | format    | required |
|----------------|---------------------------|-----------|----------|
| id             | uuid                      | string    | true     |
| email          | character varying         | string    | true     |
| password_hash  | text                      | string    | true     |
| first_name     | character varying         | string    | false    |
| last_name      | character varying         | string    | false    |
| phone_number   | character varying         | string    | false    |
| is_verified    | boolean                   | boolean   | false    |
| created_at     | timestamp without time zone | string    | false    |
| updated_at     | timestamp without time zone | string    | false    |
| role           | character varying         | string    | false    |
| auth_provider  | character varying         | string    | false    |

Note: There are no foreign key relationships for this table.
*/

export const useUser = (id) => useQuery({
    queryKey: ['users', id],
    queryFn: () => fromSupabase(supabase.from('users').select('*').eq('id', id).single()),
});

export const useUsers = () => useQuery({
    queryKey: ['users'],
    queryFn: () => fromSupabase(supabase.from('users').select('*')),
});

export const useAddUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (newUser) => fromSupabase(supabase.from('users').insert([newUser])),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, ...updateData }) => fromSupabase(supabase.from('users').update(updateData).eq('id', id)),
        onSuccess: (_, { id }) => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
            queryClient.invalidateQueries({ queryKey: ['users', id] });
        },
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id) => fromSupabase(supabase.from('users').delete().eq('id', id)),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });
};