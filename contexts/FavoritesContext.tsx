import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery, useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient, getApiUrl } from "@/lib/query-client";
import { fetch } from "expo/fetch";

const SESSION_KEY = "dubai_invest_session_id";

interface FavoritesContextValue {
  sessionId: string;
  favorites: number[];
  toggleFavorite: (districtId: number) => void;
  isFavorite: (districtId: number) => boolean;
  isLoading: boolean;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

function generateSessionId() {
  return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [sessionId, setSessionId] = useState<string>("");

  useEffect(() => {
    AsyncStorage.getItem(SESSION_KEY).then((id) => {
      if (id) {
        setSessionId(id);
      } else {
        const newId = generateSessionId();
        AsyncStorage.setItem(SESSION_KEY, newId);
        setSessionId(newId);
      }
    });
  }, []);

  const { data: favData, isLoading } = useQuery<any[]>({
    queryKey: ["/api/favorites", sessionId],
    enabled: !!sessionId,
  });

  const favorites = useMemo(() => {
    return (favData || []).map((f: any) => f.districtId).filter(Boolean);
  }, [favData]);

  const addMutation = useMutation({
    mutationFn: async (districtId: number) => {
      await apiRequest("POST", "/api/favorites", { sessionId, districtId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/favorites", sessionId] });
    },
  });

  const removeMutation = useMutation({
    mutationFn: async (districtId: number) => {
      await apiRequest("DELETE", "/api/favorites", { sessionId, districtId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/favorites", sessionId] });
    },
  });

  const toggleFavorite = useCallback((districtId: number) => {
    if (favorites.includes(districtId)) {
      removeMutation.mutate(districtId);
    } else {
      addMutation.mutate(districtId);
    }
  }, [favorites, sessionId]);

  const isFavorite = useCallback((districtId: number) => {
    return favorites.includes(districtId);
  }, [favorites]);

  const value = useMemo(
    () => ({ sessionId, favorites, toggleFavorite, isFavorite, isLoading }),
    [sessionId, favorites, isLoading, toggleFavorite, isFavorite],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
