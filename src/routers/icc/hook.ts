import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { schema } from "./schema";
import { supabase } from "@/libs/supabase";
import { z } from "zod";
import { PostgrestError } from "@supabase/supabase-js";

export const useGetRegistrant = (): UseQueryResult<
  z.infer<typeof schema>[],
  PostgrestError
> => {
  return useQuery({
    queryKey: ["get-register"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("register")
        .select("*")
        .order("created_at", { ascending: true });
      if (!error) {
        return data;
      } else {
        throw error;
      }
    },
  });
};

export const useCreateRegistrant = (): UseMutationResult<
  unknown,
  PostgrestError,
  z.infer<typeof schema>,
  unknown
> =>
  useMutation({
    mutationKey: ["create-register"],
    mutationFn: async (data) => {
      const { error } = await supabase.from("register").insert(data);
      if (!error) {
        return;
      } else {
        throw error;
      }
    },
  });
