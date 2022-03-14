import { NextRouter } from 'next/router'
import getConfig from 'next/config'
import React from 'react'

const { serverRuntimeConfig } = getConfig()

export const Hreflang = ({ router }: { router: NextRouter }) => {
  return (
    <>
      {router?.locales?.map((locale) => {
        let url = serverRuntimeConfig.siteUrl

        if (locale !== router.defaultLocale) {
          url += `/${locale}`
        }

        url += router.asPath

        return (
          <>
            <link rel="alternate" href={url} hrefLang={locale} />
          </>
        )
      })}
    </>
  )
}
