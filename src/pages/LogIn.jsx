import React from 'react'
import { LabeledInput } from '../components/LabeledInput'

function LogIn() {
  return (
    <>
        <h2>Log In</h2>
        <LabeledInput text = {"Email"} type = {"email"} />

    </>
  )
}

export { LogIn }