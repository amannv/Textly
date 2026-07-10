import Dashboard from "@/components/Dashboard"
import { Analytics } from '@vercel/analytics/next';

export default function Home() {
  return (
  <>
  <Dashboard />
  <Analytics />
  </>
  )
}
