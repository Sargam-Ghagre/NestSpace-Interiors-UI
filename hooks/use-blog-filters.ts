"use client"

import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useMemo } from "react"
import { blogPosts } from "@/lib/blog-data"

// Exclude the featured post (index 0) — same slice used on the page
const LATEST_POSTS = blogPosts.slice(1)

export function useBlogFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Read filter values from URL; fall back to defaults
  const category = searchParams.get("category") || "All"
  const search = searchParams.get("q") || ""

  // Derive filtered posts from URL params (memoised)
  const filteredPosts = useMemo(() => {
    return LATEST_POSTS.filter((post) => {
      const matchesCategory = category === "All" || post.category === category
      const query = search.trim().toLowerCase()
      const matchesSearch =
        query === "" ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [category, search])

  // True whenever at least one filter is active
  const isFiltered = category !== "All" || search.trim() !== ""

  // --- Internal URL updater ---
  const updateFilters = (newFilters: { category?: string; q?: string }) => {
    const params = new URLSearchParams(searchParams.toString())

    if (newFilters.category !== undefined) {
      if (newFilters.category === "All") {
        params.delete("category")
      } else {
        params.set("category", newFilters.category)
      }
    }

    if (newFilters.q !== undefined) {
      if (newFilters.q.trim() === "") {
        params.delete("q")
      } else {
        params.set("q", newFilters.q.trim())
      }
    }

    const queryString = params.toString()
    router.push(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    })
  }

  // --- Public setters ---
  const setCategory = (value: string) => updateFilters({ category: value })
  const setSearch = (value: string) => updateFilters({ q: value })

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete("category")
    params.delete("q")
    const queryString = params.toString()
    router.push(queryString ? `${pathname}?${queryString}` : pathname, {
      scroll: false,
    })
  }

  return {
    category,
    search,
    filteredPosts,
    isFiltered,
    setCategory,
    setSearch,
    clearFilters,
  }
}
