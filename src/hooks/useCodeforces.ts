import axios from "axios"
import { useEffect, useState } from "react"

export type CFUser = {
    handle: string
    rating: number
    maxRating: number
    rank: string
    maxRank: string
    avatar: string
}
export type CFStatus = "loading" | "error" | "success"

export function useCodeForces(handle: string) {
    const [data, setData] = useState<CFUser | null>(null)
    const [status, setStatus] = useState<CFStatus>("loading")

    useEffect(() => {
        if (!handle) return;

        const fetchUser = async () => {
            try {
                setStatus("loading");
                const response = await axios.get(
                    `https://codeforces.com/api/user.info?handles=${handle}`
                )
                if (response.data.status !== "OK") {
                    throw new Error("CF API failed");
                }
                const user = response.data.result[0];
                setData({
                    handle: user.handle,
                    rating: user.rating ?? 0,
                    maxRating: user.maxRating ?? 0,
                    rank: user.rank ?? "unrated",
                    maxRank: user.maxRank ?? "unrated",
                    avatar: user.avatar,
                })
                setStatus("success");
            } catch (error) {
                console.error("Error fetching CF data:", error);
                setStatus("error");
            }
        }

        fetchUser() 

    }, [handle])
    return { data, status }
}