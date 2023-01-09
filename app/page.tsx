import GithubIcon from "components/icons/Github"
import TwitterIcon from "components/icons/Twitter"

export default function Home() {
  return (
    <>
      <main className="flex h-full grow flex-col items-center justify-center space-y-12">
        <div className="flex flex-col items-center justify-center space-y-2">
          <span className="text-7xl font-bold">🍭</span>
          <h1 className="text-7xl font-bold tracking-tighter">StartKit</h1>
          <span className="text-center text-2xl tracking-tight text-neutral-600 dark:text-neutral-300">
            A sane way to start your next{" "}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noreferrer"
              className="rounded bg-pink-100 px-1 transition-colors hover:bg-pink-200 dark:bg-pink-800 hover:dark:bg-pink-700"
            >
              next
            </a>{" "}
            project.
          </span>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2">
          <a
            href="https://github.com/startkit-dev/startkit-next"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 rounded bg-neutral-200 py-1 px-2 text-sm transition-colors hover:bg-neutral-300 dark:bg-neutral-600 hover:dark:bg-neutral-500"
          >
            <GithubIcon className="h-4 w-4" />
            <span>View Source on Github</span>
          </a>

          <a
            href="https://twitter.com/startkit_dev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 rounded bg-neutral-200 py-1 px-2 text-sm transition-colors hover:bg-neutral-300 dark:bg-neutral-600 hover:dark:bg-neutral-500"
          >
            <TwitterIcon className="h-4 w-4" />
            <span>
              Follow <span className="font-semibold">@startkit_dev</span> on
              Twitter
            </span>
          </a>
        </div>
      </main>
    </>
  )
}
