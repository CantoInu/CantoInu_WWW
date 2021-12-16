/* eslint-disable react/no-danger */
import { useState, useEffect } from 'react'
import Head from 'next/head'
import getConfig from 'next/config'
import lodashGet from 'lodash/get'
import Router from 'next/router'
import 'styles/base.scss'
const { publicRuntimeConfig } = getConfig()


const MyApp = ({ pageProps, Component }) => {
  // NOTE: initialize with desktop viewport width
  const [windowWidth, setWindowWidth] = useState(800)
  const [windowHeight, setWindowHeight] = useState(null)

  const handleResize = () => {
    setWindowWidth(lodashGet(document, 'body.clientWidth'))
    setWindowHeight(lodashGet(window, 'innerHeight'))
  }

  const setWindowResizeHandler = () => {
    window.addEventListener('resize', handleResize)
    setTimeout(handleResize, 50)
  }

  useEffect(() => {
    setWindowResizeHandler()
  }, [])

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href={'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap'}
          rel={'stylesheet'}
        />
        <link
          href={'https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap'}
          rel={'stylesheet'}
        />
        {/*
          // TODO: set favicons
          <link rel={'icon'} href={'/favicon.svg'} />
          <link rel={'mask-icon'} href={'/favicon.svg'} color={'#384764'} />
          <link rel={'apple-touch-icon'} href={'/favicon.png'} />
        */}
      </Head>
      <Component
        {...pageProps}
        windowWidth={windowWidth}
        windowHeight={windowHeight}
      />
    </div>
  )
}

export default MyApp
