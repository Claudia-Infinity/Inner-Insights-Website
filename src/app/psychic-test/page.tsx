import { redirect } from "next/navigation";

// Legacy URL — Free Psychic Test was replaced by the Life Path Number Assessment.
export default function PsychicTestPage(): never {
  redirect("/life-path-number");
}
