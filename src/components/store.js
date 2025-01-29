import { writable } from "svelte/store";

export const readBooks = writable(new Set());