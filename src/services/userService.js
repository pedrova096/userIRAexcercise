import {useMutation, useQueryClient} from 'react-query';
import {USERS_ENDPOINT} from 'src/constants/endpoints';
import fetchApi from './fetchApi';

const userKeys = {
  all: ['users'],
  oneUser: id => userKeys.all.concat(id),
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

export const useUserById = id => {
  const queryClient = useQueryClient();
  return queryClient.getQueryData(userKeys.oneUser(id));
};
