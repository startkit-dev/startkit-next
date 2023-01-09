export default function Home() {
  return (
    <>
      <main className="flex h-full grow flex-col items-center justify-center space-y-2">
        <span className="text-7xl font-bold">🍭</span>
        <h1 className="text-7xl font-bold tracking-tighter">StartKit</h1>
        <span className="text-center text-2xl tracking-tight text-neutral-600">
          A sane way to start your next{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noreferrer"
            className="bg-pink-100 px-1 transition-colors hover:bg-pink-200"
          >
            next
          </a>{" "}
          project.
        </span>
      </main>
    </>
  )
}
