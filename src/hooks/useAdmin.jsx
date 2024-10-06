
import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const axiosPublic=useAxiosPublic();

  const { data: adminData, refetch, isLoading: isAdminLoading } = useQuery({
    queryKey: ['adminData', user?.email],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      if (!user?.email) return null;

      console.log('Fetching Admin data for user', user);
      try {
        const res = await axiosPublic.get(`/admins/${user.email}`);
        console.log('Admin data fetched:', res.data);
        return res.data
      } catch (error) {
        console.error('Error fetching Admin data:', error);
        return null;
      }
    }
  });

  return [adminData, isAdminLoading, refetch];
};

export default useAdmin;
