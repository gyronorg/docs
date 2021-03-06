import { FC } from '@gyron/runtime'
import { useRouter } from '@gyron/router'
import { Header } from '@/components/header'
import classnames from 'classnames'

export const Layout = FC(({ children }) => {
  const router = useRouter()
  return (
    <div
      class={classnames(
        'text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900',
        {
          'background-linear': true,
          'background-linear-full': router.path === '/',
        }
      )}
    >
      <div class="flex flex-col min-h-screen">
        <Header />
        <div class={classnames('overflow-hidden')}>{children}</div>
      </div>
    </div>
  )
})
