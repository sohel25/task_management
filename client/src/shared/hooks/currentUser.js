import { get } from 'lodash';

import useApi from '../hooks/api';

const useCurrentUser = ({ cachePolicy = 'cache-only' } = {}) => {
  const [{ data }] = useApi.get('/api/task/', {}, { cachePolicy });

  return {
    currentUser: get(data, 'currentUser'),
    currentUserId: get(data, 'currentUser.id'),
  };
};

export default useCurrentUser;
