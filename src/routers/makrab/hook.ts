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
    queryKey: ["get-makrab"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("makrab")
        .select("*")
        .order("created_at", { ascending: true });
      if (error) {
        throw error;
      }
      return data;
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
    mutationKey: ["create-makrab"],
    mutationFn: async (newRegistrant) => {
      const { error } = await supabase.from("makrab").insert(newRegistrant);
      if (error) {
        throw error;
      }
    },
  });
