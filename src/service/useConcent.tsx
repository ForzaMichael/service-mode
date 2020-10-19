import React from 'react'
import './styles.css'
import { run, useConcent, register } from 'concent'

run() // startup concent

const delay = () => new Promise(r => setTimeout(r, 2000))

const setup = ctx => {
  const { initState, state, computed, watch, setState, sync, invoke, effect } = ctx

  initState({ greeting: 'hello concent' })
  computed('reversedGreeting', n => n.greeting.split('').reverse())
  watch('greeting', (n, o) => {
    if (n.greeting === '666') {
      alert(`from ${o.greeting} to ${n.greeting}`)
    }
  })

  const fetchData = async () => {
    await delay()
    return { greeting: 'data from server' }
  }
  effect(() => {
    console.log('didMount fetch Data')
    invoke(fetchData) // 也可以基于setState组织业务代码
  }, [])

  effect(() => {
    if (state.greeting === '888') console.log('hey 888')
  }, ['greeting'])

  return {
    changeGreeting: e => setState({ greeting: e.target.value }),
    changeGreeting2: sync('greeting')
  }
}

function HelloConcent() {
  const { state, refComputed, settings } = useConcent({ setup })
  return (
    <>
      <h1>{state.greeting}</h1>
      <h1>{refComputed.reversedGreeting}</h1>
      <input value={state.greeting} onChange={settings.changeGreeting} />
      <input value={state.greeting} onChange={settings.changeGreeting2} />
    </>
  )
}

const HelloCls = register({ setup })(
  class extends React.Component {
    render() {
      const { state, refComputed, settings } = this.ctx
      return (
        <>
          <h1>{state.greeting}</h1>
          <h1>{refComputed.reversedGreeting}</h1>
          <input value={state.greeting} onChange={settings.changeGreeting} />
          <input value={state.greeting} onChange={settings.changeGreeting2} />
        </>
      )
    }
  }
)

export default function App() {
  return (
    <div className="App">
      <HelloConcent />
      <HelloCls />
    </div>
  )
}
