import {useMutation, useQuery, useQueryClient} from 'react-query';
import {USERS_ENDPOINT} from 'src/constants/endpoints';
import fetchApi from './fetchApi';

const userKeys = {
  all: ['users'],
  oneUser: id => userKeys.all.concat(id),
  filters: f => userKeys.all.concat(f !== undefined ? f : []),
};

export const useAddUser = ({onSuccess}) => {
  const queryClient = useQueryClient();

  return useMutation(
    async user => fetchApi.post({body: user, url: USERS_ENDPOINT}),
    {
      onSuccess: res => {
        queryClient.setQueryData(userKeys.oneUser(res.id), res);
        if (onSuccess) {
          onSuccess(res);
        }
      },
    },
  );
};

export const useUsers = ({filters, ...options} = {}) => {
  return useQuery(
    userKeys.filters(filters),
    async () => fetchApi.get({url: USERS_ENDPOINT}),
    options,
  );
};

export const useUserById = id => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData(userKeys.oneUser(id));
};

export const useUserQueryHandler = () => {
  const queryClient = useQueryClient();
  const getUserData = id => queryClient.getQueryData(userKeys.oneUser(id));
  const setUserData = (id, updater) =>
    queryClient.setQueryData(userKeys.oneUser(id), updater);
  return {
    getUserData,
    setUserData,
  };
};
