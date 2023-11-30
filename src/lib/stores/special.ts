import { getRandomSpecial } from "$lib/functions/specialDistibutor";
import { writable } from "svelte/store";

export default writable(getRandomSpecial());