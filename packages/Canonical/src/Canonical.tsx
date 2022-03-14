import { NextRouter } from 'next/router'
import getConfig from 'next/config'
import React from 'react'

const { serverRuntimeConfig } = getConfig()

export const Canonical = ({ router }: { router: NextRouter }) => {
  const { locale, asPath } = router
  let url = serverRuntimeConfig.siteUrl

  if (locale !== router.defaultLocale) {
    url += `/${locale}`
  }

  url += asPath

  return (
    <>
      <link rel="canonical" href={url} />
    </>
  )
}
