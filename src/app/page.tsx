import { Navigation } from '@/components/navigation/Navigation'

export default function Home() {
  return (
    <div>
      <Navigation />
      <main></main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>Test project by Dale Baldwin</p>
      </footer>
    </div>
  )
}
