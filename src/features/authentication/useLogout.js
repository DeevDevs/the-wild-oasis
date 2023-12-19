import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "./../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    // logout and remove user data from localStorage
    mutationFn: logoutApi,
    onSuccess: () => {
      // remove all data rom the cash
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLoading };
}
